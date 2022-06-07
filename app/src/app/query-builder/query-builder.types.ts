export type Column = {
  attribute: string,
  label: string,
  isFiltered: boolean,
}

export interface IFilterUpdate {
  [key: string]: string,
}

export interface IFilterEvent {
  attribute: string,
  newFilterValue: string
}


