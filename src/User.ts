import { faker } from '@faker-js/faker';

export class User {
  firstName: string
  lastName: string
  location: {
    lat: number
    lng: number
  }
  phone: string

  constructor() {
    this.firstName = faker.person.firstName()
    this.lastName = faker.person.lastName()
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()

      
    }
    this.phone = faker.phone.number()
  }
}