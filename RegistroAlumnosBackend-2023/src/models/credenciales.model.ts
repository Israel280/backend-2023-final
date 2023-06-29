import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Credenciales'}}})
export class Credenciales extends Entity {
  @property({
    type: 'number',
    required: false,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'alumnoId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  alumnoId: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'username', dataType: 'nvarchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  username: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'password', dataType: 'nvarchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  password: string;

  @property({
    type: 'boolean',
    required: true,
    mssql: {columnName: 'estado', dataType: 'bit', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  estado: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Credenciales>) {
    super(data);
  }
}

export interface CredencialesRelations {
  // describe navigational properties here
}

export type CredencialesWithRelations = Credenciales & CredencialesRelations;
