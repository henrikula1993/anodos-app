import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
});

export const fetchCoins = async () => {
    const { data } = await api.get('/coins/markets', {
        params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 50,
            page: 1,
            sparkline: false,
        },
    });
    return data;
};

export const fetchCoinDetails = async (id: string) => {
    const { data } = await api.get(`/coins/${id}`);
    return data;
};

export default api;