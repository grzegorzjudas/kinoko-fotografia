import styled from '@emotion/styled';

import logo from '../../assets/images/logo.svg';
import NavMenu from '../NavMenu';
import { WaveBorder } from '../WaveBorder';

const BOTTOM_BORDER_SHIFT = 16;

export const Header = styled.header`
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.primary[300]};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding-left: ${({ theme }) => `${theme.spacing(2)}px`};
    isolation: isolate;
    z-index: 3;
`;

export const BottomWave = styled(WaveBorder)`
    position: absolute;
    left: 0;
    bottom: -${BOTTOM_BORDER_SHIFT}px;
    width: 100%;
    display: block;
    color: ${({ theme }) => theme.colors.primary[300]};
    pointer-events: none;
`;

export const Logo = styled.button`
    top: ${({ theme }) => theme.spacing(2)}px;
    width: 64px;
    height: 64px;
    background-image: url("${logo}");
    background-position: center;
    background-size: cover;
    transform: rotate(-13.8deg);
    position: relative;
    z-index: 1;
`;

export const NavMenuHandle = styled(NavMenu)`
    padding-right: ${({ theme }) => `${theme.spacing(2)}px`};
`;
