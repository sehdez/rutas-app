import { useEffect, useState } from 'react';
import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';
import { Location } from '../interfaces/interfaces';


export const useLocations = () => {
    const [hasLocation, setHasLocation] = useState(false);
    const [initialPosition, setInitialPosition] = useState<Location>({
        latitude:0,
        longitude:0
    })

    useEffect(() => {
        getCurrentLocation()
            .then( ( coords ) => {
                setInitialPosition(coords);
                setHasLocation(true);
            })
    },[])

    const getCurrentLocation = (): Promise<Location> => {
        return new Promise( ( resolve, reject ) => {
            Geolocation.getCurrentPosition(
                ({ coords }) => {
                    resolve({
                        latitude: coords.latitude,
                        longitude: coords.longitude
                    });
                },
                (err) => reject({err}),{ enableHighAccuracy: true }
            );
        } );
        
    }



    
    return{
        hasLocation,
        getCurrentLocation,
        ...initialPosition,

    }


}
