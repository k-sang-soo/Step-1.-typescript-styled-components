import {useOutletContext} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import {fetchCoinChart} from '../api';
import ApexChart from 'apexcharts'

interface ChartProps {
    coinId: string;
}

interface IHistorical {
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
    const {isLoading, data} = useQuery<IHistorical>(['ohlcv', coinId], () => fetchCoinChart(coinId));
    console.log(coinId);
    return (
        <>
            <div>
                {isLoading ? (
                    "Loading chart..."
                ) : (
                    <p>chart</p>
                )}
            </div>
        </>
    )
}

export default Chart;
