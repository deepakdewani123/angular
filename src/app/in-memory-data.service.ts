import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  firstName: 'Deepak' , lastName: 'Dewani', email: 'abc@gmail.com', number: '12345'},
      { id: 11, firstName: 'Mr. Nice' },
      { id: 12, firstName: 'Narco' },
      { id: 13, firstName: 'Bombasto' },
      { id: 14, firstName: 'Celeritas' },
      { id: 15, firstName: 'Magneta' },
      { id: 16, firstName: 'RubberMan' },
      { id: 17, firstName: 'Dynama' },
      { id: 18, firstName: 'Dr IQ' },
      { id: 19, firstName: 'Magma' },
      { id: 20, firstName: 'Tornado' }
    ];
    return {heroes};
  }
}
