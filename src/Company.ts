import { faker } from "@faker-js/faker"
import { Position } from './CustomMap'

export class Company implements Position {
  name: string
  moto: string
  lat: number
  lng: number

  constructor() {
    this.name = faker.company.name()
    this.moto = faker.company.catchPhrase()
    this.lat = faker.location.latitude()
    this.lng = faker.location.longitude()
  }
}