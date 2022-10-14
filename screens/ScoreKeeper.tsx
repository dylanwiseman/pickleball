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
    } = route.params;

    // Game States:
    const [team1Score, setTeam1Score] = useState(0);
    const [team2Score, setTeam2Score] = useState(0);
    const [serveIndex, setServeIndex] = useState();

    // const [servingObject, setServingObject]= useState({
    //     initial: true,
    //     1: firstServe,
    //     2:
    // })
    // let game: any;
    // useEffect(() => {
    //     game = new Game(
    //         player1,
    //         player2,
    //         player3,
    //         player4,
    //         firstReceive,
    //         firstServe
    //     );
    // }, []);

    const handlePress = (plus: boolean, player: any) => {};

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
                >{`${game?.getScore(1)} - ${game.getScore(2)}`}</Text>
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
                            handlePress(true, player1);
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
