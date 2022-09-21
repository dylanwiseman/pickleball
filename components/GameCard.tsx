import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';
// import tw from 'twrnc';

const PlayerNameAndPic = ({ player, pic, picSide }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            {picSide === 'left' && (
                <Image source={pic} style={styles.playerPic} />
            )}
            <Text
                style={{
                    fontSize: SIZES.large,
                    textAlign: picSide,
                }}
            >{`${player}`}</Text>
            {picSide === 'right' && (
                <Image source={pic} style={styles.playerPic} />
            )}
        </View>
    );
};

const GameCard = ({ game }) => {
    return (
        <View
            style={{
                height: 250,
                margin: SIZES.small,
                marginBottom: 0,
                borderRadius: 20,
                backgroundColor: COLORS.white,
                ...SHADOWS.dark,
            }}
        >
            <View
                style={{
                    backgroundColor: game?.win ? COLORS.green : COLORS.red,
                    height: '55%',
                    width: '100%',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}
                // style={[tw`h-2/4`]}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        padding: SIZES.small,
                        height: '100%',
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            alignContent: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style={{
                                color: game?.win
                                    ? COLORS.darkGreen
                                    : COLORS.darkRed,
                                fontStyle: 'italic',
                            }}
                        >
                            {`${game.dayOfWeek}\n${game.date}\n${game.time}`}
                        </Text>
                    </View>
                    <Text
                        style={{
                            color: game?.win
                                ? COLORS.darkGreen
                                : COLORS.darkRed,
                            fontSize: 76,
                        }}
                    >{`${game.userScore} - ${game.oppScore}`}</Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    height: '45%',
                    alignItems: 'center',
                }}
            >
                <View
                    style={{
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'center',
                        paddingLeft: SIZES.small,
                        width: '30%',
                        left: 0,
                    }}
                >
                    <PlayerNameAndPic
                        player={game?.player1?.name}
                        picSide={'right'}
                        pic={game?.player1?.pic}
                    />
                    <PlayerNameAndPic
                        player={game?.player2?.name}
                        picSide={'right'}
                        pic={game?.player2?.pic}
                    />
                </View>
                <Text style={{ width: '40%', textAlign: 'center' }}>vs.</Text>
                <View
                    style={{
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'center',
                        paddingRight: SIZES.small,
                        width: '30%',
                        right: 0,
                    }}
                >
                    <PlayerNameAndPic
                        player={game?.player3?.name}
                        picSide={'left'}
                        pic={game?.player3?.pic}
                    />
                    <PlayerNameAndPic
                        player={game?.player4?.name}
                        picSide={'left'}
                        pic={game?.player4?.pic}
                    />
                </View>
            </View>
        </View>
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
});

export default GameCard;
