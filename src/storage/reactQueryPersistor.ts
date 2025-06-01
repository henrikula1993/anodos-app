import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const asyncStoragePersistor = createAsyncStoragePersister({
    storage: AsyncStorage,
});