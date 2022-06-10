

export interface IUnknownObject {
    [key: string]: any,
}

export interface IPaginationState {
    page?: number,
    page_size?: number,
}


export enum ESortDirection {
    Ascending = 'asc',
    Descending = 'desc'
}

export interface ISortState {
    sort_by?: string,
    sort_order?: ESortDirection,
}

export enum ETableColumType {
    Text = 'text',
    Empty = 'empty',
    Icon = 'icon',
}

export interface ITableColumn {
    attribute: string,
    label: string,

    isSortable: boolean,
    isFiltrable: boolean,
    isVisible: boolean,

    type: ETableColumType
}

export interface ITableServiceState {
    filters: IUnknownObject,
    page: IPaginationState,
    selection: string[],
    sort: ISortState
}