import {useOutletContext} from 'react-router-dom';
import styled from 'styled-components';
import {PriceData} from './Coin';
import {unit} from "../ts/common";

const ListArea = styled.div`
  width: 50%;
  padding: 10px;
`;

const ListInner = styled.div`
  background-color: ${props => props.theme.displayBgColor};
  padding: 10px;
  border-radius: 10px;
  color: ${props => props.theme.textColor};
  box-shadow: 2px 5px 2px rgba(0, 0, 0, 0.1);
`

const ListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;

  ${ListArea}:nth-child(1) {
    width: 100%;
  }
`

const ListTtl = styled.b``;

const ListValue = styled.p``;

interface PriceProps {
    tickersData: PriceData;
}

function Price() {
    const {tickersData} = useOutletContext<PriceProps>();
    const quotes = tickersData.quotes.USD;

    return (
        <ListWrap>
            <ListArea>
                <ListInner>
                    <ListTtl>최고가</ListTtl>
                    <ListValue>$ {unit(tickersData.max_supply)}</ListValue>
                </ListInner>
            </ListArea>

            <ListArea>
                <ListInner>
                    <ListTtl>15분 전보다</ListTtl>
                    <ListValue>% {quotes.percent_change_15m}</ListValue>
                </ListInner>
            </ListArea>

            <ListArea>
                <ListInner>
                    <ListTtl>30분 전보다</ListTtl>
                    <ListValue>% {quotes.percent_change_30m}</ListValue>
                </ListInner>
            </ListArea>

            <ListArea>
                <ListInner>
                    <ListTtl>1시간 전보다</ListTtl>
                    <ListValue>% {quotes.percent_change_1h}</ListValue>
                </ListInner>
            </ListArea>

            <ListArea>
                <ListInner>
                    <ListTtl>6시간 전보다</ListTtl>
                    <ListValue>% {quotes.percent_change_6h}</ListValue>
                </ListInner>
            </ListArea>

            <ListArea>
                <ListInner>
                    <ListTtl>12시간 전보다</ListTtl>
                    <ListValue>% {quotes.percent_change_12h}</ListValue>
                </ListInner>
            </ListArea>

            <ListArea>
                <ListInner>
                    <ListTtl>24시간 전보다</ListTtl>
                    <ListValue>% {quotes.percent_change_24h}</ListValue>
                </ListInner>
            </ListArea>

            <ListArea>
                <ListInner>
                    <ListTtl>7일 전보다</ListTtl>
                    <ListValue>% {quotes.percent_change_7d}</ListValue>
                </ListInner>
            </ListArea>

            <ListArea>
                <ListInner>
                    <ListTtl>30일 전보다</ListTtl>
                    <ListValue>% <span className={"lang_en"}>{quotes.percent_change_30d}</span></ListValue>
                </ListInner>
            </ListArea>
        </ListWrap>
    );
}

export default Price;
