import Router from './Router';
import { GlobalStyle } from './StyledReset';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { useState } from 'react';

function App() {
    const [isDark, setIsDark] = useState(false);
    const toggleDark = () => setIsDark((current) => !current);

    return (
        <>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <GlobalStyle />
                <Router toggleDark={toggleDark} />
                <ReactQueryDevtools initialIsOpen={true} />
            </ThemeProvider>
        </>
    );
}

export default App;
