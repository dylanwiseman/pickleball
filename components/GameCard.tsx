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
                    backgroundColor: COLORS.green,
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
                        <Text style={{ color: COLORS.darkGreen }}>
                            {game.dayOfWeek}
                        </Text>
                        <Text style={{ color: COLORS.darkGreen }}>
                            {game.date}
                        </Text>
                        <Text style={{ color: COLORS.darkGreen }}>
                            {game.time}
                        </Text>
                    </View>
                    <Text
                        style={{
                            color: COLORS.darkGreen,
                            fontSize: 76,
                        }}
                    >{`${game.userScore} - ${game.oppScore}`}</Text>
                </View>
            </View>
            <View>
                <Text>GameCard</Text>
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
