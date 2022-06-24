# Action

The *<action-cell />* component displays Table `actions` as icons that trigger the action when clicked.

## Inputs

| input   | type    | default | description                                                         |
| ------- | ------- | ------- | ------------------------------------------------------------------- |
| actions | \[\]!   |         | An array of action items that can be applied to each row separately |
| icon    | string! |         | Name of the icon to display                                         |
| name    | string! |         | A name for the action, it'll later be used to identify the action   |
| title   | string! |         | Text that will be passed as title attribute down to the svg icon    |
| record  | {}!     |         | The data that feeds the Table row these actions will be applied to  |