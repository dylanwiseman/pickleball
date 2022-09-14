import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';
import tw from 'twrnc';

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
                    <Text
                        style={{
                            fontSize: SIZES.large,
                            paddingBottom: SIZES.medium,
                            textAlign: 'right',
                        }}
                    >{`${game?.player1}`}</Text>
                    <Text
                        style={{
                            fontSize: SIZES.large,
                            textAlign: 'right',
                        }}
                    >{`${game?.player2}`}</Text>
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
                    <Text
                        style={{
                            fontSize: SIZES.large,
                            paddingBottom: SIZES.medium,
                            textAlign: 'left',
                        }}
                    >{`${game?.player3}`}</Text>
                    <Text
                        style={{
                            fontSize: SIZES.large,
                            textAlign: 'left',
                        }}
                    >{`${game?.player4}`}</Text>
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
});

export default GameCard;
