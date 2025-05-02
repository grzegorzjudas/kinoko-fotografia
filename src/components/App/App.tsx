import { ThemeProvider } from '@emotion/react';

import theme from '../../lib/theme';

import * as Styled from './App.styles';

export function App() {
    return (
        <ThemeProvider theme={theme}>
            <Styled.Title>Hello, world!</Styled.Title>
        </ThemeProvider>
    );
}

export default App;
