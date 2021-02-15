---
tags: data_privacy
---

# Best practices

The best practices presented in this section are not part of the actual guidelines, but should provide guidance for common challenges we face when implementing Event Driven APIs.


### Optimistic locking in Event Driven APIs

### Introduction
Optimistic locking might be used to avoid concurrent writes on the same entity, which might cause data loss. A client always has to retrieve a copy of an entity first and specifically update this one. If another version has been created in the meantime, the update should fail. In order to make this work, the client has to provide some kind of version reference, which is checked by the service, before the update is executed.

There are several ways to implement optimistic locking in combination with search endpoints which, depending on the approach chosen, might lead to performing additional requests to get the current version of the entity that should be updated.

### `tag` with `if-match` property
An `tag` can only be obtained by performing a data event request on the single entity resource before the update.

Example:
>Should include event payload exemple here