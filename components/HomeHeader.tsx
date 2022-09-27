import { View, Text, Image, TextInput } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';
import pic from '../assets/tanjiro.png';

const HomeHeader = () => {
    return (
        <View
            style={{
                backgroundColor: COLORS.white,
                padding: SIZES.font,
                ...SHADOWS.dark,
                position: 'fixed',
            }}
        >
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
                    <Text
                        style={{
                            fontSize: SIZES.large,
                        }}
                    >{`tanjiro`}</Text>
                    <Image
                        source={pic}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            marginHorizontal: SIZES.small,
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default HomeHeader;
