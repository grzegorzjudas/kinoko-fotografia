import * as Styled from './TopBar.styles';

export function TopBar() {
    return (
        <Styled.Header>
            <Styled.Logo />
            <Styled.NavMenuHandle />
        </Styled.Header>
    );
}

export default TopBar;
