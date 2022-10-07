import {
    View,
    Text,
    SafeAreaView,
    Pressable,
    StyleSheet,
    Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PlayerNameAndPic from '../components/PlayerNameAndPic';
import placeholderData from '../placeholderData';

const ServeSelection = ({ route, navigation }: any) => {
    // const [player1, setPlayer1] = useState('');
    // const [player2, setPlayer2] = useState('');
    // const [player3, setPlayer3] = useState('');
    // const [player4, setPlayer4] = useState('');

    const [serveHighlight, setServeHighlight] = useState(4);
    const [receiveHighlight, setReceiveHighlight] = useState(4);

    const [firstServe, setFirstServe] = useState('');
    const [firstReceive, setFirstReceive] = useState('');

    const game = placeholderData[0];

    const handlePress = (index: number, playerName: string) => {
        if (index === serveHighlight) {
            setServeHighlight(4);
            setFirstServe('');
            setReceiveHighlight(4);
            setFirstReceive('');
        } else if (index === receiveHighlight) {
            setReceiveHighlight(4);
            setFirstReceive('');
        } else if (serveHighlight === 4) {
            setServeHighlight(index);
            setFirstServe(playerName);
        } else {
            setReceiveHighlight(index);
            setFirstReceive(playerName);
        }
    };

    const team1Array = [game?.player1, game?.player2];
    const team2Array = [game?.player3, game?.player4];

    const createPlayerServeCards = (teamArray: any[]) => {
        return teamArray.map((player: any, index: number) => {
            console.log(player.i);
            return (
                <Pressable
                    key={index}
                    onPress={() => {
                        handlePress(player.index, player.name);
                    }}
                >
                    <View
                        style={[
                            {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                            },
                            serveHighlight === player.index
                                ? styles.highlight
                                : receiveHighlight === player.index
                                ? styles.highlightR
                                : styles.playerBox,
                        ]}
                    >
                        <PlayerNameAndPic
                            player={player.name}
                            picSide={'left'}
                            pic={player.pic}
                        />
                        {serveHighlight === player.index && (
                            <Text
                                style={[
                                    styles.text,
                                    {
                                        color: COLORS.darkGreen,
                                        fontStyle: 'italic',
                                    },
                                ]}
                            >
                                SERVE
                            </Text>
                        )}
                        {receiveHighlight === player.index && (
                            <Text
                                style={[
                                    styles.text,
                                    {
                                        color: COLORS.darkRed,
                                        fontStyle: 'italic',
                                    },
                                ]}
                            >
                                RECEIVE
                            </Text>
                        )}
                    </View>
                </Pressable>
            );
        });
    };

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
                            Who is{' '}
                            <Text
                                style={{
                                    color:
                                        serveHighlight === 4
                                            ? COLORS.green
                                            : COLORS.red,
                                }}
                            >
                                {serveHighlight === 4 ? 'serving' : 'receiving'}
                            </Text>{' '}
                            first?
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
                    {createPlayerServeCards(team1Array)}

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
                    {createPlayerServeCards(team2Array)}
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
                            navigation.navigate('NewGame');
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
        borderColor: COLORS.green,
        borderWidth: 1,
    },
    playerBox: {
        height: 65,
        marginBottom: 10,
        borderRadius: 7,
        // alignItems: 'flex-start',
        // justifyContent: 'center',
        paddingHorizontal: 20,
        ...SHADOWS.dark,
        backgroundColor: 'white',
    },
    highlight: {
        backgroundColor: COLORS.green,
        height: 65,
        marginBottom: 10,
        borderRadius: 7,
        paddingHorizontal: 20,
    },
    highlightR: {
        backgroundColor: COLORS.red,
        height: 65,
        marginBottom: 10,
        borderRadius: 7,
        paddingHorizontal: 20,
    },
    playerPic: {
        width: 40,
        height: 40,
        borderRadius: '50%',
    },
});

export default ServeSelection;
