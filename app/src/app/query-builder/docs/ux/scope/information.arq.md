# Information Architecture

## Information

The QueryBuilder service keeps information about:

- filters
- query string

It exposes the `setFilter` function to update filters.

```
         +-------------------------+
         |  Query Builder Service  |
         +------------+------------+
                      |
                      | exposes
                      |
         +------------+-------------+
         |            |             |
Behabior | Subject    |    Behabior | Subject
         |            |             |
    +----+---+        |      +------+------+
    | query$ |        |      |   filter$   |
    +--------+        |      +-------------+
                      |
                      | function
               +------+-------+
               |  setFilter() |
               +--------------+
```


[<-- Back to Scope](./README.md) &nbsp; [<- Back to UX](../user.experience.md) &nbsp; [<-- Back to Index](../../README.md)