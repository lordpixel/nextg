# Functional Specifications
The Component is required to provide the means that allow Users to filter a given recordset, by presenting a UI and building the query string our of the filters.

## User Story 1

As a Table Consumer, I want to be able to enter a term in each filtrable column so that I can generate a query string

Acceptance Criteria: 

- User should be able to see an input for every filtrable colum in the table
- User should be able to enter a term in any of the inputs
- Inputs should be debounced to prevent high-resource consuption
- When the User types in the filter inputs, a new Query string must be generated
- The solution must be reusable


[<-- Back to Scope](./README.md) &nbsp; [<- Back to UX](../user.experience.md) &nbsp; [<-- Back to Index](../../README.md)