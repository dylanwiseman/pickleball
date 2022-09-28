import {
    View,
    SafeAreaView,
    Text,
    Button,
    Image,
    StyleSheet,
    FlatList,
} from 'react-native';
import React from 'react';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';

const PlayerStats = ({
    player,
    maxContribution,
}: {
    player: any;
    maxContribution: number;
}) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                height: 100,
                justifyContent: 'space-between',
                paddingHorizontal: 20,
            }}
        >
            <View style={{ position: 'relative' }}>
                <Image source={player.pic} style={styles.playerPicStats} />
                <View
                    style={{
                        backgroundColor:
                            player.plus - player.minus >= 0
                                ? COLORS.darkGreen
                                : COLORS.darkRed,
                        height: 50,
                        width: 50,
                        borderRadius: '50%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        bottom: 0,
                        left: 40,
                        ...SHADOWS.dark,
                    }}
                >
                    <Text
                        style={{
                            color:
                                player.plus - player.minus >= 0
                                    ? COLORS.green
                                    : COLORS.red,
                            fontSize: 24,
                            fontWeight: 'bold',
                        }}
                    >
                        {player.plus - player.minus >= 0
                            ? `+${player.plus - player.minus}`
                            : `-${player.minus - player.plus}`}
                    </Text>
                </View>
            </View>
            <View
                style={{
                    height: '100%',
                    flexDirection: 'column',
                    width: 200,
                    justifyContent: 'center',
                    alignItems: 'baseline',
                }}
            >
                <View
                    style={{
                        width: (player.plus / maxContribution) * 200,
                        height: 20,
                        backgroundColor: COLORS.green,
                        borderRadius: 3,
                        justifyContent: 'flex-start',
                        alignItems: 'baseline',
                        marginBottom: 5,
                        ...SHADOWS.dark,
                    }}
                >
                    <View
                        style={{
                            height: '100%',
                            width: `${(player.plusPoint / player.plus) * 100}%`,
                            backgroundColor: COLORS.darkGreen,
                            borderTopLeftRadius: 3,
                            borderBottomLeftRadius: 3,
                        }}
                    ></View>
                </View>
                <View
                    style={{
                        width: (player.minus / maxContribution) * 200,
                        height: 20,
                        backgroundColor: COLORS.red,
                        borderRadius: 3,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        ...SHADOWS.dark,
                    }}
                >
                    <View
                        style={{
                            height: '100%',
                            width: `${
                                (player.minusPoint / player.minus) * 100
                            }%`,
                            backgroundColor: COLORS.darkRed,
                            borderTopLeftRadius: 3,
                            borderBottomLeftRadius: 3,
                        }}
                    ></View>
                </View>
            </View>
            <View
                style={{
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginBottom: 5,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: COLORS.darkGreen,
                            fontSize: 16,
                        }}
                    >
                        {player.plusPoint}
                    </Text>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: COLORS.green,
                            fontSize: 16,
                        }}
                    >
                        {player.plus}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: COLORS.darkRed,
                            fontSize: 16,
                        }}
                    >
                        {player.minusPoint}
                    </Text>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: COLORS.red,
                            fontSize: 16,
                        }}
                    >
                        {player.minus}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const GameDetails = ({ route, navigation }: any) => {
    const { game } = route.params;
    console.log(game);
    const { player1, player2, player3, player4 } = game;
    let maxContribution: number = Math.max(
        player1.plus,
        player1.minus,
        player2.plus,
        player2.minus,
        player3.plus,
        player3.minus,
        player4.plus,
        player4.minus
    );
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.green,
            }}
        >
            <View
                style={{
                    backgroundColor: COLORS.green,
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
                        source={game?.player1.pic}
                        style={styles.playerPic}
                    />
                    <Image
                        source={game?.player2.pic}
                        style={styles.playerPic}
                    />
                </View>
                <Text
                    style={{
                        color: game?.win ? COLORS.darkGreen : COLORS.darkRed,
                        fontSize: 76,
                        fontWeight: 'bold',
                    }}
                >{`${game?.userScore} - ${game?.oppScore}`}</Text>
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        source={game?.player3.pic}
                        style={styles.playerPic}
                    />
                    <Image
                        source={game?.player4.pic}
                        style={styles.playerPic}
                    />
                </View>
            </View>
            <View style={{ backgroundColor: 'white', height: '100%' }}>
                <View>
                    <FlatList
                        style={{ paddingVertical: 30 }}
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
                    />
                </View>
                <Button
                    title="Home"
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                ></Button>
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

export default GameDetails;
