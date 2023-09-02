---
title: 'Episode 148: myNewsWrap – SAP and Microsoft'
created: '2023-09-02'
description: Weekly news update from the SAP and Microsoft universe.
tags: 'azure, github ,sap ,serverless'
cover_image: 'https://raw.githubusercontent.com/lechnerc77/myNewsWrap/main/episodes/cover-images/episode148small.png'
series: 'myNewsWrap - SAP and Microsoft'
dev_to_link: https://dev.to/lechnerc77/episode-148-mynewswrap-sap-and-microsoft-2hpf
---

# Episode 148: myNewsWrap – Microsoft, GitHub and SAP

Welcome to this week's edition of myNewsWrap, news from the world of Microsoft, GitHub, SAP ... and the world in between. The focus of my newsletter is the *application development* and all things around that can improve our lives as developers.

Let's dive into the news and explore what came up this week that can help us to build better solutions for our customers.

## Microsoft Universe

First we take a look at the Microsoft universe and what crossed my path there.

### Serverless - Functions, SWA and Azure Container Apps

Apps need to run somewhere and a very convenient way to run them is *serverless*. What came up this week in this space?

#### Azure Functions and Static Web Apps (SWA)

* [.NET on Azure Functions – August 2023 roadmap update](https://techcommunity.microsoft.com/t5/apps-on-azure-blog/net-on-azure-functions-august-2023-roadmap-update/ba-p/3910098?wt.mc_id=AZ-MVP-5004195)
* [Generally Available: ASP.NET Core integration in Azure Functions](https://azure.microsoft.com/en-us/updates/generally-available-aspnet-core-integration-in-azure-functions/?wt.mc_id=AZ-MVP-5004195)
* [Public preview: Azure Functions .NET 8 support in Linux plans](https://azure.microsoft.com/en-us/updates/public-preview-azure-functions-net-8-support-in-linux-plans/?wt.mc_id=AZ-MVP-5004195)
* [Public preview: Azure Functions .NET worker cold start improvements](https://azure.microsoft.com/en-us/updates/public-preview-azure-functions-net-worker-cold-start-improvements/?wt.mc_id=AZ-MVP-5004195)
* [Building & Hosting a semi-static website with Strapi, Gatsby.js and Azure](https://dominik-deschner.de/blog/building-and-hosting-a-semi-static-website-with-strapi-gatsby.js-and-azure/) by Dominik Deschner

#### Azure Container Apps

* [Generally available: Azure Container Apps workload profiles, more networking features, and jobs](https://techcommunity.microsoft.com/t5/apps-on-azure-blog/generally-available-azure-container-apps-workload-profiles-more/ba-p/3913345?wt.mc_id=AZ-MVP-5004195) by Anthony Chu
* [Serverless Playwright the easy way with Azure Container Apps](https://anthonychu.ca/post/serverless-playwright-azure-container-apps/) by Anthony Chu

### Dapr

Having containers is nice but everything (well ... nearly everything 😉) gets better with [Dapr](https://dapr.io/) as an outstanding tool for app development in the container-based area. Here we go what might be worth a look:

* CNCF [Case Study - HDFC Bank](https://www.cncf.io/case-studies/hdfc-bank/)
* [Enabling your developer's path to production](https://youtu.be/gcBuSSm2r-Q?si=Sd6gkcFyTrq8dNal) by Mauricio Salatino - though much more than Dapr as part of the mix to enable the developers

### Developer Platform

This section collects all news touching the topic of a *developer platform*. Fuzzy term but here you find news on topics that make the life of developers easier beyond pure development be it *Infrastructure as Code*, *GitHub* and more like the [Azure Developer CLI](https://github.com/Azure/azure-dev).  

#### Infrastructure as Code

* Very reflected article on OpenTF: [Why We Are Not Supporting OpenTF](https://medium.com/@hello_9187/why-we-are-not-supporting-opentf-a46855f52dc4)
* Hashicorps license change propagates to the terms of use of the Terraform registry (see this [tweet](https://twitter.com/rawkode/status/1697356592134365680?t=Gziv6w03uX9NWiIaPQ7Brw&s=19)) - be aware of that when planning to switch to OpenTF
* And this got overseen by the license change: [A New Ecosystem for API Specification to Terraform Provider Code](https://youtu.be/pAeQC0fC3Xw?si=q7F6D76K710j9koQ)
* [Testing Terraform code Part 1/2 – Intro and pre-commit hooks](https://brasoe.no/2023/08/30/testing-terraform-code-part-1-2-intro-and-pre-commit-hooks/) by Emil Brasø
* [Terraform - Variable Validation](https://dev.to/pwd9000/terraform-variable-validation-47ka) by Marcel Lupo - recommended to check out the whole series!

#### GitHub

GitHub comes with a blast of new features and enhancements every week. Here are my top 5 news from GitHub that you should check out:

* [10 things you didn’t know you could do with GitHub Projects](https://github.blog/2023-08-28-10-things-you-didnt-know-you-could-do-with-github-projects/) by Kedasha Kerr
* [Why Rust is the most admired language among developers](https://github.blog/2023-08-30-why-rust-is-the-most-admired-language-among-developers/) by Sara Verdi
* [How GitHub reduces costs with upgraded Codespaces](https://github.blog/2023-08-31-how-github-reduces-costs-with-upgraded-codespaces/) by Craig Peters
* [GitHub Desktop 3.3 – Repository rules](https://github.blog/changelog/2023-08-31-github-desktop-3-3-repository-rules/)
* [GitHub Copilot – August 28th Update](https://github.blog/changelog/2023-08-28-github-copilot-august-28th-update/)

> Want to see all news around GitHub? I recommend to have a look at GitHub's [blog site](https://github.blog/) as well as at its [change log](https://github.blog/changelog/) to get the complete overview.

### The best of the "rest"

No matter how the structure of this newsletter is crafted, there is always something that does not perfectly fit. This section is dedicated to topics that I think are worth reading but did not fit into the structure from above:

* [Socket.IO on Azure](https://dev.to/kevinguo/socketio-on-azure-1ma) by Kevin Guo
* [Azure User Group Sweden: Level Up Your Azure Kubernetes Scaling with KEDA](https://www.youtube.com/live/FAtWULN8QgI?si=WC7E_DhdsgKmjEz0) by Wolfgang Ofner 
* [Visual Studio for Mac Retirement Announcement](https://devblogs.microsoft.com/visualstudio/visual-studio-for-mac-retirement-announcement/?wt.mc_id=AZ-MVP-5004195) by Anthony Cangialosi
  * and some more information on that in a very entertaining video: [Microsoft FINALLY killed it](https://youtu.be/N3kuEuauWv4?si=rqbtzDC_kaoChEo3) by Alex Ziskind
* Lllloooonnnngggg awaited feature of Teams: [Announcing more seamless collaboration in Microsoft Teams for multi-tenant organizations](https://techcommunity.microsoft.com/t5/microsoft-teams-blog/announcing-more-seamless-collaboration-in-microsoft-teams-for/ba-p/3901092?wt.mc_id=AZ-MVP-5004195)  
* And from the Google Cloud side, here are the announcements of [Google Cloud Next ’23](https://cloud.google.com/blog/topics/google-cloud-next/welcome-to-google-cloud-next-23/?hl=en)

## 🐱‍👤 SAP and Microsoft - Combining both worlds

Combining Microsoft with SAP can lead to incredible new applications. Let's enter the *twilight zone* (no worries the ninja cat is with us) between SAP and Microsoft and see what's up here:

* [SAP on Azure Video Podcast #158 - The one with updates from ASUG (Geoff Scott)](https://youtu.be/dd-g-R7FPLY?si=DV85-rcsYT6Jvmzj)

> And of course a channel that you should subscribe to if you are working with SAP and Microsoft is the [SAP on Azure](https://www.youtube.com/@SAPonAzure) hosted by [Holger Bruchelt](https://www.linkedin.com/in/holger-bruchelt/) and friends.

### Further news from the SAP world

Let's check out what else happened in the SAP universe that you should check out:

* [SAP wirbt neuen Chef für Künstliche Intelligenz von Microsoft ab](https://amp2.handelsblatt.com/technik/ki/softwarehersteller-sap-wirbt-walter-sun-als-neuen-ki-chef-von-microsoft-ab/29368074.html) by Christof Kerkmann
* [SAP BTP ABAP Environment – Manage System Hibernation](https://blogs.sap.com/2023/07/26/sap-btp-abap-environment-manage-system-hibernation/) by Frank Jentsch
* [Kyma’s Transition to Modular Architecture](https://blogs.sap.com/2023/08/29/kymas-transition-to-modular-architecture/) by Aydin Ozcan

## Learning

One important (and imho best part) of the job of a developer is the *continuous learning*. Here are some interesting learning resources that go beyond vendor-specific technology:

* [Software-Architektur = Abhängigkeiten Managen?](https://www.youtube.com/live/kmV0r5_oUh0?si=NkcscdB0xtnxRe0Q) by Eberhard Wolff

### Golo's Corner

One great resource for becoming a better developer and reflecting about our profession is the high-quality content of [the native web GmbH](https://thenativeweb.io/) by [Golo Roden](https://twitter.com/goloroden). This week the following topics were on the list:

* [IT-Zertifikate: Bessere Chancen bei der Job-Suche? // deutsch](https://youtu.be/GRZQLc1xkoo?si=y4e0TvxbsIZt69Z9)

Make sure to subscribe to Golo's YouTube channels:

* [German channel](https://www.youtube.com/@thenativeweb)
* [English channel](https://www.youtube.com/@thenativeweb-en)

### Events

And last but not least heads up for these upcoming events:

* [Azure Back to School](https://azurebacktoschool.github.io/) running the whole September
* [WASMCON](https://events.linuxfoundation.org/wasmcon/) - virtual attendance possible

**And with this enjoy your weekend and have a successful next week!**
