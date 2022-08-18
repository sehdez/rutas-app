import React, { createContext, useEffect, useState } from "react";
import { AppState, Platform } from 'react-native';
import { check, PERMISSIONS, PermissionStatus, request, openSettings } from "react-native-permissions";



export interface PermissionsState {
    locationsStatus : PermissionStatus;
}

export const permissionsInitState: PermissionsState = {
    locationsStatus: 'unavailable'
}

type PermissionsContexProps = {
    permissions : PermissionsState;
    askLocationsPermissions  : () => void;
    checkLocationPermissions : () => void;
}


export const PermissionsContext =  createContext({} as PermissionsContexProps);

export const PersmissionsProvider = ( { children }: { children: JSX.Element | JSX.Element[] } ) => {

    const [permissions, setPermissions] = useState(permissionsInitState);

    useEffect(() => {
        checkLocationPermissions();
        AppState.addEventListener('change', (state) => {
            if ( state !== 'active' ) return;
            checkLocationPermissions();

        });

    }, [])

    const askLocationsPermissions = async () => {
    
        let permissionStatus : PermissionStatus;

        if( Platform.OS === 'ios' ){
                permissionStatus = await request( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE );
        }else{
            permissionStatus = await request( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION );
        }
        setPermissions({
            ...permissions,
            locationsStatus : permissionStatus
        })

    }
    const checkLocationPermissions = async () => {

        let permissionStatus : PermissionStatus;

        if( Platform.OS === 'ios' ){
                permissionStatus = await check( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE );
        }else{
            permissionStatus = await check( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION );
        }
        if( permissionStatus === 'blocked' ){ 
            openSettings();
        }


        setPermissions({
            ...permissions,
            locationsStatus : permissionStatus
        })
    }

    return (
        <PermissionsContext.Provider value={{
            permissions,
            askLocationsPermissions,
            checkLocationPermissions
            
        }}>
            { children }
        </PermissionsContext.Provider>
    )

}