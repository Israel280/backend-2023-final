import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {registroAlumnoInterface} from '../core/interfaces/alumnos.interface';
import {AlumnoRepository, CredencialesRepository} from '../repositories';

@injectable({scope: BindingScope.TRANSIENT})
export class AlumnosService {
  constructor(
    @repository(AlumnoRepository)
    public alumnoRepository: AlumnoRepository,
    @repository(CredencialesRepository)
    public credencialesRepository: CredencialesRepository,

  ) { }

  async Registrar(data: registroAlumnoInterface) {
    let nuevoAlumno: any;

    const {nombre, apellido, telefono} = data;
    nuevoAlumno = {nombre, apellido, telefono};
    nuevoAlumno.estado = true;

    let alumno = await this.alumnoRepository.create(nuevoAlumno);

    if (!alumno.id)
      return "Error: alumno no pudo ser creado";

    let credenciales = await this.RegistrarCredenciales(data, alumno.id);

    if (!credenciales)
      return "Error: credenciales no pudieron ser creadas";

    let resultado: any = {
      alumno: {
        ...alumno
      },
      credenciales: {
        ...credenciales
      }
    }

    return resultado;
  }

  async RegistrarCredenciales(data: registroAlumnoInterface, alumnoId: number) {
    let nuevasCredenciales: any;

    const {username, password} = data;
    nuevasCredenciales = {username, password};
    nuevasCredenciales.alumnoId = alumnoId;
    nuevasCredenciales.estado = true;

    let credenciales = await this.credencialesRepository.create(nuevasCredenciales);

    return credenciales;
  }
}
