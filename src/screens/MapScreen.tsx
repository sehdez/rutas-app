import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Map } from '../components/Map';


export const MapScreen = () => {
 
    return (
        <View style={ styles.mapa }>
            <Map />
        </View>
    )
}
const styles = StyleSheet.create({
    mapa:{
        flex:1,
    }
});