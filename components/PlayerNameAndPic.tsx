import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { SIZES } from '../constants/theme';

const PlayerNameAndPic = ({
    player,
    pic,
    picSide,
    defaultImg,
}: {
    player: any;
    pic: any;
    picSide: string;
    defaultImg: any;
}) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            {picSide === 'left' &&
                (pic ? (
                    <Image source={pic} style={styles.playerPic} />
                ) : (
                    <View style={{ width: 40, height: 40 }}>{defaultImg}</View>
                ))}
            <Text
                style={{
                    fontSize: SIZES.large,
                    textAlign: picSide,
                    marginHorizontal: 10,
                }}
            >{`${player}`}</Text>
            {picSide === 'right' &&
                (pic ? (
                    <Image source={pic} style={styles.playerPic} />
                ) : (
                    <View>{defaultImg}</View>
                ))}
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
