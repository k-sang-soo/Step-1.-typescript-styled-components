import Router from "./Router";
import {GlobalStyle} from "./StyledReset";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
    return (
        <>
            <GlobalStyle/>
            <Router />
            <ReactQueryDevtools initialIsOpen={true} />
        </>
    );
}


export default App;
