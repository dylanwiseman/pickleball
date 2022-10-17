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
// import placeholderData from '../placeholderData';
// import Game from '../data-structures/game';

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
        // game,
    } = route?.params;

    // Game States:
    const [team1Score, setTeam1Score] = useState(0);
    const [team2Score, setTeam2Score] = useState(0);
    const [serveIndex, setServeIndex] = useState(1);
    const [serverId, setServerId] = useState(firstServe);
    const [firstOrSecond, setFirstOrSecond] = useState('second');

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

    // Court Positions:
    const [forehand1, setForehand1] = useState(firstServe);
    const [backhand1, setBackhand1] = useState(servingTeamSecond);
    const [forehand2, setForehand2] = useState(firstReceive);
    const [backhand2, setBackhand2] = useState(receivingTeamSecond);
    let temp: number = 0;

    // const serveObject: {
    //     1: number;
    //     2: number;
    //     3: number;
    //     4: number;
    //     temp: number;
    // } = {
    //     // firstOrSecond: 'second',
    //     1: firstServe,
    //     2: servingTeamSecond,
    //     3: firstReceive,
    //     4: receivingTeamSecond,
    //     temp: 0,
    // };
    // console.log('serveObject: ', serveObject);

    const nextServe = (servingTeamScored: boolean) => {
        console.log('------------LAST SERVE--------------');
        console.log('serve index: ', serveIndex);
        console.log('serverId: ', serverId);
        console.log('temp: ', temp);
        console.log(firstOrSecond);
        console.log(forehand1, backhand1, forehand2, backhand2);
        if (servingTeamScored) {
            if (serveIndex === 1) {
                temp = forehand1;
                setForehand1(backhand1);
                setBackhand1(temp);
                setServeIndex(2);
            } else if (serveIndex === 2) {
                temp = forehand1;
                setForehand1(backhand1);
                setBackhand1(temp);
                setServeIndex(1);
            } else if (serveIndex === 3) {
                temp = forehand2;
                setForehand2(backhand2);
                setBackhand2(temp);
                setServeIndex(4);
            } else if (serveIndex === 4) {
                temp = forehand2;
                setForehand2(backhand2);
                setBackhand2(temp);
                setServeIndex(3);
            }
        } else {
            if (serveIndex === 1 && firstOrSecond === 'first') {
                setServeIndex(2);
                setServerId(backhand1);
                setFirstOrSecond('second');
            } else if (serveIndex === 1 && firstOrSecond === 'second') {
                console.log('serve switches teams');
                setServeIndex(3);
                setServerId(forehand2);
                console.log('serve index: ', serveIndex);
                console.log('serverId: ', serverId);
                setFirstOrSecond('first');
            } else if (serveIndex === 2 && firstOrSecond === 'first') {
                setServeIndex(1);
                setServerId(forehand1);
                setFirstOrSecond('second');
            } else if (serveIndex === 2 && firstOrSecond === 'second') {
                console.log('serve switches teams');
                setServeIndex(3);
                setServerId(forehand2);
                console.log('serve index: ', serveIndex);
                console.log('serverId: ', serverId);
                setFirstOrSecond('first');
            } else if (serveIndex === 3 && firstOrSecond === 'first') {
                setServeIndex(4);
                setServerId(backhand2);
                setFirstOrSecond('second');
                console.log('serve index: ', serveIndex);
                console.log('serverId: ', serverId);
            } else if (serveIndex === 3 && firstOrSecond === 'second') {
                console.log('serve switches teams');
                setServeIndex(1);
                setServerId(forehand1);
                console.log('serve index: ', serveIndex);
                console.log('serverId: ', serverId);
                setFirstOrSecond('first');
            } else if (serveIndex === 4 && firstOrSecond === 'first') {
                setServeIndex(3);
                setServerId(forehand2);
                setFirstOrSecond('second');
            } else if (serveIndex === 4 && firstOrSecond === 'second') {
                console.log('serve switches teams');
                setServeIndex(1);
                setServerId(forehand1);
                console.log('serve index: ', serveIndex);
                console.log('serverId: ', serverId);
                setFirstOrSecond('first');
            }
        }
        console.log('------------NEXT SERVE--------------');
        console.log('serve index: ', serveIndex);
        console.log('serverId: ', serverId);
        console.log('temp: ', temp);
        console.log(firstOrSecond);
    };

    const handlePress = (player: any, plus: boolean) => {
        console.log('---------------------------');
        console.log('***************************');
        console.log('POINT: player: ', player, 'plus: ', plus);
        if (plus) {
            player.plus++;
            console.log('team1: ', team1Array);
            console.log(
                'does team1array include serverid?: ',
                team1Array.includes(player.id)
            );
            console.log('team2: ', team2Array);
            console.log('what is server id: ', serverId);
            if (team1Array.includes(player.id)) {
                if (team1Array.includes(serverId)) {
                    setTeam1Score(team1Score + 1);
                    player.plusPoint++;
                    console.log('player plus point: ', player.plusPoint);
                    nextServe(true);
                } else {
                    nextServe(false);
                }
            } else {
                if (team2Array.includes(serverId)) {
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
                if (team1Array.includes(serverId)) {
                    nextServe(false);
                } else {
                    player.minusPoint++;
                    setTeam2Score(team2Score + 1);
                    nextServe(true);
                }
            } else {
                if (team2Array.includes(serverId)) {
                    nextServe(false);
                } else {
                    setTeam1Score(team1Score + 1);
                    player.minusPoint++;
                    nextServe(true);
                }
            }
        }
    };

    const returnPlayerButtons = (player: any, index: number) => {
        return (
            <View
                key={index}
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    height: 100,
                    marginBottom: 20,
                }}
            >
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '25%',
                        height: '100%',
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor:
                            serverId === player.id ? 'black' : 'white',
                    }}
                >
                    <Image source={player.pic} style={styles.playerPic} />
                    <Text
                        style={{
                            color: serverId === player.id ? 'white' : 'black',
                        }}
                    >
                        {player.name}
                    </Text>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: 'white',
                            fontStyle: 'italic',
                        }}
                    >
                        {`${firstOrSecond === 'first' ? '1st' : '2nd'} SERVE`}
                    </Text>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: COLORS.red,
                            fontStyle: 'italic',
                        }}
                    >
                        {forehand1 === player.id && 'forehand'}
                        {forehand2 === player.id && 'forehand'}
                        {backhand1 === player.id && 'backhand'}
                        {backhand2 === player.id && 'backhand'}
                    </Text>
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
                        handlePress(player, true);
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
                    onPress={() => {
                        handlePress(player, false);
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
        );
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
                {[player1, player2, player3, player4].map((player, index) =>
                    returnPlayerButtons(player, index)
                )}
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
                            navigation.navigate('GameDetails');
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
