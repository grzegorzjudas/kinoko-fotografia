import styled from '@emotion/styled';

export const Container = styled.section`
    padding-top: ${({ theme }) => theme.spacing(4)}px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-family: ${({ theme }) => theme.typography.font.heading};
    font-size: 32px;
    font-weight: 400;
    line-height: 110%;
    color: ${({ theme }) => theme.colors.primary[800]};
    display: inline-block;
    text-align: center;
    margin: 0;
    letter-spacing: -0.3px;
    padding: ${({ theme }) => `0 ${theme.spacing(2)}px`};
`;

export const TitleNote = styled.span`
    font-family: ${({ theme }) => theme.typography.font.highlight};
    font-weight: 300;
    font-size: 42px;
    margin: 0;
    display: inline-block;

    &:before {
        content: "\\00a0";
        display: inline;
    }
`;

export const Subtitle = styled.h3`
    font-size: 14px;
`;

export const Content = styled.h5`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary[900]};
    text-align: center;
    padding: ${({ theme }) => `0 ${theme.spacing(2)}px`};
    letter-spacing: 0.9px;
`;
