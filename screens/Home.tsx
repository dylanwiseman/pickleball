import { View, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import placeholderData from '../placeholderData';
import GameCard from '../components/GameCard';

const Home = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}
        >
            {/* <FocusedStatusBar background={COLORS.primary} /> */}
            <View>
                <FlatList
                    data={placeholderData}
                    renderItem={({ item }) => <GameCard game={item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'center',
                        width: '100%',
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default Home;
