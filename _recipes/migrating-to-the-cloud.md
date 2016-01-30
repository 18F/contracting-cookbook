---
layout: main
permalink: /recipes/migrating-to-the-cloud/
---
# Migrating to the cloud

>

According to the [NIST definition of "cloud"](http://csrc.nist.gov/publications/nistpubs/800-145/SP800-145.pdf):

> Cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (e.g., networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction.

Traditionally, the most attractive feature of the cloud for the government is that it's "on-demand." If you have an application that requires a new server, the cloud should make it trivial to simply "spin up" a new server. Similarly, if you have an existing server, but you need to duplicate it to respond to significant "load" on the server, the cloud should make it trivial to spin up a copy of that server. This dynamic quality of the cloud enables entirely different software development and deployment patterns from those that existed before the cloud.

There are three common "service models" for cloud products: Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Software-as-a-Service (SaaS). Depending on the agency's needs, an agency will need to buy multiple cloud products within each service model. For the most part, IaaS and SaaS (less so for PaaS) are largely "commodity" offerings in the sense that costs and services are largely fixed by market conditions. Nevertheless, defining an agency's requirements is often quite difficult, because the cloud fundamentally affects the deployment patterns used by the program office. As such, 18F generally advises agencies to adopt an [phased, incremental approach to "cloud migration"](https://18f.gsa.gov/2015/06/22/avoiding-cloudfall/), focusing on buying smaller increments of infrastructure early on and expanding based on the agency's deployment needs.


## Ingredients

  * [FedRAMP](https://www.fedramp.gov/)


## Directions

  * Before buying cloud services, familiarize yourself with FedRAMP, including systems that have received a FedRAMP approved Authority to Operate (ATO).

  * Develop an agency-specific framework for a phased approach to cloud migration. In doing so, take advantage of existing contract vehicles and micro-purchase thresholds for discovery phases.
