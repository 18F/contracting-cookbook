---
layout: main
permalink: /recipes/continuous-deployment/
---
# Continuous Deployment

> The contractor shall use software configuration/deployment automation tools (e.g., Capistrano, Chef, Docker), so that developers can deploy code changes to the target environment (e.g., staging) with the issuance of a single command.

[Play 10](https://playbook.cio.gov/#play10) of the US Digital Services Playbook is to "[a]utomate testing and deployments." As discussed in "Automated Testing," it is imperative to ensure continuous integration. But equally important is ensuring continous deployment.

As a practical matter, implementing continuous deployment is more of a workflow pattern than a specific toolset. The general premise of continuous deployment is that an application should be able to automatically deploy--regularly throughout the development process--into multiple, nearly identical environments. The advantage of continuous deployment is that a developer should be able to make application-level changes without worrying about the overhead of deploying those changes into various environments (see "Hosting Environments").

There are many different ways to achieve continuous deployment (e.g., build packs, container-based deployments, etc.), but the central requirement is to ensure no-downtime, automated deployments into a given host environment based on changes to the application's codebase.


## Ingredients

  * Host environments

  * Application-level source control

  * Automated testing


## Directions

  * 
