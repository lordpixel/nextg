export interface ICar {
    objectId: string,
    year: number,
    make: string,
    model: string,
    category: string,
    createdAt: string,
    updatedAt: string
  }

export interface IIndexable {
    [key: string]: string;
}