import React from 'react'
import { Text, View } from 'react-native'

export default function Forecast(props){
    return (
        <View>
            <Text>Weather : {props.main}, {props.description}</Text>
            <Text>Tempeture : {props.temp} °C</Text>
        </View>
    )
}

