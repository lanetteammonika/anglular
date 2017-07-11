import React, { Component } from 'react'
import { View, Image,Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {

    state = {
        name:'',
        email: '',
        password: ''
    }
    handleName = (text) => {
        this.setState({ name: text })
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }

    handlePassword = (text) => {
        this.setState({ password: text })
    }

    login = (name,email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
    }

    render(){
        return (
            //style = {styles.container}

                <Image source={require('./img/first.jpg')}>
                <Text style={styles.textcolor}> sign up </Text>

                <TextInput style = {styles.input}
                         //  underlineColorAndroid = "transparent"
                           placeholder = "Name"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handleName}/>
                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           keyboardType={'email-address'}
                           placeholder = "Email"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handleEmail}/>

                <TextInput style = {styles.input}
                           secureTextEntry={true}
                           underlineColorAndroid = "transparent"
                           placeholder = "Password"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handlePassword}/>

                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = { () => this.login(this.state.name,this.state.email, this.state.password)}>
                    <Text style = {styles.submitButtonText}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </Image>

        )
    }
}



const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

    textcolor: {
        marginTop: 120,
        marginBottom:15,
       fontSize:30,
        justifyContent: 'center',
        alignItems: 'center',
        color:'#7a42f4',
     textAlign:'center'
    },
    input: {
        paddingHorizontal:15,
        justifyContent: 'center',
        marginBottom:15,
        width: 320,
        height: 40,
  backgroundColor:'#ffffff',
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: 'gray',
        borderWidth: 1,
    },

    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },

    submitButtonText:{
        color: 'white'
    }
})
export default Inputs