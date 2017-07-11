import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation'
import IOSIcon from "react-native-vector-icons/Ionicons";
import DetailScreen from './detail';
import MainScreen from './main';

const stackNav = StackNavigator({
    Main: {
        screen: MainScreen,
        navigationOptions: {
            title: () => "Main",
            header: ({ navigate }) => ({
                left: (
                    <TouchableOpacity onPress={() => navigate("DrawerOpen")}>
                        <IOSIcon name="ios-menu" size={30} />
                    </TouchableOpacity>
                ),
                style: { paddingRight: 10, paddingLeft: 10 },
            })
        },
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            title: () => "Detail",
        }
    }
})

export default stackNav;
