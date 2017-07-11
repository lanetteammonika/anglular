import React, { Component } from 'react';
import { TabNavigator, TabView } from 'react-navigation'
import Icon from "react-native-vector-icons/FontAwesome";
import stackNav from './stacknav';

const tabNav = TabNavigator({
    TabItem1: {
        screen: stackNav,
        navigationOptions: {
            tabBar: () => ({
                label: "Tab 1",
                icon: ({ tintColor }) => <Icon name={"glass"} size={30} color={tintColor} />
            })
        },
    }
}, {
    tabBarComponent: TabView.TabBarBottom,
    tabBarPosition: "bottom",
    tabBarOptions: {
        activeTintColor: '#222',
    }
});

export default tabNav;
