# Conti Table

This Angular Module exports a Table component, which ships with added features such as:

- Debounced Filtering
- Sorting
- Pagination
- Selection

Debounced filtering, sorting and pagination are absctracted away into a simple query string that can be passed to any endpoint as query parameters. Selection events are exposed via `onSelection` EventEmmiter.

## State

The State that powers the aforementioned features lives in the Table Service, an Angular Service that exposes a set of Observables for each specific feature:

### Filters

Filters are stored as a simple object in which `keys` represent the *attribute* and `values` the expected *value*. The Table Service creates a BehaviorSubject `_filters` to track the Filters State and exposes it as a Shared Observable `filter$`.

#### Filter State Subscribers

The Shared Observale is used internally by the Table to control the behavior of the Filter Input components it renders for each _Filtrable Column_, it is not exposed outside the Table component.

#### Filter State Publishers

The BehaviorSubject for Filters is exposed indirectly by the different functions in the Table Service that generate a new _query string_, in particular, [setFilters](../app.component.html) fuction that updates the Filters State specifically.



