import { PinElement } from '@googlemaps/adv-markers-utils';

interface Position {
  lat: number,
  lng: number

}

export class CustomMap {
  zoom: number
  position: Position
  mapId: string
  private googleMap: google.maps.Map


  async initMap(): Promise<void> {
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  
    this.googleMap = new Map(
      document.getElementById('map') as HTMLElement,
      {
        zoom: this.zoom,
        center: this.position,
        mapId: this.mapId
      }
    )
  }

    /**
   * Add a marker to the map using Google Maps' AdvancedMarkerElement.
   *
   * @param position - Marker coordinates ({ lat: number, lng: number })
   * @param title - Human-readable title / accessible label for the marker
   * @param pinElement -  PinElement (from @googlemaps/adv-markers-utils) used as the marker's content.
   * @returns Promise that resolves to the created google.maps.marker.AdvancedMarkerElement
   */
  async addMarker(position: Position, title: string, pinElement: PinElement): Promise<google.maps.marker.AdvancedMarkerElement> {
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary

    return new AdvancedMarkerElement({
      map: this.googleMap,
      position,
      title,
      content: pinElement
    })
  }

  /**
   * Create a new CustomMap instance.
   *
   * Note: the constructor is synchronous and only assigns instance fields.
   * initMap() is async and must be awaited separately to load Google Maps
   * libraries and create the underlying google.maps.Map. Prefer using a
   * static async factory (e.g. CustomMap.build) if you need the map ready
   * before use.
   *
   * @param zoom - Initial map zoom level (numeric, fractional values allowed)
   * @param position - Center position for the map ({ lat: number, lng: number })
   * @param mapId - Google Maps mapId string to apply a custom style or map config
   */
  constructor(zoom: number, position: Position, mapId: string) {
    this.zoom = zoom,
    this.position = position,
    this.mapId = mapId
    
    this.initMap();
  }
}