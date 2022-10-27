import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageStyle,
    TextStyle,
} from 'react-native';
import React from 'react';
import { SIZES } from '../constants/theme';

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
                <Image source={pic} style={styles.playerPic as ImageStyle} />
            )}
            <Text
                style={
                    {
                        fontSize: SIZES.large,
                        textAlign: picSide,
                        marginHorizontal: 10,
                    } as TextStyle
                }
            >{`${player}`}</Text>
            {picSide === 'right' && (
                <Image source={pic} style={styles.playerPic as ImageStyle} />
            )}
        </View>
    );
};
export default PlayerNameAndPic;

const styles = StyleSheet.create({
    playerPic: {
        width: 40,
        height: 40,
        //@ts-ignore
        borderRadius: '50%',
        fontFamily: 'Inter_400Regular',
    },
});
