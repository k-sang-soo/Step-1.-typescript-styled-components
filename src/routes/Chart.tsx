import { useOutletContext } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchCoinChart } from '../api';
import ApexChart from 'react-apexcharts';
import { type } from 'os';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../atmos';

const ChartWrap = styled.div`
    /* & > div:nth-child(2) {
        color: ${(props) => props.theme.textBlackColor};
    } */
`;

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
    const { coinId } = useOutletContext<ChartProps>();
    const { isLoading, data: chartData } = useQuery<IHistorical[]>(['ohlcv', coinId], () => fetchCoinChart(coinId!), { refetchInterval: 5000 });
    const isDark = useRecoilValue(isDarkAtom);

    let validData = chartData ?? [];
    if ('error' in validData) {
        validData = [];
    }

    return (
        <>
            {isLoading ? (
                'Loading chart...'
            ) : (
                <ChartWrap>
                    <ApexChart
                        type="line"
                        series={[
                            {
                                name: 'Price',
                                data: validData?.map((price) => parseFloat(price.close)),
                            },
                        ]}
                        options={{
                            theme: {
                                mode: isDark ? 'dark' : 'light',
                            },
                            chart: {
                                width: 500,
                                height: 500,
                                zoom: {
                                    enabled: false,
                                },
                                toolbar: {
                                    show: false,
                                },
                                background: 'transparent',
                            },
                            grid: {
                                show: false,
                            },
                            stroke: {
                                curve: 'smooth',
                            },
                            yaxis: {
                                show: false,
                            },
                            xaxis: {
                                axisBorder: { show: false },
                                axisTicks: { show: false },
                                labels: { show: false },
                                type: 'datetime',
                                categories: validData.map((price) => price.time_close * 1000),
                                tooltip: {
                                    enabled: false,
                                },
                            },
                            tooltip: {
                                y: {
                                    formatter: (value) => `$${value.toFixed(2)}`,
                                },
                            },
                        }}
                    />

                    <ApexChart
                        type="candlestick"
                        series={[
                            {
                                name: 'Price',
                                data: validData?.map((price) => ({
                                    x: price.time_close * 1000,
                                    y: [price.open, price.high, price.low, price.close],
                                })),
                            },
                        ]}
                        options={{
                            theme: {
                                mode: isDark ? 'dark' : 'light',
                            },
                            chart: {
                                height: 500,
                                zoom: {
                                    enabled: false,
                                },
                                toolbar: {
                                    show: false,
                                },
                                background: 'transparent',
                            },
                            plotOptions: {
                                candlestick: {
                                    colors: {
                                        upward: '#E71915',
                                        downward: '#1C6AD7',
                                    },
                                },
                            },
                            grid: {
                                show: false,
                            },
                            yaxis: {
                                show: false,
                            },
                            xaxis: {
                                axisBorder: { show: false },
                                axisTicks: { show: false },
                                tooltip: {
                                    enabled: false,
                                },
                                labels: {
                                    show: false,
                                },
                            },
                            dataLabels: {
                                style: {
                                    colors: ['#fff'],
                                },
                            },
                        }}
                    />
                </ChartWrap>
            )}
        </>
    );
}

export default Chart;
