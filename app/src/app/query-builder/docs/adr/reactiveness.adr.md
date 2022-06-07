## Reactiveness

This PoC uses RX.js, a reactive programming library that leverages `Observables` instead of `EventEmitters`. RX.js is already present in Angular, in fact, most of the framework features relay on RX.js in one way or another. What this PoC explores, is the possibility to use Observables to handle the User's keyboard input as an stream of events, this would allow developers to use techniques like *filtering*, *debouncing*, *tail-cancel*, etc.

Decision: Use RX.js Observables to handle User imput<br />
Authors: Abril, Jose, Lucian, Manu<br />
Date: June 3rd, 2022<br />

[ <- Back to root](../../README.md) &nbsp; [ <- Back to Docs](../README.md) &nbsp; [ <- Back to ADR](./README.md)