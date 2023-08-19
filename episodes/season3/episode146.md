---
title: 'Episode 146: myNewsWrap – SAP and Microsoft'
created: '2023-08-19'
description: Weekly news update from the SAP and Microsoft universe.
tags: 'azure, github ,sap ,serverless'
cover_image: 'https://raw.githubusercontent.com/lechnerc77/myNewsWrap/main/episodes/cover-images/episode146small.png'
series: 'myNewsWrap - SAP and Microsoft'
---

# Episode 146: myNewsWrap – Microsoft, GitHub and SAP

Welcome to this week's edition of myNewsWrap, news from the world of Microsoft, GitHub, SAP ... and the world in between. The focus of my newsletter is the *application development* and all things around that can improve our lives as developers.

Let's dive into the news and explore what came up this week that can help us to build better solutions for our customers.

## Microsoft Universe

First we take a look at the Microsoft universe and what crossed my path there.

### Serverless - Functions, SWA and Azure Container Apps

Apps need to run somewhere and a very convenient way to run them is *serverless*. What came up this week in this space?

#### Azure Functions and Static Web Apps (SWA)

* [Generally Available: SDK type bindings in Azure Functions](https://azure.microsoft.com/updates/generally-available-sdk-type-bindings-in-azure-functions/) ... but currently .NET only 😢
* [Step by Step Guide: Migrating v3 to v4 programming model for Azure Functions for Node.Js Application](https://dev.to/azure/step-by-step-guide-migrating-v3-to-v4-programming-model-for-azure-functions-for-nodejs-application-dbn) by Glaucia Lemo - the v4 model is 🔥
* [Generally Available: Durable Functions for Python v2 Programming Model](https://azure.microsoft.com/updates/generally-available-durable-functions-for-python-v2-programming-model/)
* [#ThisMonthInSWA - Jul 2023](https://www.azurestaticwebapps.dev/thismonth/roundup-2023-jul) - the holistic overview about what happened at the SWA space in July
* [Azure Static Web Apps Community Standup - Beyond the frontend with Static Web Apps & Azure Functions](https://www.youtube.com/live/fZljYaqGPy0?feature=share)
* [Access network isolated APIs and databases from Azure Static Web Apps](https://techcommunity.microsoft.com/t5/apps-on-azure-blog/access-network-isolated-apis-and-databases-from-azure-static-web/ba-p/3899179) by Thomas Gauvin

and as perfect segway to Azure Container Apps:

* [Running Azure Functions on Azure Container Apps](https://www.cloudaddict.co.uk/posts/running-azure-functions-on-azure-container-apps/) by Martin Lakov

#### Azure Container Apps

Holy guacamole, a week with quite some GAs for ACA:

* [Generally available: Init containers in Azure Container Apps](https://azure.microsoft.com/updates/generally-available-init-containers-in-azure-container-apps/)
* [Generally available: Session affinity for Azure Container Apps](https://azure.microsoft.com/updates/generally-available-secrets-volume-mounts-for-azure-container-apps/)
* [Generally available: Secrets volume mounts for Azure Container Apps](https://azure.microsoft.com/updates/generally-available-azure-key-vault-references-for-secrets-in-azure-container-apps/)
* [Generally available: Azure Key Vault references for secrets in Azure Container Apps](https://azure.microsoft.com/updates/generally-available-azure-key-vault-references-for-secrets-in-azure-container-apps/)

In the same context this preview is interesting: [Public preview: Azure Application Gateway for Containers](https://azure.microsoft.com/en-us/updates/public-preview-application-gateway-for-containers/)

And of course the monthly community standup:

* [Azure Container Apps Community Standup - Networking and add-ons in Azure Container Apps](https://www.youtube.com/live/lz9mp1A5dkE?feature=share)

### Dapr

Having containers is nice but everything (well ... nearly everything 😉) gets better with [Dapr](https://dapr.io/) as an outstanding tool for app development in the container-based area. Here we go what might be worth a look:

* [Kubernetes for Developers with a Distributed App Runtime](https://thenewstack.io/kubernetes-for-developers-with-a-distributed-app-runtime/) by Alex Williams
* [An in-depth guide to Dapr workflow patterns in .NET](https://www.diagrid.io/blog/in-depth-guide-to-dapr-workflow-patterns) by Marc Duiker
* [Implementing Dapr Pub/Sub functionality to ASP.NET Core Web APIs](https://dev.to/willvelida/implementing-dapr-pubsub-functionality-to-aspnet-core-web-apis-273c) by Will Velida
* [Dapr - The ultimate developer API for authoring microservices](https://youtu.be/mBgQBMhboyU)

### Developer Platform

This section collects all news touching the topic of a *developer platform*. Fuzzy term but here you find news on topics that make the life of developers easier beyond pure development be it *Infrastructure as Code*, *GitHub* and more like the [Azure Developer CLI](https://github.com/Azure/azure-dev).  

#### Infrastructure as Code

* [Bicep Community Call - July '23](https://youtu.be/UuwhLi-Xe2U)
* [Azure Bicep - Deploy Pane](https://luke.geek.nz/azure/Azure-Bicep-Deploy-Pane/) by Luke Murray
* [Infrastructure automation: Terraform with Atlantis vs Crossplane](https://www.youtube.com/live/D9vo4Xscktw?feature=share) - interesting for those discussing Terraform "vs" Crossplane
* Terraform Certification [blog series](https://www.linkedin.com/posts/mattiasfjellstrom_hashicorp-certified-terraform-associate-activity-7096177774209437696-TZ0V/) by Mattias Fjellström

And of course as big topic some blog posts and videos around the licensing change of Terraform:

* The official announcement: [HashiCorp adopts Business Source License](https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license)
* The FAQ: [HashiCorp Licensing FAQ](https://www.hashicorp.com/license-faq)
* Some opinions on the change:
  * [What’s the impact of HashiCorps Open Source Licence change?](https://medium.com/zeitgeist-of-bytes/whats-the-impact-of-hashicorps-open-source-licence-change-32aa55b51b46) by Max Koerbaecher
  * [HashiCorp Adopts Business Source License for All Products](https://www.infoq.com/news/2023/08/hashicorp-adopts-bsl/) by Daniel Bryant
  * [HashiCorp Licensing Changes - What Does It Mean For You?!](https://youtu.be/u7A2ubPT8GA)
* and the Open TF manifest as a reaction to the change: [The OpenTF Manifesto](https://opentf.org/)

#### GitHub

GitHub comes with a blast of new features and enhancements every week. Here are my **top 5** news from GitHub this week that you should check out:

* [If, elseif or else in GitHub Actions](https://thomasthornton.cloud/2023/08/11/if-elseif-or-else-in-github-actions/) by Thomas Thornton - a topic everybody stumbles across
* [GitHub Actions: Required Workflows will move to Repository Rules](https://github.blog/changelog/2023-08-02-github-actions-required-workflows-will-move-to-repository-rules/)
* [Enhanced push protection features for developers and organizations](https://github.blog/2023-08-09-enhanced-push-protection-features-for-developers-and-organizations/) by Zain Malik and Courtney Claessens
* [Introducing code referencing for GitHub Copilot](https://github.blog/2023-08-03-introducing-code-referencing-for-github-copilot/) by Ryan J. Salva
* [Four tips to keep your GitHub Actions workflows secure](https://github.blog/2023-08-09-four-tips-to-keep-your-github-actions-workflows-secure/) by Jaroslav Lobacevski and Kevin Backhouse

> Want to see all news around GitHub? I recommend to have a look at GitHub's [blog site](https://github.blog/) as well as at its [change log](https://github.blog/changelog/) to get the complete overview.

#### Azure Developer CLI

Close to my heart as essence of how to make the developer life easier is the [Azure Developer CLI](https://github.com/Azure/azure-dev). What's up in this area?

* [Azure Developer CLI (azd) – August 2023 Release](https://devblogs.microsoft.com/azure-sdk/azure-developer-cli-azd-august-2023-release/) by Savannah Ostrowski
* [Azd Community Standup - Deploy apps from anywhere with the Azure Developer CLI](https://www.youtube.com/live/LVb2Dt3Faag?feature=share)

and a super sophisticated Microsoft project leveraging azd:

* Azure Arc Jumpstart - [Jumpstart Agora](https://azurearcjumpstart.io/azure_jumpstart_ag/) - this contains some cool hook implementations

### The best of the "rest"

No matter how the structure of this post is crafted, there is always something that does not perfectly fit. This section is dedicated to topics that I think are worth reading but did not fit into the structure from above:

* [Kubernetes v1.28: Planternetes](https://kubernetes.io/blog/2023/08/15/kubernetes-v1-28-release/)
* [AKS Community Meeting - Istio and Service Mesh Update](https://www.youtube.com/live/WPoq6x5UcJo?feature=share)
* [WebAssembly: An Updated Roadmap for Developers](https://bytecodealliance.org/articles/webassembly-the-updated-roadmap-for-developers) by Bailey Hayes
* [Azure Deprecations Board](https://azurecharts.com/timeboards/deprecations)

## 🐱‍👤 SAP and Microsoft - Combining both worlds

Combining Microsoft with SAP can lead to incredible new applications. Let's enter the *twilight zone* (no worries the ninja cat is with us) between SAP and Microsoft and see what's up here:

* [Using Logic App Standard to connect to SAP using BAPI & RFC](https://youtu.be/ZmOPPtIYYM4) by Holger Bruchelt
* [SAP-AI-Usecases](https://github.com/hobru/SAP-AI-Usecases) - impressive collection of different use cases by Holger Bruchelt
* [SAP S/4HANA Cloud ABAP Environment integration journey with Microsoft – Part 2 – Azure OpenAI & AI SDK for ABAP](https://blogs.sap.com/2023/08/15/sap-s-4hana-cloud-abap-environment-integration-journey-with-microsoft-part-2/)
* [SAP on Azure Video Podcast #156 - The one with the AI SDK for ABAP (Gopal Nair)](https://youtu.be/4FXpK3dsBvI)

> And of course a channel that you should subscribe to if you are working with SAP and Microsoft is the [SAP on Azure](https://www.youtube.com/@SAPonAzure) hosted by [Holger Bruchelt](https://www.linkedin.com/in/holger-bruchelt/) and friends.

### Further news from the SAP world

Let's check out what else happened in the SAP universe that you should check out:

* [Smooth transition to ABAP for Cloud Development(Cheat sheet)](https://blogs.sap.com/2023/08/15/smooth-transition-to-abap-for-cloud-developmentcheat-sheet/) by Aocheng Yang - super extensive post about the mapping from old to new world.

## Learning

One important (and imho best part) of the job of a developer is the *continuous learning*. Here are some interesting learning resources that go beyond vendor-specific technology:

* [Building and operating a pretty big storage system called S3](https://www.allthingsdistributed.com/2023/07/building-and-operating-a-pretty-big-storage-system.html) by Werner Vogels - interesting read!
* [Learning Go by examples](https://dev.to/aurelievache/series/13751) a series by Aurélie Vache - stumbled across that and looks nice
* [Download EDA VISUALS](https://serverlessland.com/event-driven-architecture/visuals/download) from Serverless Land ... this is dope!

### Golo's Corner

One great resource for becoming a better developer and reflecting about our profession is the high-quality content of [the native web GmbH](https://thenativeweb.io/) by [Golo Roden](https://twitter.com/goloroden). Check out these videos from the last week:

* [Mein größter Fehler im Informatik-Studium — und was ich daraus gelernt habe // deutsch](https://youtu.be/0yTBeLODW5s)
* [.NET: Warum MOQ (nicht) Schuld ist // deutsch](https://youtu.be/qpApW7ITMLA)
* [My Biggest Mistake in Computer Science Studies — and What I Learned from It // English](https://youtu.be/UGKF_WAq8A8)
* [.NET: Why MOQ is (not) to Blame // English](https://youtu.be/BdOvHjBmyGc)

Make sure to subscribe to Golo's YouTube channels:

* [German channel](https://www.youtube.com/@thenativeweb)
* [English channel](https://www.youtube.com/@thenativeweb-en)

### Events

And last but not least heads up for these upcoming events:

* [GitHub Universe 2023](https://githubuniverse.com/)

**And with this enjoy your weekend and have a successful next week!**
