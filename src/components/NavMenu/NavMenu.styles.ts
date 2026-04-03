import styled from '@emotion/styled';

import { WaveBorder } from '../WaveBorder';
import { SocialMedia } from '../SocialMedia';
import hamburgerIcon from '../../assets/images/icons/hamburger.svg';
import closeIcon from '../../assets/images/icons/close.svg';

export const Container = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;

    &.open > button {
        background-image: url("${closeIcon}");
    }

    &.open > nav {
        visibility: visible;
        pointer-events: auto;
        transform: translateY(0);
        opacity: 1;
        transition: opacity 200ms ease, transform 200ms ease, visibility 0s linear 0s;
    }

    @media screen and (min-width: 640px) {
        pointer-events: all;
    }
`;

export const HandleButton = styled.button`
    width: 28px;
    height: 28px;
    border: 0;
    padding: 0;
    background-color: transparent;
    background-image: url("${hamburgerIcon}");
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    position: relative;
    top: 5px;
    z-index: 4;

    @media screen and (min-width: 640px) {
        display: none;
    }
`;

export const SocialMediaBox = styled(SocialMedia)`
    margin-top: ${({ theme }) => theme.spacing(5)}px;

    @media screen and (min-width: 640px) {
        margin-top: 0;
        margin-left: 64px;
    }
`;
