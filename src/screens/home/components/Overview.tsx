import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { Button, IconButton, Surface, Text } from 'react-native-paper';
import { useThemeContext } from '../../../context/ThemeContext';

interface Props {
    data: any;
}

const Overview: FC<Props> = ({ data }) => {

    const { isDarkTheme } = useThemeContext();
    const [showValue, setShowValue] = useState(true);

    const totalValue = data?.reduce(
        (acc: number, coin: any) => acc + coin.current_price,
        0
    ) ?? 0;

    return (
        <Surface
            style={{
                padding: 16,
                borderRadius: 10,
                marginBottom: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: isDarkTheme ? "#111" : "#fff"
            }}
        >
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
                    Est. Total Value
                </Text>
                <Text variant="titleLarge" style={{ marginTop: 4, fontWeight: "bold" }}>
                    {showValue ? `€${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '••••••'}
                </Text>
            </View>

            <IconButton
                icon={showValue ? 'eye-off' : 'eye'}
                size={30}
                style={{ marginRight: -5 }}
                onPress={() => setShowValue(!showValue)}
                accessibilityLabel={showValue ? 'Hide' : 'Show'}
            />
        </Surface>
    )
}

export default Overview