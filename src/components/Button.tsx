import React from 'react'
import { TouchableOpacity, StyleSheet, ViewStyle, Text, StyleProp } from 'react-native';

interface Props {
    title: string;
    style?: StyleProp<ViewStyle>;
    onPress: () => void;
}

export const Button = ( {title, onPress, style }: Props ) => {
    return (
        <TouchableOpacity
            style={{ 
                ...styles.button,
                ...style as any
            }}
            onPress={ onPress }
        >
            <Text style={ styles.buttonText }>{ title }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 5,
        height: 30,
        minWidth: 130,
        justifyContent:'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText:{
        fontSize: 20,
        paddingHorizontal: 5
    }
});
