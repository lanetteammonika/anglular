import React from 'react'
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native'

const Home = (props) => {
    return (
        <View style = {styles.container}>
            <TouchableHighlight>
                <Text style = {styles.text}>
                    Button
                </Text>
            </TouchableHighlight>

        </View>
    )
}

export default Home
const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
    },

    text: {
        borderWidth: 1,
        padding: 25,
        borderColor: 'black',
        backgroundColor: 'red'
    }
})