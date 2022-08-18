import React, { useContext } from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { check, PERMISSIONS, PermissionStatus, request, openSettings } from 'react-native-permissions';
import { Button } from '../components/Button';
import { PermissionsContext } from '../context/PermissionsContext';

export const PermissionsScreen = () => {
    
    const { permissions, askLocationsPermissions } = useContext(PermissionsContext);
    const settings = () => {
        openSettings();
    }

    return (
        <View style={ styles.container }>
            <Text> Es necesario el uso del GPS para usar esta aplicación. </Text>
            <Button onPress={ askLocationsPermissions } title = 'Dar permisos' />
            <Text> { permissions.locationsStatus } </Text>
            <Button onPress={ settings } title = 'Ir a ajustes' />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    
});