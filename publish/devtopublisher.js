const fs = require('fs')
const fetch = require('node-fetch')
const matter = require('gray-matter')

function getPost2Publish() {

    const episodes = fs.readdirSync('episodes/season3')

    const mappedEpisodes = episodes.map(
        episode => {
            const episodeWa = matter(fs.readFileSync(`episodes/season3/${episode}`))

            return { episode, episodeWa }
        }
    )

    const today = new Date()

    const filteredEpisode = mappedEpisodes.filter(episode => {
        const episodeCreationDate = new Date(episode.episodeWa.data.created)

        return (
            !episode.episodeWa.data.dev_to_link &&
            episodeCreationDate.getDate() === today.getDate() &&
            episodeCreationDate.getMonth() === today.getMonth() &&
            episodeCreationDate.getFullYear() === today.getFullYear())
    })


    const formattedPost2Publish = filteredEpisode.map(({ episode, episodeWa }) => {

        return {
            "episode": episode,
            "devtoRequestBody": {
                title: episodeWa.data.title,
                body_markdown: episodeWa.content,
                series: episodeWa.data.series,
                main_image: episodeWa.data.cover_image,
                description: episodeWa.data.description,
                tags: episodeWa.data.tags.split(', '),
                published: true
            }
        }

    })[0]

    return formattedPost2Publish

}

async function deploy2Devto(post) {
    if (!post) {
        console.log('No new post detected to publish.')
        process.exit()
    }

    console.log(`Episode ${post.episode} detected to publish.`)

    const devToResponseBody = await executePublishing(post.devtoRequestBody)

    let devToLink
    if (devToResponseBody) {
        devToLink = updateLinkInMarkdown(devToResponseBody, post.episode)
    }

    return devToLink
}

async function executePublishing(article) {

    const devToEndPoint = 'https://dev.to/api/articles'

    const devToResponse = await fetch(devToEndPoint,
        {
            method: 'POST',
            headers: {
                'api-key': process.env.DEV_TO_API_KEY,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ article })
        }
    )

    let devToResponseBody

    if (devToResponse.status === 201) {
        console.log(`Blog post published at dev.to with status: ${devToResponse.status}`)
        devToResponseBody = await devToResponse.json()
    }

    else {
        console.log(`Error when publishing blog post - status: ${devToResponse.status} - ${devToResponse.statusText}`)
        process.exit(1)
    }

    return devToResponseBody


}

function updateLinkInMarkdown(devToResponse, episode) {

    console.log(`Update markdown of episode ${episode} with link to dev.to post.`)

    const postPath = `episodes/season3/${episode}`
    const post = fs.readFileSync(postPath).toString()
    let occurrences = 0

    //Put the link to the dev.to article in the markdown file
    //Pattern: find the second occurrence of --- and place it before that line
    fs.writeFileSync(
        postPath,
        post.replace(/---/g, (m) => {
            occurrences += 1
            if (occurrences === 2) return `dev_to_link: ${devToResponse.url}\n${m}`
            return m
        })
    )

    return devToResponse.url
}


(async () => {
    try {
        console.log('Start publishing')

        const post = getPost2Publish()
        const devToLink = await deploy2Devto(post)

        console.log(`Published at ${devToLink}`)
        process.exit()

    } catch (error) {
        console.log('ERROR publishing:', error)
        process.exit(1)

    }
})()

