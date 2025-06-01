import React, { useEffect, useState } from 'react';
import { FlatList, View, RefreshControl, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native';
import { Text, Avatar, useTheme, Searchbar } from 'react-native-paper';
import { useCoins } from '../../hooks/useCoins';
import Loader from '../../components/shared/Loader';
import { useThemeContext } from '../../context/ThemeContext';
import Overview from './components/Overview';
import SnackbarComp from '../../components/shared/SnackbarComp';

const HomeScreen = ({ navigation }: any) => {

    const { toggleTheme, isDarkTheme } = useThemeContext();

    const { data, isLoading, isError, refetch, isFetching } = useCoins();

    const [visible, setVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [refreshing, setRefreshing] = useState(false);

    const theme = useTheme();

    const onRefresh = async () => {
        setRefreshing(true);
        await refetch();
        setRefreshing(false);
    };

    const filteredData = data?.filter((item: any) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        navigation.setOptions({
            title: 'Dashboard',
        });
    }, [navigation]);

    useEffect(() => {
        if (isError) {
            setVisible(true);
        }
    }, [isError]);

    if (isLoading) return <Loader />;

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id}
                refreshControl={
                    <RefreshControl refreshing={refreshing || isFetching} onRefresh={onRefresh} />
                }
                ListHeaderComponent={
                    <View>
                        <View style={styles.container}>
                            <Text style={styles.text}>New Feature! Use this app in</Text>
                            <TouchableOpacity style={{ paddingLeft: 5 }} onPress={toggleTheme} activeOpacity={0.7}>
                                <Text style={{ color: "#007AFF", fontWeight: "bold", fontSize: 16 }}>{isDarkTheme ? "Light Mode" : "Dark Mode"}</Text>
                            </TouchableOpacity>
                        </View>
                        <Overview data={data} />
                        <Searchbar
                            placeholder="Search coins..."
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                            style={{
                                borderRadius: 10,
                                marginBottom: 5,
                            }}
                        />
                    </View>
                }
                contentContainerStyle={{ padding: 12, paddingBottom: 50 }}
                renderItem={({ item, index }) => {

                    const priceChange = item.price_change_percentage_24h;
                    const isPositive = priceChange >= 0;
                    const isFirst = index === 0;
                    const isLast = index === filteredData?.length - 1;

                    return (
                        <TouchableHighlight
                            underlayColor={isDarkTheme ? "#111" : "#fff"}
                            onPress={() => navigation.navigate('CoinDetails', { coin: item })}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    padding: 20,
                                    backgroundColor: isDarkTheme ? "#111" : "#fff",
                                    borderTopLeftRadius: isFirst ? 10 : 0,
                                    borderTopRightRadius: isFirst ? 10 : 0,
                                    borderBottomLeftRadius: isLast ? 10 : 0,
                                    borderBottomRightRadius: isLast ? 10 : 0,
                                    marginBottom: 1,
                                }}
                            >
                                <Avatar.Image source={{ uri: item.image }} size={30} />
                                <View style={{ marginLeft: 12, flex: 1 }}>
                                    <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>
                                        {item.name}
                                    </Text>
                                    <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                                        {item.symbol.toUpperCase()}
                                    </Text>
                                </View>

                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>
                                        ${item.current_price.toLocaleString()}
                                    </Text>
                                    <Text
                                        variant="bodySmall"
                                        style={{ color: isPositive ? 'green' : 'red' }}
                                    >
                                        {priceChange?.toFixed(2)}%
                                    </Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    );
                }}
            />
            <SnackbarComp message="Failed to load data" visible={visible} setVisible={setVisible} refetch={refetch} />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        margin: 16,
        flexDirection: "row"
    },
    text: {
        fontSize: 16,
    }
});