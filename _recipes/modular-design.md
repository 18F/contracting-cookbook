---
layout: main
permalink: /recipes/modular-design/
---
# Modular procurement and modular design

The Clinger-Cohen Act, as amended by the Federal Information Technology Acquisition Reform Act, and [OMB guidance](https://www.whitehouse.gov/sites/default/files/omb/memoranda/2015/m-15-14.pdf),require that CIOs use "incremental or modular contracting." The [FAR](https://www.acquisition.gov/sites/default/files/current/far/html/Subpart%2039_1.html) defines modular contracting as "us[ing] of one or more contracts to acquire information technology systems in successive, interoperable increments" and [GAO](http://www.gao.gov/products/GAO-14-361) has  In fact, pursuant to [FAR 39.103](https://www.acquisition.gov/sites/default/files/current/far/html/Subpart%2039_1.html#wp1096828), agencies are advised "to the maximum extent practicable, [to] use modular contracting to acquire major systems [and] non-major systems of information technology."

Fortunately, modern software architecture patterns naturally promote the use of incremental and modular procurement. Specifically, best practices in modern software development generally ensure ["loose coupling"](https://en.wikipedia.org/wiki/Loose_coupling) and ["separation of concerns"](https://en.wikipedia.org/wiki/Separation_of_concerns), both of which ultimately hinge on the idea that individual components or subsystems can (and should) be built separately. In some instances, the use of a "service-oriented architecture" or "microservice architecture" can be used to implement modularity on more complicated systems.

Accordingly, when developing a new IT system, agencies can take advantage of modular contracting by using multiple contracts (whether successive or in parallel) for the development of different components or modules. Moreover, even when a single contract is used, agencies should be ensuring that vendors are using modular design practices to ensure the system's long-term sustainability.


> (As part of the evaluation criteria) The offeror's technical approach shall describe how the vendor will ensure loose coupling and separation of concerns, where appropriate.

## Ingredients

  A technical architecture diagram (does not need to be too detailed)

  An acquisition strategy (e.g., a multiple-award BPA) that ensures modular contracting


## Directions

  First, ensure that there is an acquisition strategy that allows for modular contracting.

  Using the technical architecture diagram, determine which software modules or components should be built separately.

  Use multiple orders to build out the modules than can be built separately.

  Even within a single order, ensure that the vendor's technical approach takes advantage of modular design.
