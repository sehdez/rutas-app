import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { useLocations } from '../hooks/useLocations';
import { LoadingScreen } from '../screens/LoadingScreen';
import { Fab } from './Fab'

export const Map = () => {
    
    const { hasLocation, latitude, longitude, getCurrentLocation }= useLocations()

    const mapViewRef = useRef<MapView>();

    const centerPosition = async () => {
        const { latitude, longitude } = await getCurrentLocation()
        mapViewRef.current?.animateCamera({
            center: { latitude, longitude }
        })
    }


    if(!hasLocation){
        return(
            <LoadingScreen />
        )
    }
    return (
        <>
            <MapView
                ref = { (el) => mapViewRef.current = el! }
                provider={PROVIDER_GOOGLE} 
                style={{ flex:1 }}
                showsUserLocation
                showsMyLocationButton={false}                
                region={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker
                    coordinate={{
                        latitude,
                        longitude,
                    }}
                    title='Marcador1'
                    description='desc'
                />
            </MapView>
            <Fab iconName='md-locate-outline' onPress={ centerPosition }   />
        </>
    )
};