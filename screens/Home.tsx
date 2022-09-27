import { View, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import placeholderData from '../placeholderData';
import GameCard from '../components/GameCard';
import HomeHeader from '../components/HomeHeader';

const Home = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}
        >
            <View>
                <FlatList
                    stickyHeaderIndices={[0]}
                    data={placeholderData}
                    renderItem={({ item }) => <GameCard game={item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'center',
                        width: '100%',
                    }}
                    ListHeaderComponent={<HomeHeader />}
                />
            </View>
        </SafeAreaView>
    );
};

export default Home;
