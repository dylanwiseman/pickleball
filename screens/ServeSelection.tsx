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

const ServeSelection = ({ route, navigation }: any) => {
    const { player1, player2, player3, player4 } = route.params;

    const [firstServe, setFirstServe] = useState(0);
    const [firstReceive, setFirstReceive] = useState(0);

    const handlePress = (playerId: number) => {
        if (playerId === firstServe) {
            setFirstServe(0);
            setFirstReceive(0);
        } else if (playerId === firstReceive) {
            setFirstReceive(0);
        } else if (firstServe === 0) {
            setFirstServe(playerId);
        } else {
            setFirstReceive(playerId);
        }
    };

    const team1Array = [player1, player2];
    const team2Array = [player3, player4];

    const createPlayerServeCards = (teamArray: any[]) => {
        return teamArray.map((player: any, index: number) => {
            return (
                <Pressable
                    key={index}
                    onPress={() => {
                        handlePress(player.id);
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
                            firstServe === player.id
                                ? styles.highlight
                                : firstReceive === player.id
                                ? styles.highlightR
                                : styles.playerBox,
                        ]}
                    >
                        <PlayerNameAndPic
                            player={player.name}
                            picSide={'left'}
                            pic={player.pic}
                        />
                        {firstServe === player.id && (
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
                        {firstReceive === player.id && (
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
                                        firstServe === 0
                                            ? COLORS.green
                                            : COLORS.red,
                                }}
                            >
                                {firstServe === 0 ? 'serving' : 'receiving'}
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
                            navigation.navigate('ScoreKeeper', {
                                player1,
                                player2,
                                player3,
                                player4,
                                team1Array,
                                team2Array,
                                firstServe,
                                firstReceive,
                            });
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
