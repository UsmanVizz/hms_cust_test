import { Injectable } from "@angular/core";
import axios from "axios";
import { Observable } from "rxjs";
import { environment } from "../environment/environment";

@Injectable({
  providedIn: "root",
})
export class GeoLocationService {
  private geoUrl =
    "https://lasoo-location-service.p.rapidapi.com/location/2065/clientkey/iphone";

  constructor() {}

  getGeoLocation(): Observable<any> {
    const options = {
      method: "GET",
      url: this.geoUrl,
      headers: {
        "X-RapidAPI-Key": environment.rapidAPI_Key,
        "X-RapidAPI-Host": environment.rapidAPI_Host,
      },
    };

    return new Observable<any>((observer) => {
      axios
        .request(options)
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
