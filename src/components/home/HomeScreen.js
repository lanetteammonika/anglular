import React from 'react';
import {
    View,
    Button,
    Text,TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ChatScreen from './App.js'
class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                {/*<TouchableOpacity  onPress={() => navigate('Chat')}>*/}
                <Text>Hello, Chat App!</Text>
            {/*</TouchableOpacity>*/}
            </View>
        );
    }
}


const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
});
export default SimpleApp