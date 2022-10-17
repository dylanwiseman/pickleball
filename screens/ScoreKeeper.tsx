import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    FlatList,
    Pressable,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';
import placeholderData from '../placeholderData';
import Game from '../data-structures/game';

const ScoreKeeper = ({ route, navigation }: any) => {
    const {
        player1,
        player2,
        player3,
        player4,
        team1Array,
        team2Array,
        firstServe,
        firstReceive,
        game,
    } = route?.params;

    // Game States:
    const [team1Score, setTeam1Score] = useState(0);
    const [team2Score, setTeam2Score] = useState(0);
    const [serveIndex, setServeIndex] = useState(0);

    [player1, player2, player3, player4].forEach((player) => {
        player = { ...player, plus: 0, plusPoint: 0, minus: 0, minusPoint: 0 };
    });

    // const second = team1Array.includes(firstServe) ? team1Array.indexOf(firstServe) === 0 ? team1Array[1] : team1array[0] : team2Array.indexOf(firstServe) === 0 ? team2Array[1] : team2array[0]

    let servingTeamSecond: number = 0;
    if (team1Array.indexOf(firstServe) === 0) servingTeamSecond = team1Array[1];
    else if (team1Array.indexOf(firstServe) === 1)
        servingTeamSecond = team1Array[0];
    else {
        if (team2Array.indexOf(firstServe) === 0)
            servingTeamSecond = team2Array[1];
        else if (team2Array.indexOf(firstServe) === 1)
            servingTeamSecond = team2Array[0];
    }
    let receivingTeamSecond: number = 0;
    if (team1Array.indexOf(firstReceive) === 0)
        receivingTeamSecond = team1Array[1];
    else if (team1Array.indexOf(firstReceive) === 1)
        receivingTeamSecond = team1Array[0];
    else {
        if (team2Array.indexOf(firstReceive) === 0)
            receivingTeamSecond = team2Array[1];
        else if (team2Array.indexOf(firstReceive) === 1)
            receivingTeamSecond = team2Array[0];
    }

    const serveObject: {
        currentServerId: number;
        currentServeIndex: number;
        firstOrSecond: string;
        1: number;
        2: number;
        3: number;
        4: number;
        temp: number;
    } = {
        currentServerId: firstServe,
        currentServeIndex: 1,
        firstOrSecond: 'second',
        1: firstServe,
        2: servingTeamSecond,
        3: firstReceive,
        4: receivingTeamSecond,
        temp: 0,
    };

    const nextServe = (servingTeamScored: boolean) => {
        if (servingTeamScored) {
            serveObject.temp = serveObject[serveObject.currentServeIndex];
            if (serveObject.currentServeIndex === 1) {
                serveObject[1] = serveObject[2];
                serveObject[2] = serveObject.temp;
            } else if (serveObject.currentServeIndex === 2) {
                serveObject[2] = serveObject[1];
                serveObject[1] = serveObject.temp;
            } else if (serveObject.currentServeIndex === 3) {
                serveObject[3] = serveObject[4];
                serveObject[4] = serveObject.temp;
            } else if (serveObject.currentServeIndex === 4) {
                serveObject[4] = serveObject[3];
                serveObject[3] = serveObject.temp;
            }
        } else {
            if (
                serveObject.currentServeIndex === 1 &&
                serveObject.firstOrSecond === 'first'
            ) {
                serveObject.currentServeIndex = 2;
                serveObject.currentServerId = serveObject[2];
            } else if (
                serveObject.currentServeIndex === 1 &&
                serveObject.firstOrSecond === 'second'
            ) {
                serveObject.currentServeIndex = 3;
                serveObject.currentServerId = serveObject[3];
            } else if (
                serveObject.currentServeIndex === 2 &&
                serveObject.firstOrSecond === 'first'
            ) {
                serveObject.currentServeIndex = 1;
                serveObject.currentServerId = serveObject[1];
            } else if (
                serveObject.currentServeIndex === 2 &&
                serveObject.firstOrSecond === 'second'
            ) {
                serveObject.currentServeIndex = 3;
                serveObject.currentServerId = serveObject[3];
            } else if (
                serveObject.currentServeIndex === 3 &&
                serveObject.firstOrSecond === 'first'
            ) {
                serveObject.currentServeIndex = 4;
                serveObject.currentServerId = serveObject[4];
            } else if (
                serveObject.currentServeIndex === 3 &&
                serveObject.firstOrSecond === 'second'
            ) {
                serveObject.currentServeIndex = 1;
                serveObject.currentServerId = serveObject[1];
            } else if (
                serveObject.currentServeIndex === 4 &&
                serveObject.firstOrSecond === 'first'
            ) {
                serveObject.currentServeIndex = 3;
                serveObject.currentServerId = serveObject[3];
            } else if (
                serveObject.currentServeIndex === 4 &&
                serveObject.firstOrSecond === 'second'
            ) {
                serveObject.currentServeIndex = 1;
                serveObject.currentServerId = serveObject[1];
            }
        }
    };

    const handlePress = (plus: boolean, player: any) => {
        if (plus) {
            player.plus++;
            if (team1Array.includes(player.id)) {
                if (team1Array.includes(serveObject.currentServerId)) {
                    setTeam1Score(team1Score + 1);
                    player.plusPoint++;
                    nextServe(true);
                } else {
                    nextServe(false);
                }
            } else {
                if (team2Array.includes(serveObject.currentServerId)) {
                    setTeam2Score(team2Score + 1);
                    player.plusPoint++;
                    nextServe(true);
                } else {
                    nextServe(false);
                }
            }
        } else {
            player.minus++;
            if (team1Array.includes(player.id)) {
                if (team1Array.includes(serveObject.currentServerId)) {
                    nextServe(false);
                } else {
                    player.minusPoint++;
                    setTeam2Score(team2Score + 1);
                    nextServe(true);
                }
            } else {
                if (team2Array.includes(serveObject.currentServerId)) {
                    nextServe(false);
                } else {
                    setTeam1Score(team1Score + 1);
                    player.minusPoint++;
                    nextServe(true);
                }
            }
        }
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'white',
            }}
        >
            <View
                style={{
                    backgroundColor: 'white',
                    height: 120,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}
            >
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image source={player1.pic} style={styles.playerPic} />
                    <Image source={player2.pic} style={styles.playerPic} />
                </View>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 76,
                        fontWeight: 'bold',
                    }}
                >{`${team1Score} - ${team2Score}`}</Text>
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image source={player3.pic} style={styles.playerPic} />
                    <Image source={player4.pic} style={styles.playerPic} />
                </View>
            </View>
            <View style={{ backgroundColor: 'white', height: '100%' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        height: 100,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image source={player1.pic} style={styles.playerPic} />
                        <Text>{player1.name}</Text>
                    </View>
                    <Pressable
                        style={{
                            width: '30%',
                            backgroundColor: COLORS.green,
                            height: '100%',
                            borderRadius: 10,
                            ...SHADOWS.dark,
                        }}
                        onPress={() => {
                            handlePress(player1.id, true);
                        }}
                    >
                        <Text
                            style={{
                                width: '100%',
                                textAlign: 'center',
                                fontSize: 72,
                                fontWeight: 'bold',
                                color: COLORS.darkGreen,
                                marginVertical: 'auto',
                            }}
                        >
                            +
                        </Text>
                    </Pressable>
                    <Pressable
                        style={{
                            width: '30%',
                            backgroundColor: COLORS.red,
                            height: '100%',
                            borderRadius: 10,
                            ...SHADOWS.dark,
                        }}
                    >
                        <Text
                            style={{
                                width: '100%',
                                textAlign: 'center',
                                fontSize: 72,
                                fontWeight: 'bold',
                                color: COLORS.darkRed,
                                marginVertical: 'auto',
                            }}
                        >
                            -
                        </Text>
                    </Pressable>
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
                            RESET
                        </Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            navigation.navigate('GameDetails', { playerData });
                        }}
                    >
                        <Text
                            style={{
                                color: 'black',
                                fontSize: 24,
                                fontWeight: 'bold',
                            }}
                        >
                            END
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
                            UNDO
                        </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    winningContainer: {
        backgroundColor: COLORS.green,
        color: COLORS.darkGreen,
    },
    playerPic: {
        width: 40,
        height: 40,
        borderRadius: '50%',
    },
    playerPicStats: {
        width: 80,
        height: 80,
        borderRadius: '50%',
        ...SHADOWS.dark,
    },
});

export default ScoreKeeper;
