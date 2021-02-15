---
tags: data_privacy
---

# Project structure and libraries

The basic project structure will mimic at first a basic framework structure, to get us started. This structure will evolve in the future, and this document will be revised based on the feedback received after the initial prototypes

### Project Structure

![](https://i.imgur.com/idmTwOt.png)

Notice there is no tests folder. This is because we will keep the test file side by side the file that it is testing. So, when we delete a service, for example, we also delete the test file for it as well.

This structure ensures separation of concerns, feature encapsulation and simple deployability.

### Libraries every project should have

1. Typescript - https://www.typescriptlang.org/docs
   Every project should be based on typescript, ensuring that on the development level, the most common mistakes are avoided by strict typed code.

2. io-ts - https://github.com/gcanti/io-ts/blob/master/index.md
   Typescript does not support (or ever will) run time validations. All errors will be catched only at development level. But in case an API returns the wrong data types, this will not be catched by typescript. io-ts solves this issue and [here](https://www.youtube.com/watch?v=KYyDrlmyxdQ) is a helpfull guide to it.

3. Jest - https://jestjs.io/
   Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

4. ExpressJS - https://expressjs.com/
   Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

5. Prettier - https://prettier.io/
   It is generally accepted that having a common style guide is valuable for a project and team but getting there is a very painful and unrewarding process. By far the biggest reason for adopting Prettier is it enforces a consistent style by parsing your code and re-printing it with its own rules.

### TBD
1. Error tracking: AWS CloudWatch, Sentry, etc..
