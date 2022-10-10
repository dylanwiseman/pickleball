import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    FlatList,
    Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';
import placeholderData from '../placeholderData';

const ScoreKeeper = ({ route, navigation }: any) => {
    const playerData = placeholderData[0];
    const { player1, player2, player3, player4 } = playerData;

    // Game States:
    const [team1Score, setTeam1Score] = useState(0);
    const [team2Score, setTeam2Score] = useState(0);
    const [serveIndex, setServeIndex] = useState();

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
                    <Image
                        source={playerData?.player1.pic}
                        style={styles.playerPic}
                    />
                    <Image
                        source={playerData?.player2.pic}
                        style={styles.playerPic}
                    />
                </View>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 76,
                        fontWeight: 'bold',
                    }}
                >{`${playerData?.userScore} - ${playerData?.oppScore}`}</Text>
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        source={playerData?.player3.pic}
                        style={styles.playerPic}
                    />
                    <Image
                        source={playerData?.player4.pic}
                        style={styles.playerPic}
                    />
                </View>
            </View>
            <View style={{ backgroundColor: 'white', height: '100%' }}>
                <View>
                    {/* <FlatList
                        style={{ paddingVertical: 30 }}
                        scrollEnabled={false}
                        data={[player1, player2, player3, player4]}
                        renderItem={({ item }) => (
                            <PlayerStats
                                player={item}
                                maxContribution={maxContribution}
                            />
                        )}
                        // keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            flexGrow: 1,
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    /> */}
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
