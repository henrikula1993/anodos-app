import React, { useEffect, useState } from 'react';
import {
    View,
    ScrollView,
    Dimensions,
    StyleSheet,
    Linking,
} from 'react-native';
import {
    Text,
    Button,
    useTheme,
    Divider,
    Surface,
    Avatar,
} from 'react-native-paper';
import { useCoinDetails } from '../../hooks/useCoinDetails';
import { useThemeContext } from '../../context/ThemeContext';
import Loader from '../../components/shared/Loader';
import SnackbarComp from '../../components/shared/SnackbarComp';

const CoinDetails = ({ navigation, route }: any) => {

    const theme = useTheme();
    const { isDarkTheme } = useThemeContext();

    const [visible, setVisible] = useState(false);

    const { id } = route.params.coin;

    const { data: coin, isLoading, isError, refetch } = useCoinDetails(id);

    useEffect(() => {

        let title;

        if (coin) {
            title = coin?.name;
        } else {
            title = "";
        }

        navigation.setOptions({
            title: title
        });

    }, [navigation, coin]);

    useEffect(() => {
        if (isError) {
            setVisible(true);
        }
    }, [isError]);

    if (isLoading) return <Loader />;

    return (
        <>
            <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
                {coin ?
                    <>
                        <Surface style={[styles.card, { backgroundColor: isDarkTheme ? "#111" : "#fff", }]}>
                            <View style={styles.iconWrapper}>
                                <Avatar.Image
                                    source={{ uri: coin?.image.large }}
                                    size={30}
                                />
                            </View>
                            <Text variant="headlineSmall" style={styles.title}>
                                {coin?.name} ({coin?.symbol.toUpperCase()})
                            </Text>
                            <Text variant="titleLarge" style={{ marginTop: 8 }}>
                                ${coin?.market_data.current_price?.usd?.toLocaleString()}
                            </Text>
                            <Text
                                variant="bodyMedium"
                                style={{
                                    color: coin?.market_data.price_change_percentage_24h >= 0 ? 'green' : 'red',
                                    marginTop: 4,
                                }}
                            >
                                {coin?.market_data.price_change_percentage_24h?.toFixed(2)}% (24h)
                            </Text>
                            <Divider style={{ marginVertical: 16 }} />
                            <View>
                                <Text variant="bodyMedium">
                                    Market Cap: ${coin?.market_data.market_cap?.usd?.toLocaleString()}
                                </Text>
                                <Text variant="bodyMedium" style={{ marginTop: 4 }}>
                                    Volume: ${coin?.market_data.total_volume?.usd?.toLocaleString()}
                                </Text>
                            </View>
                            {coin?.links.homepage?.[0] ? (
                                <Button
                                    icon="web"
                                    mode="contained-tonal"
                                    style={{ marginTop: 16 }}
                                    onPress={() => Linking.openURL(coin?.links.homepage[0])}
                                >
                                    Visit Website
                                </Button>
                            ) : null}
                        </Surface>

                        {coin?.description.en ? (
                            <View style={styles.descriptionSection}>
                                <Text variant="titleMedium" style={{ marginBottom: 8 }}>
                                    About {coin?.name}
                                </Text>
                                <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceDisabled }}>
                                    {coin?.description.en.replace(/<\/?[^>]+(>|$)/g, '').slice(0, 500)}...
                                </Text>
                            </View>
                        ) : null}
                    </>
                    :
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 16, color: isDarkTheme ? '#fff' : '#000' }}>
                            Something went wrong
                        </Text>
                        <Text style={{ fontSize: 14, textAlign: 'center', marginTop: 8, color: isDarkTheme ? '#ccc' : '#444' }}>
                            We couldn’t load the coin data. Please try again later.
                        </Text>
                    </View>
                }
            </ScrollView>
            <SnackbarComp message="Failed to load data" visible={visible} setVisible={setVisible} refetch={refetch} />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    card: {
        padding: 16,
        borderRadius: 12,
        elevation: 2,
    },
    iconWrapper: {
        marginBottom: 12,
    },
    title: {
        fontWeight: 'bold',
    },
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    descriptionSection: {
        marginTop: 10,
        padding: 5
    },
});

export default CoinDetails;
