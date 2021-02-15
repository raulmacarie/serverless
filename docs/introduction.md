---
tags: data_privacy
---

# Introduction

Data Privacy software architecture centers around decoupled microservices that provide functionality via Event Driven APIs with a JSON payload. Small engineering teams own, deploy and operate these microservices in their AWS (team) accounts. Our APIs most purely express what our systems do, and are therefore highly valuable business assets.

With this in mind, we’ve adopted ["API First"](https://swagger.io/resources/articles/adopting-an-api-first-approach/) as one of our key engineering principles. Microservices development begins with API definition outside the code and ideally involves peer-review feedback to achieve high-quality APIs. API First encompasses a set of quality-related standards and fosters a peer review culture including a lightweight review procedure. We encourage our teams to follow them to ensure that our APIs:

* are easy to understand and learn
* are general and abstracted from specific implementation and use cases
* are robust and easy to use
* have a common look and feel
* follow a consistent style and syntax

Ideally, all Data Privacy APIs will look like the same author created them.


### Conventions used in these guidelines

The requirement level keywords "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" used in this document (case insensitive) are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).


### Data Privacy specific information

The purpose of our "API guidelines" is to define standards to successfully establish "consistent API look and feel" quality. Teams are responsible to fulfill these guidelines during API development and are encouraged to contribute to guideline evolution via pull requests.

These guidelines will, to some extent, remain work in progress as our work evolves, but teams can confidently follow and trust them.

In case guidelines are changing, following rules apply:

* existing APIs don't have to be changed, but we recommend it
* clients of existing APIs have to cope with these APIs based on
  outdated rules
* new APIs have to respect the current guidelines

Furthermore you should keep in mind that once an API becomes public externally available, it has to be re-reviewed and changed according to current guidelines - for sake of overall consistency.

