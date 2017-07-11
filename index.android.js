/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// export default class reactTutorialApp extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp);
// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';
// import SimpleApp from './src/project/myreg.js'
//
// class reactTutorialApp extends Component {
//     render() {
//         return (
//             <View>
//               <SimpleApp />
//             </View>
//         );
//     }
// }
//
// export default reactTutorialApp
//
// AppRegistry.registerComponent('reactTutorialApp', ()=> reactTutorialApp);
// import React, { Component } from 'react';
// import { AppRegistry,Alert, View,TouchableHighlight,Text } from 'react-native';
// let myApiUrl = "http://192.168.200.21:3000/insert"
// let usersPath = "insert"
// import WebServiceHandler from 'react-native-web-service-handler';
// class reactTutorialApp extends Component {
//     callapi(){
//         //https://itunes.apple.com/search
//         //https://itunes.apple.com/search?media=movie&term=miss
//         //http://private-9a68f1-photoosdotnet.apiary-mock.com/demo
//         // WebServiceHandler.post('https://localhost:3000/insert',null,{'name':'movie', 'email':'mission','password':'dcds'})
//         //     .then((val)=>{
//         //         console.log('callapi: ' + JSON.stringify(val))
//         //         this.setState({data:val})
//         //     })
//         //     .catch((error) => console.log('callapi:'+ JSON.stringify(error)));
//         fetch(`${myApiUrl}`, {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 name: 'dsecxs',
//                 email: 'dc@ds.sd',
//                 password: 'dcd'
//             })
//     }).then(function(response){
//         // console.log('response:',response.status);
//
//             console.log(
//                 response
//             )
//         }).catch(e => console.error(e))
//     }
//
//     render() {
//
//         return (
//             <View >
//
//                 <TouchableHighlight onPress={()=>this.callapi()}>
//                     <Text> Make HTTP Get Request </Text>
//                 </TouchableHighlight>
//             </View>
//         );
//     }
// }
//
// export default reactTutorialApp
//
//  AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)
//import React, { Component } from 'react';
//import { AppRegistry,View} from 'react-native';
//import { DrawerNavigator} from 'react-navigation';
//import Icon from "react-native-vector-icons/FontAwesome";
//import tabNav from './tabnav.js';
//import MainScreen from './main';
// class reactTutorialApp extends Component {
//     render() {
//         return (
//             <View>
//               <tabNav />
//             </View>
//         );
//     }
// }
import React, { Component } from 'react';
import { AppRegistry,TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation'
import IOSIcon from "react-native-vector-icons/Ionicons";
import DetailScreen from './detail';
import MainScreen from './main';

const stackNav = StackNavigator({
    Main: {
        screen: MainScreen,
        // navigationOptions: {
        //     title: "Main",
        //     // header: ({ navigate }) => ({
        //     //     left: (
        //     //         <TouchableOpacity onPress={() => navigate("DrawerOpen")}>
        //     //             <IOSIcon name="ios-menu" size={30} />
        //     //         </TouchableOpacity>
        //     //     ),
        //     //     style: { paddingRight: 10, paddingLeft: 10 },
        //     // })
        // },
    },
    Detail: {
        screen: DetailScreen,
        // navigationOptions: {
        //     title: "Detail",
        // }
    }
})



AppRegistry.registerComponent('reactTutorialApp', () => stackNav);
// import React, {AppRegistry} from 'react-native'
//
// import App from './src/components/draw/App.js'
//
// AppRegistry.registerComponent('reactTutorialApp', () => App)