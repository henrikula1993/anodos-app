import { useQuery } from '@tanstack/react-query';
import { fetchCoinDetails } from '../services/api';

export const useCoinDetails = (id: string) =>
    useQuery({
        queryKey: ['coinDetails', id],
        queryFn: () => fetchCoinDetails(id),
        staleTime: 1000 * 60 * 5, // 5 minutes
    });