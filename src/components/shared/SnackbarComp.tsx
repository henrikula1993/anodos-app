import React, { FC } from 'react';
import { Snackbar } from 'react-native-paper';
import { ActivityIndicator, View } from 'react-native';
import { useThemeContext } from '../../context/ThemeContext';

interface Props {
    message: string;
    visible: boolean;
    setVisible: any;
    refetch: any
}

const SnackbarComp: FC<Props> = ({ message, visible, setVisible, refetch }) => {

    return (
        <Snackbar
            visible={visible}
            onDismiss={() => setVisible(false)}
            duration={3000}
            action={{
                label: 'OK',
                onPress: () => {
                    setVisible(false);
                    refetch();
                },
            }}
        >
            {message}
        </Snackbar>
    );

};

export default SnackbarComp;