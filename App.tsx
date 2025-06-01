import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import RootNavigator from './src/navigation';
import { asyncStoragePersistor } from './src/storage/reactQueryPersistor';
import { ThemeProvider } from './src/context/ThemeContext';

const queryClient = new QueryClient();

persistQueryClient({
	queryClient,
	persister: asyncStoragePersistor,
});

export default function App() {
	return (
		<ThemeProvider>
			<QueryClientProvider client={queryClient}>
				<RootNavigator />
			</QueryClientProvider>
		</ThemeProvider>
	);
}