import { View, Text, StyleSheet, Image, Touchable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
// import tw from 'twrnc';

const PlayerNameAndPic = ({
    player,
    pic,
    picSide,
}: {
    player: any;
    pic: any;
    picSide: string;
}) => {
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
export default PlayerNameAndPic;

const styles = StyleSheet.create({
    playerPic: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        fontFamily: 'Inter_400Regular',
    },
});
