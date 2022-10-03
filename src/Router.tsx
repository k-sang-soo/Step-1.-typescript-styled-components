import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coins from './routes/Coins';
import Coin from './routes/Coin';
import Chart from './routes/Chart';
import Price from './routes/Price';

interface IRouterProps {
    // 어떤 argument도 받지 않고, void를 return 하겠다.
    // void는 아무것도 없다는 뜻
    toggleDark: () => void;
}

function Router({ toggleDark }: IRouterProps) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path=":coinId" element={<Coin />}>
                    <Route path="chart" element={<Chart />} />
                    <Route path="price" element={<Price />} />
                </Route>
                <Route path="/" element={<Coins toggleDark={toggleDark} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
