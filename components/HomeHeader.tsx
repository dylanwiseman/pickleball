import {
    View,
    Text,
    Image,
    TextInput,
    Pressable,
    StyleSheet,
} from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';
import pic from '../assets/tanjiro.png';
import { useState } from 'react';

const HomeHeader = ({ signOut }) => {
    const [showStats, setShowStats] = useState(false);
    return (
        <Pressable
            onPress={() => {
                setShowStats(!showStats);
            }}
        >
            <View
                style={{
                    backgroundColor: COLORS.white,
                    padding: SIZES.font,
                    ...SHADOWS.dark,
                    position: 'fixed',
                }}
            >
                <View style={{ display: showStats ? 'flex' : 'none' }}>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 2,
                            paddingBottom: 10,
                            marginBottom: 10,
                            paddingRight: 10,
                        }}
                    >
                        {/* <Text style={styles.text}>Edit profile</Text> */}
                        <Pressable
                            onPress={() => {
                                setShowStats(false);
                                signOut();
                            }}
                        >
                            <Text
                                style={{
                                    ...styles.text,
                                    width: '100%',
                                    textAlign: 'right',
                                    fontSize: SIZES.medium,
                                }}
                            >
                                SIGN OUT
                            </Text>
                        </Pressable>
                    </View>
                    <Text style={styles.text}>Games played: 4</Text>
                    <Text style={styles.text}>Avg. contribution: +3</Text>
                    <Text style={styles.text}>Total contribution: +12</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <View style={{ flexDirection: 'column' }}>
                            <Text
                                style={{
                                    fontSize: SIZES.large,
                                }}
                            >{`tanjiro`}</Text>
                            <Text
                                style={{
                                    textAlign: 'right',
                                    fontStyle: 'italic',
                                }}
                            >
                                +12
                            </Text>
                        </View>
                        <Image
                            source={pic}
                            style={{
                                ...styles.playerPic,
                                marginHorizontal: SIZES.small,
                            }}
                        />
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: SIZES.large,
        marginBottom: 5,
    },
    playerPic: {
        width: 40,
        height: 40,
        borderRadius: '50%',
    },
});

export default HomeHeader;
