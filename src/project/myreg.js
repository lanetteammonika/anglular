import React, { Component } from 'react'
import {View, Image,Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'

class myreg extends Component {
    render() {
        return (

            <Image style={styles.backgrod} source={require('./img/first.jpg')}  >
                <View style={styles.contai}/>
                <View style={styles.wrapper}>
                    <View style={styles.inputwrap}>
                        <TextInput
                        placeholder="name"
                        style={styles.inpu}
                        underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.inputwrap}>
                    <TextInput
                        placeholder="name"
                        style={styles.inpu}
                        underlineColorAndroid="transparent"
                    />
                    </View>

                </View>
                <View style={styles.contai}/>
            </Image>

        )
    }
}
export default myreg
const styles = StyleSheet.create({
    backgrod:{
        width:null,
        height:null
    },
    contai:{
      flex:1
    },
    inputwrap:{
      flexDirection:"row",
        marginVertical:10,
        height:40,backgroundColor:"transparent"
    },
    inpu:{
        flex:1,
        paddingHorizontal:10,
        backgroundColor:"#FFF"
    },
    wrapper:{
      paddingHorizontal:15
    }

})
