

export interface IUnknownObject {
    [key: string]: any,
}

export interface IPaginationState {
    page: number,
    page_size: number,
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

export interface ISelectOption {
    label: string,
    value: any,
}

export interface ITableColumn {
    attribute: string,
    label?: string,
    title?: string,
    type: string,

    isFiltrable?: boolean,
    isHidden?: boolean,

    // sorting
    isSortable?: boolean,
    sortAttribute?: string,

    config?: IRelationCell | ILinkCell | IStatusCell | ITextCell | IToggleCell | IProgressCell,
}

export interface ITableServiceState {
    filters?: IUnknownObject,
    page?: IPaginationState,
    sort?: ISortState,
    idProperty: string,
    data?: Map<string, IUnknownObject>
    totalCount?: number
}

export interface IColorCell {
    size: number,
    title?: string,
    config?: IUnknownObject,
}

export interface ILinkCell {
    fragment?: string,
    params?: string[],
    title?: string,
    url?: string,
    target?: string,
    config?: IUnknownObject,
}

export interface IStatusCell {
    name?: string,
    size: number,
    config?: IUnknownObject,
}

export interface ITextCell {
    config?: IUnknownObject
}

export interface IToggleCell {
    name?: string,
    title?: string,
    config?: IUnknownObject,
}

export interface IProgressCell {
    title?: string,
    size?: number,
    config?: IUnknownObject,
}

export interface ITableAction {
    icon: string,
    name: string,
    title: string,
}

export interface IRelationCell {
    type: string,
    config?: IRelationDetail
}

export interface IRelationDetail {
    type?: string,
    config?: IUnknownObject,
}

export interface ITableActionEvent {
    action: string,
    record: IUnknownObject
}

export interface ITableLabels {
    loading: string,
    displaying: string,
    of: string,
    no: string,
    page: string,
    page_size: string,
    no_data: string,
    in_selection: string,
}