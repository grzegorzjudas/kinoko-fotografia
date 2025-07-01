import { ThemeProvider } from '@emotion/react';

import theme from '../../lib/theme';
import TopBar from '../TopBar';
import WelcomeBanner from '../WelcomeBanner';

import * as Styles from './App.styles';
import Button from '../Button';

export function App() {
    return (
        <ThemeProvider theme={theme}>
            <Styles.Global />
            <TopBar />
            <WelcomeBanner />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}><Button variant="primary">Umów sesję</Button></div>
        </ThemeProvider>
    );
}

export default App;
