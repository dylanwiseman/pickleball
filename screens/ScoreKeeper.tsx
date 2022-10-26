import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    Pressable,
    Modal,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';

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
    } = route?.params;

    const [modalVisible, setModalVisible] = useState(false);
    const [resetModalVisible, setResetModalVisible] = useState(false);

    // Game States:
    const [team1Score, setTeam1Score] = useState<number>(0);
    const [team2Score, setTeam2Score] = useState<number>(0);
    const [serveIndex, setServeIndex] = useState<number>(1);
    const [serverId, setServerId] = useState<number>(firstServe);
    const [firstOrSecond, setFirstOrSecond] = useState<string>('second');

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
    const [forehand1, setForehand1] = useState<number>(firstServe);
    const [backhand1, setBackhand1] = useState<number>(servingTeamSecond);
    const [forehand2, setForehand2] = useState<number>(firstReceive);
    const [backhand2, setBackhand2] = useState<number>(receivingTeamSecond);
    let temp: number = 0;

    const [pointArray, setPointArray] = useState<any[]>([{ start: true }]);

    const nextServe = (servingTeamScored: boolean) => {
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
                setServeIndex(3);
                setServerId(forehand2);

                setFirstOrSecond('first');
            } else if (serveIndex === 2 && firstOrSecond === 'first') {
                setServeIndex(1);
                setServerId(forehand1);
                setFirstOrSecond('second');
            } else if (serveIndex === 2 && firstOrSecond === 'second') {
                setServeIndex(3);
                setServerId(forehand2);

                setFirstOrSecond('first');
            } else if (serveIndex === 3 && firstOrSecond === 'first') {
                setServeIndex(4);
                setServerId(backhand2);
                setFirstOrSecond('second');
            } else if (serveIndex === 3 && firstOrSecond === 'second') {
                setServeIndex(1);
                setServerId(forehand1);

                setFirstOrSecond('first');
            } else if (serveIndex === 4 && firstOrSecond === 'first') {
                setServeIndex(3);
                setServerId(forehand2);
                setFirstOrSecond('second');
            } else if (serveIndex === 4 && firstOrSecond === 'second') {
                setServeIndex(1);
                setServerId(forehand1);

                setFirstOrSecond('first');
            }
        }
    };

    const handlePress = (player: any, plus: boolean) => {
        let point: boolean = false;

        if (plus) {
            player.plus++;

            if (team1Array.includes(player.id)) {
                if (team1Array.includes(serverId)) {
                    setTeam1Score(team1Score + 1);
                    player.plusPoint++;
                    point = true;

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
                    point = true;
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
        let pointArrayObject: any = {
            point,
            plus,
            playerId: player.id,
            team1Score,
            team2Score,
            serveIndex,
            serverId,
            firstOrSecond,
            forehand1,
            backhand1,
            forehand2,
            backhand2,
        };
        setPointArray((pointArray) => [...pointArray, pointArrayObject]);
    };

    const undo = () => {
        if (pointArray.length <= 1) return false;
        [player1, player2, player3, player4].forEach((player) => {
            if (player.id === pointArray[pointArray.length - 1].playerId) {
                if (pointArray[pointArray.length - 1].plus) {
                    player.plus--;
                    if (pointArray[pointArray.length - 1].point) {
                        player.plusPoint--;
                    }
                } else {
                    player.minus--;
                    if (pointArray[pointArray.length - 1].point) {
                        player.minusPoint--;
                    }
                }
            }
        });
        setPointArray(pointArray.slice(0, -1));
        setForehand1(pointArray[pointArray.length - 1].forehand1);
        setForehand2(pointArray[pointArray.length - 1].forehand2);
        setBackhand1(pointArray[pointArray.length - 1].backhand1);
        setBackhand2(pointArray[pointArray.length - 1].backhand2);
        setTeam1Score(pointArray[pointArray.length - 1].team1Score);
        setTeam2Score(pointArray[pointArray.length - 1].team2Score);
        setServeIndex(pointArray[pointArray.length - 1].serveIndex);
        setServerId(pointArray[pointArray.length - 1].serverId);
        setFirstOrSecond(pointArray[pointArray.length - 1].firstOrSecond);
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
            <Modal
                animationType="slide"
                transparent={true}
                visible={resetModalVisible}
                onRequestClose={() => {
                    setResetModalVisible(!resetModalVisible);
                }}
            >
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,.7)',
                    }}
                >
                    <View
                        style={{
                            width: '80%',
                            height: 300,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 30,
                            margin: 30,
                            borderRadius: 10,
                            ...SHADOWS.dark,
                        }}
                    >
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 2,
                                paddingBottom: 20,
                            }}
                        >
                            <Text
                                style={{
                                    ...styles.text,
                                }}
                            >
                                Return to serve selection and reset game?
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '100%',
                                paddingHorizontal: 40,
                                paddingTop: 80,
                            }}
                        >
                            <Pressable
                                onPress={() => {
                                    setResetModalVisible(!resetModalVisible);
                                }}
                            >
                                <Text style={styles.text}>NO</Text>
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    setResetModalVisible(!resetModalVisible);
                                    navigation.navigate('ServeSelection', {
                                        player1,
                                        player2,
                                        player3,
                                        player4,
                                    });
                                }}
                            >
                                <Text style={styles.text}>YES</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,.7)',
                    }}
                >
                    <View
                        style={{
                            width: '80%',
                            height: 300,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 30,
                            margin: 30,
                            borderRadius: 10,
                            ...SHADOWS.dark,
                        }}
                    >
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 2,
                                paddingBottom: 20,
                            }}
                        >
                            <Text
                                style={{
                                    ...styles.text,
                                }}
                            >
                                End and save game?
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '100%',
                                paddingHorizontal: 40,
                                paddingTop: 80,
                            }}
                        >
                            <Pressable
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.text}>NO</Text>
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    navigation.navigate('GameDetails', {
                                        game: {
                                            player1,
                                            player2,
                                            player3,
                                            player4,
                                            id: '1',
                                            userScore: team1Score,
                                            oppScore: team2Score,
                                            win:
                                                team1Score > team2Score
                                                    ? true
                                                    : false,
                                            dayOfWeek: 'Saturday',
                                            date: 'Aug 20 2022',
                                            time: '5:13pm',
                                        },
                                    });
                                }}
                            >
                                <Text style={styles.text}>YES</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={{ overflow: 'hidden' }}>
                <View
                    style={{
                        backgroundColor: 'white',
                        height: 120,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginBottom: 40,
                        ...SHADOWS.dark,
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
                            fontFamily: 'Inter_900Black',
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
                            setResetModalVisible(!resetModalVisible);
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
                            setModalVisible(!modalVisible);
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
                            undo();
                        }}
                    >
                        <Text
                            style={{
                                color:
                                    pointArray.length <= 1
                                        ? 'lightgray'
                                        : 'black',
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
    text: { color: 'black', fontSize: 24, fontWeight: 'bold' },
});

export default ScoreKeeper;
