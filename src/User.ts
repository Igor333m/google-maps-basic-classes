import { faker } from '@faker-js/faker'
import { Position } from './CustomMap'

export class User implements Position {
  firstName: string
  lastName: string
  lat: number
  lng: number

  phone: string

  constructor() {
    this.firstName = faker.person.firstName()
    this.lastName = faker.person.lastName()
    this.lat = faker.location.latitude()
    this.lng = faker.location.longitude()
    this.phone = faker.phone.number()
  }
}