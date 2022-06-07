## Single source of truth (SST)

Potentially, there could be multiple filters (inputs) in the same instance, so a centralized State is needed. The State is raised to a Service so multiple components can independently feed it and cosume from it. The State implementation uses another feature of RX.js called `BehaviorSubject`, which extends the core functionality of Observables into a more robust pub/sub implementation that allows for multiple components to publish their state into the Service which then will generate the new query string and make it available for any subscribers.

Decision: Extract the State to a Service and leverage RX.js BehaviorSubject<br />
Authors: Abril, Jose, Lucian, Manu<br />
Date: June 3rd, 2022<br />

[ <- Back to root](../../README.md) &nbsp; [ <- Back to Docs](../README.md) &nbsp; [ <- Back to ADR](./README.md)