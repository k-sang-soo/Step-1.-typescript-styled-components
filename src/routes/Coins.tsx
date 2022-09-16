import styled from "styled-components";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${props => props.theme.bgColor};
  margin-top: 10px;
  border-radius: 15px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${props => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.accentColor};
`

const Loader = styled.div`
    text-align: center;
`

const Img = styled.img`
  width: 35px;
  margin-right: 10px;
`

interface CoinInterface {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

function Coins() {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            setCoins(json.slice(0, 100));
            setLoading(false);
        })();
    });
    return (
    <Container>
        <Header>
            <Title>코인</Title>
        </Header>
        <CoinsList>
            {loading ?
                (
                <Loader>
                    Loading...
                </Loader>
                    ) :
                (
                coins.map(coin => (
                <Coin key={coin.id}>
                    <Link to={`/${coin.id}`} state={{name: coin.name}}>
                        <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
                        {coin.name} &rarr;
                    </Link>
                </Coin>
                )
            ))}
        </CoinsList>
    </Container>
    );
}

export default Coins;