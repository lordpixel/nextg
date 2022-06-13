

export interface IUnknownObject {
    [key: string]: any,
}

export interface IPaginationState {
    page?: number,
    page_size?: number,
}


export enum ESortOrder {
    Ascending = 'asc',
    Descending = 'desc'
}

export interface ISortState {
    sort_by?: string,
    sort_order?: ESortOrder.Ascending | ESortOrder.Descending | undefined,
}

export enum ETableColumType {
    Text = 'text',
    Boolean = 'boolean',
    Empty = 'empty',
    Icon = 'icon',
}

export interface ITableColumn {
    attribute: string,
    label?: string,

    isSortable?: boolean,
    isFiltrable?: boolean,
    isHidden?: boolean,

    type: string,
}

export interface ITableServiceState {
    filters?: IUnknownObject,
    page?: IPaginationState,
    selection?: string[],
    sort?: ISortState
}