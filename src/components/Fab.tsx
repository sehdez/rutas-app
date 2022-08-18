import React from 'react'
import { View, StyleProp, ViewStyle, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    iconName: string;
    onPress : () => void;
    style?  : StyleProp<ViewStyle>;
    location?: boolean;
}

export const Fab = ( { iconName, onPress, style, location = false }: Props ) => {
    return (
        <View style={{...style as any, ...styles.container  }}>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress = { onPress }
                style={ styles.button }
            >
                <Text style={ styles.button }>
                    <Icon name={ iconName } size={ 40 } color='rgba(0,0,0,0.8)' />
                </Text>
                
                {
                    location || true && <View style={ styles.location } />
                }

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:20, 
        right:20,
        height:50,
        width:50,
        zIndex:999,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:200,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 7,
                
    },
    button:{
        justifyContent:'center',
        alignItems:'center'
    },
    location:{
        backgroundColor: 'rgba(0,0,0,0.8)',
        width: 10,
        height: 10,
        borderRadius:50,
        position: 'absolute',


    }
});