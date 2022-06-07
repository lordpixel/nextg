## Reusability

This PoC is presented as an *Angular Module* that exports a single component, `<query-builder />`. Modules are the best way of sharing code among different applications. Idealy, this would be on its own *NPM package* so Applications can add it as dependency, but it is also possible to just copy-paste the entire `query-builder` folder and register the module in the `app-module`.

Decision: Serve this PoC as an Angular Module<br />
Authors: Abril, Jose, Lucian, Manu<br />
Date: June 1st, 2022<br />

[ <- Back to root](../../README.md) &nbsp; [ <- Back to Docs](../README.md) &nbsp; [ <- Back to ADR](./README.md)