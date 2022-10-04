import {
    View,
    Text,
    SafeAreaView,
    Pressable,
    StyleSheet,
    Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';
import InsetShadow from 'react-native-inset-shadow';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const NewGame = ({ route, navigation }: any) => {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [player3, setPlayer3] = useState('');
    const [player4, setPlayer4] = useState('');

    return (
        <SafeAreaView
            style={{
                width: '100%',
                backgroundColor: 'white',
                height: '100%',
                justifyContent: 'center',
            }}
        >
            <KeyboardAwareScrollView
                style={{
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                }}
                contentContainerStyle={{ justifyContent: 'center' }}
            >
                <View
                    style={{
                        paddingHorizontal: 40,
                        justifyContent: 'center',
                    }}
                >
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 2,
                            marginVertical: 40,
                        }}
                    >
                        <Text
                            style={{
                                ...styles.text,
                                marginBottom: 15,
                            }}
                        >
                            Assign your teams
                        </Text>
                    </View>
                    <Text
                        style={{
                            ...styles.text,
                            marginBottom: 15,
                        }}
                    >
                        Team 1:
                    </Text>
                    <View style={styles.shadowContainer}>
                        <InsetShadow shadowRadius={3} bottom={false}>
                            <TextInput
                                placeholder="Player 1"
                                style={styles.textInput}
                                onChangeText={(text) => setPlayer1(text)}
                                value={player1}
                            />
                        </InsetShadow>
                    </View>
                    <View style={styles.shadowContainer}>
                        <InsetShadow shadowRadius={3} bottom={false}>
                            <TextInput
                                placeholder="Player 2"
                                style={styles.textInput}
                                onChangeText={(text) => setPlayer2(text)}
                                value={player2}
                            />
                        </InsetShadow>
                    </View>

                    <Text
                        style={{
                            ...styles.text,
                            textAlign: 'center',
                            marginVertical: 20,
                        }}
                    >
                        vs
                    </Text>
                    <Text
                        style={{
                            ...styles.text,
                            marginBottom: 15,
                        }}
                    >
                        Team 2:
                    </Text>
                    <View style={styles.shadowContainer}>
                        <InsetShadow shadowRadius={3} bottom={false}>
                            <TextInput
                                placeholder="Player 3"
                                style={styles.textInput}
                                onChangeText={(text) => setPlayer3(text)}
                                value={player3}
                            />
                        </InsetShadow>
                    </View>
                    <View style={styles.shadowContainer}>
                        <InsetShadow shadowRadius={3} bottom={false}>
                            <TextInput
                                placeholder="Player 4"
                                style={styles.textInput}
                                onChangeText={(text) => setPlayer4(text)}
                                value={player4}
                            />
                        </InsetShadow>
                    </View>
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
                        <Text style={styles.text}>BACK</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            navigation.navigate('Home');
                        }}
                    >
                        <Text style={styles.text}>NEXT</Text>
                    </Pressable>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textInput: {
        width: '100%',
        borderRadius: 7,
        height: 55,
        paddingHorizontal: 20,
        fontSize: 18,
        marginBottom: 10,
        overflow: 'hidden',
    },
    text: { color: 'black', fontSize: 24, fontWeight: 'bold' },
    shadowContainer: {
        width: '100%',
        height: 55,
        marginBottom: 10,
        borderRadius: 7,
        overflow: 'hidden',
        borderColor: COLORS.green,
        borderWidth: 1,
    },
});

export default NewGame;
