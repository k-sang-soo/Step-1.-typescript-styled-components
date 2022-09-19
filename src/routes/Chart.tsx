import { useOutletContext } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchCoinChart } from '../api';

interface ChartProps {
    coinId: string;
}

interface IChart {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}

function Chart() {
    const coinId = useOutletContext() as ChartProps['coinId'];
    const { isLoading, data } = useQuery<IChart>(['ohlcv', coinId], () => fetchCoinChart(coinId));
    console.log(coinId);
    return <h1>Chart {coinId} </h1>;
}

export default Chart;
