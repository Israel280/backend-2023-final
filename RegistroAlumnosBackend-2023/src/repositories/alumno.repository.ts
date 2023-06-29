import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RegistroAlumnosDboDataSource} from '../datasources';
import {Alumno, AlumnoRelations} from '../models';

export class AlumnoRepository extends DefaultCrudRepository<
  Alumno,
  typeof Alumno.prototype.id,
  AlumnoRelations
> {
  constructor(
    @inject('datasources.RegistroAlumnosDBO') dataSource: RegistroAlumnosDboDataSource,
  ) {
    super(Alumno, dataSource);
  }
}
