import { createBrowserRouter, RouterProvider } from 'react-router';
import { ThemeProvider } from '@emotion/react';

import theme from '../../lib/theme';
import { PageLayout } from '../../components';
import { ContactPage, HomePage, OfferPage, PrivacyPolicyPage } from '../../pages';

import * as Styles from './App.styles';
import type { RouteObject } from './App.types';

const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout />,
        handle: { breadcrumb: 'Strona główna' },
        children: [
            {
                index: true,
                element: <HomePage />,
                handle: { breadcrumb: 'Strona główna' },
            },
            {
                path: 'oferta',
                element: <OfferPage />,
                handle: { breadcrumb: 'Oferta' },
            },
            {
                path: 'kontakt',
                element: <ContactPage />,
                handle: { breadcrumb: 'Kontakt' },
            },
            {
                path: 'polityka-prywatnosci',
                element: <PrivacyPolicyPage />,
                handle: { breadcrumb: 'Polityka prywatności' },
            },
        ],
    },
] satisfies RouteObject[]);

export function App() {
    return (
        <ThemeProvider theme={theme}>
            <Styles.Global />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
