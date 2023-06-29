import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Alumno'}}})
export class Alumno extends Entity {
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
    type: 'string',
    length: 100,
    mssql: {columnName: 'nombre', dataType: 'nvarchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nombre?: string;

  @property({
    type: 'string',
    length: 100,
    mssql: {columnName: 'apellido', dataType: 'nvarchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  apellido?: string;

  @property({
    type: 'string',
    length: 50,
    mssql: {columnName: 'telefono', dataType: 'nvarchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  telefono?: string;

  @property({
    type: 'boolean',
    mssql: {columnName: 'estado', dataType: 'bit', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  estado?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Alumno>) {
    super(data);
  }
}

export interface AlumnoRelations {
  // describe navigational properties here
}

export type AlumnoWithRelations = Alumno & AlumnoRelations;
