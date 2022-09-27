import { View, SafeAreaView, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const GameDetails = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'white',
            }}
        >
            <View style={{ backgroundColor: 'white' }}>
                <Text>GameDetails</Text>
            </View>
            <Button
                title="Home"
                onPress={() => {
                    navigation.navigate('Home');
                }}
            ></Button>
        </SafeAreaView>
    );
};

export default GameDetails;
