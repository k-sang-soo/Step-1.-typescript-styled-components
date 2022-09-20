import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import { PriceData } from './Coin';

const List = styled.div``;

const ListTtl = styled.b``;

const ListValue = styled.p``;

interface PriceProps {
    tickersData: PriceData;
}

interface UnitProps {
    data: number;
}

const UnitData = styled(unit)``;

function unit({ data }: UnitProps) {
    return <ListValue>$ {data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</ListValue>;
}

function Price() {
    const { tickersData } = useOutletContext<PriceProps>();
    const quotes = tickersData.quotes.USD;

    return (
        <>
            <List>
                <ListTtl>시총</ListTtl>
                <ListValue>$ {quotes.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</ListValue>
                <UnitData data={quotes.market_cap}></UnitData>
            </List>
        </>
    );
}

export default Price;
