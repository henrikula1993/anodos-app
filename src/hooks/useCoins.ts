import { useQuery } from '@tanstack/react-query';
import { fetchCoins } from '../services/api';

export const useCoins = () =>
    useQuery({
        queryKey: ['coins'],
        queryFn: fetchCoins,
        staleTime: 1000 * 60 * 5, // 5 minutes scale
    });