import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'RegistroAlumnosDBO',
  connector: 'mssql',
  url: 'mssql://sa:1234@IT-JVELASQUEZ/RegistroColegio',
  host: 'IT-JVELASQUEZ',
  port: 1433,
  user: 'sa',
  password: '1234',
  database: 'RegistroColegio'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class RegistroAlumnosDboDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'RegistroAlumnosDBO';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.RegistroAlumnosDBO', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
