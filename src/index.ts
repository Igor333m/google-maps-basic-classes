/**
 * /// <reference types="@types/google.maps" />
 */


import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

// new google.maps.Map(document.getElementById('map') as HTMLElement)

const initialMapPosition = { lat: 34.052235, lng: -118.243683 }
const positionB = { lat: 34.1607247, lng: -118.4468333 }
const positionC = { lat: 33.999724, lng: -118.4887557 }

const newMap = new CustomMap(1, initialMapPosition, 'newMapId')


async function addNewUser(numOfUsers: number): Promise<void> {

  
  for(let i = 0; numOfUsers > i; i++ ) {
    const {PinElement} = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary
    const pinElement = new PinElement({
        background: '#FBBC04',
    })

    let user = new User()
    
    newMap.addMarker({lat: user.location.lat, lng: user.location.lng}, `${user.firstName} ${user.lastName}`, pinElement.element)
  }
}

addNewUser(3)

async function addNewCompany(numOfCompanies: number): Promise<void> {

  
  
  for(let i = 0; numOfCompanies > i; i++ ) {
    const {PinElement} = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary
    const pinElement = new PinElement({
        background: '#b504fbff',
    })
    let company = new Company()

    newMap.addMarker({lat: company.location.lat, lng: company.location.lng}, `${company.name} \n${company.moto}`, pinElement.element)
  }
}

addNewCompany(3)