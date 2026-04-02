import * as Styled from './TopBar.styles';

export function TopBar() {
    return (
        <Styled.Header>
            <Styled.Logo />
            <Styled.NavMenuHandle />
            <Styled.BottomWave waves={4} height={16} amplitude={0.8} />
        </Styled.Header>
    );
}

export default TopBar;
