# Interaction Design

## Typing

The following diagrams describe how the User will interact with the filter inputs.

### User types something

When the User types something in any filter input, the component debounces for 300ms before trigering an update to filters (and query string).

```
                types     +-------+      waits      +-------+      sees         +-----------+
        User ------------>| Input |---------------->| 300ms |------------------>| http call |
                          +-------+                 +-------+                   +-----------+
```

[<- Back to UX](../user.experience.md) &nbsp; [<-- Back to Index](../../README.md)