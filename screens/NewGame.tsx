import { View, Text, SafeAreaView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';

const NewGame = ({ route, navigation }: any) => {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [player3, setPlayer3] = useState('');
    const [player4, setPlayer4] = useState('');

    return (
        <SafeAreaView
            style={{ width: '100%', backgroundColor: 'white', height: '100%' }}
        >
            <View style={{ paddingHorizontal: 40 }}>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 24,
                        fontWeight: 'bold',
                    }}
                >
                    Team 1:
                </Text>
                <TextInput
                    placeholder="Player 1"
                    style={{
                        width: '100%',
                        borderColor: 'gray',
                        borderWidth: 1,
                        borderRadius: 5,
                        height: 55,
                        paddingHorizontal: 20,
                        fontSize: 18,
                    }}
                    onChangeText={(text) => setPlayer1(text)}
                    value={player1}
                />
                <TextInput
                    placeholder="Player 2"
                    style={{
                        width: '100%',
                        borderColor: 'gray',
                        borderWidth: 1,
                        borderRadius: 5,
                        height: 55,
                        paddingHorizontal: 20,
                        fontSize: 18,
                    }}
                    onChangeText={(text) => setPlayer2(text)}
                    value={player2}
                />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    paddingHorizontal: 60,
                    paddingTop: 40,
                }}
            >
                <Pressable
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                >
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 24,
                            fontWeight: 'bold',
                        }}
                    >
                        BACK
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                >
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 24,
                            fontWeight: 'bold',
                        }}
                    >
                        NEXT
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default NewGame;
