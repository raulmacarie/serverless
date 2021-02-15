---
tags: data_privacy
---

# Events

Data Privacy architecture centers around decoupled microservices and in that context we favour asynchronous event driven approaches. The guidelines in this section focus on how to design and publish events intended to be shared for others to consume.

### Events, event types, and categories

Events are defined using an item called an _Event Type_. The Event Type allows events to have their structure declared with a schema by producers and understood by consumers. An Event Type declares standard information, such as a name, an owning application (and by implication, an owning team), a schema defining the event's custom data, and a compatibility mode declaring how the schema will be evolved. Event Types also allow the declaration of validation and enrichment strategies for events, along with supplemental information such as how events can be partitioned in an event stream.

Event Types belong to a well known _Event Category_ (such as a data change category), which provides extra information that is common to that kind of event.

Event Types can be published and made available as API resources for teams to use, typically in an _Event Type Registry_. Each event published can then be validated against the overall structure of its event type and the schema for its custom data.


### {MUST} treat events as part of the service interface

Events are part of a service’s interface to the outside world equivalent in standing to a service’s REST API. Services publishing data for integration must treat their events as a first class design concern, just as they would an API. For example this means approaching events with the "API first" principle in mind as described in the **introduction**.


### {MUST} make event schema available for review

Services publishing event data for use by others must make the event schema as well as the event type definition available for review.


### {MUST} ensure event schema conforms to Open API schema object

To align the event schema specifications to API specifications, we use the Schema Object as defined by the Open API Specifications to define event schemas. This is particularly useful for events that represent data changes about resources also used in other APIs.

The [Open API Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#schemaObject) is an **extended subset** of [JSON Schema Draft 4](http://json-schema.org/). For convenience, we highlight some important differences below. Please refer to the [Open
API Schema Object specification](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#schemaObject) for details.

As the Open API Schema Object specification _removes_ some JSON Schema keywords, the following properties *must not* be used in event schemas:

* `additionalItems`
* `contains`
* `patternProperties`
* `dependencies`
* `propertyNames`
* `const`
* `not`
* `oneOf`

On the other side Schema Object _redefines_ some JSON Schema keywords:

* `additionalProperties`: For event types that declare compatibility
  guarantees, there are recommended constraints around the use of this
  field.

Finally, the Schema Object _extends_ JSON Schema with some keywords:

* `readOnly`: events are logically immutable, so `readOnly` can be considered redundant, but harmless.
* `discriminator`: to support polymorphism, as an alternative to `oneOf`.
* `^x-`: patterned objects in the form of [vendor extensions](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#vendorExtensions) can be used in event type schema, but it might be the case that general purpose validators do not understand them to enforce a validation check, and fall back to must-ignore processing. A future version of the guidelines may define well known vendor extensions for events.
