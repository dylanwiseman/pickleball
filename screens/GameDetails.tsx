import {
    View,
    SafeAreaView,
    Text,
    Button,
    Image,
    StyleSheet,
} from 'react-native';
import React from 'react';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';

const GameDetails = ({ route, navigation }: any) => {
    const { game } = route.params;
    console.log(game);
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
});

export default GameDetails;
