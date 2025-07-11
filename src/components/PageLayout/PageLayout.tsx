import { Outlet } from 'react-router';

import { Breadcrumbs, TopBar } from '../../components';

import * as Styled from './PageLayout.styles';

export function PageLayout() {
    return (
        <>
            <TopBar />
            <Styled.PageContainer>
                <Breadcrumbs />
                <Outlet />
            </Styled.PageContainer>
        </>
    );
}

export default PageLayout;
