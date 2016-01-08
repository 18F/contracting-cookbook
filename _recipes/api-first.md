---
layout: main
permalink: /recipes/api-first/
---
# An API-first data portal

> Finally, [agency] requires that the source of data used in the site be the outbound API.

As part of the [Digital Accountability and Transparency Act of 2014](http://www.gpo.gov/fdsys/pkg/PLAW-113publ101/html/PLAW-113publ101.htm), the Treasury Department was required to "improve the quality of data submitted to USASpending.gov."" To do this, Treasury included *API-first language* in its solicitation for a new USASpending.gov. An API-first approach separates the presentation of data on USASpending.gov from the source of the data. But it also follows a key tenet of API design, namely that the #1 best way to understand and address the weaknesses in an API's design and implementation is to use it in a production system.

This approach has many architectural advantages. It promotes consistency in data publication. It ensures that future changes can be made to USASpending.gov with minimal expense when user needs change (i.e., reduces technical debt). It allows other government websites (such as internal data dashboards) or other web services to connect to the data directly from the source (i.e., improves extensibility). Finally, it should help improve performance and security by allowing the developers to optimize the API instead of optimizing both an API and a separate application.

In sum, an API-first approach is a great choice when you have data you plan to present on a website or portal. If nothing else, it will reduce headaches later when you decide to change your site, which — in all likelihood — you will.


## Ingredients

  * A read API
  * A data portal website

## Directions

  * If starting on a brand new application or service, build out a robust REST API in accordance with the agency's applicable API standards. Otherwise, the first thing to do will be to ensure that you can build out a new API on an existing service or build out the existing API to ensure that it can power the desired presentation interface. This will involve some judgment about which approach to take, but the goal is to ensure that a clean, robust API is available.

  * Once you have an API, ensure that your presentation interface is built using the API. Expect that, as the presentation interface matures, there will be a need to optimize and refine the design of the API itself. This is a good, and natural, result of an API-First approach.

  * Make sure that the API is well documented, so that it's easier to make future changes to the presentation interface (or adoption of alternative presentations).
