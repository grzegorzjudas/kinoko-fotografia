import * as Styled from './WelcomeBanner.styles';

export function WelcomeBanner() {
    return (
        <Styled.Container>
            <Styled.Title>
                Magiczne sesje ciążowe, noworodkowe i rodzinne w
                <Styled.TitleNote>klimacie boho</Styled.TitleNote>
            </Styled.Title>
            <Styled.Content>
                Każda chwila z Twoim dzieckiem to małe czary – pozwól mi je zatrzymać. W klimacie boho, pełnym naturalności i bliskości, stworzę dla Ciebie fotografie, które będą jak czułe wspomnienia zapisane w świetle i kolorach.
            </Styled.Content>
        </Styled.Container>
    );
}

export default WelcomeBanner;
