
import React, { Component } from 'react';
import { View, Text,Button, StyleSheet} from 'react-native';

class DetailScreen extends Component {
    render() {
        return (
            /*<View style={styles.container}>
                <Text>Detail</Text>
            </View>*/
            <View style={styles.container}>
                <Text>Main</Text>
                <Button onPress={() => this.props.navigation.navigate("Main")} title="Go to Detail" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default DetailScreen;
