import styled from '@emotion/styled';
import { Link } from 'react-router';

import { WaveBorder } from '../WaveBorder';
import { SocialMedia } from '../SocialMedia';
import hamburgerIcon from '../../assets/images/icons/hamburger.svg';
import closeIcon from '../../assets/images/icons/close.svg';
import arrowRightIcon from '../../assets/images/icons/arrow-right.svg';

import type { BackdropProps, ChevronProps } from './NavMenu.types';

const BOTTOM_BORDER_SHIFT = 16;
const MENU_PADDING = 2;

export const Container = styled.div`
    position: relative;
    z-index: 1;

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
`;

export const Backdrop = styled.button<BackdropProps>`
    position: fixed;
    inset: 0;
    z-index: 2;
    border: 0;
    padding: 0;
    background: rgba(17, 17, 17, 0.1);
    opacity: ${({ open }) => (open ? 1 : 0)};
    visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
    pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    transition: opacity 200ms ease, visibility 0s linear ${({ open }) => (open ? '0s' : '200ms')};
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
`;

export const Menu = styled.nav`
    width: 220px;
    position: absolute;
    top: 40px;
    right: 0;
    z-index: 4;
    box-sizing: border-box;
    border-top-left-radius: ${({ theme }) => theme.spacing(3)}px;
    padding: ${({ theme }) => theme.spacing(MENU_PADDING)}px;
    background-color: ${({ theme }) => theme.colors.primary[300]};
    color: ${({ theme }) => theme.colors.primary[800]};
    // box-shadow: 0 10px 30px rgba(62, 50, 44, 0.12);
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-8px);
    opacity: 0;
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s linear 0.2s;
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

export const MenuViewport = styled.div`
    overflow: hidden;
`;

export const MenuPanels = styled.div`
    display: flex;
    width: 100%;
    transform: translateX(0);
    transition: transform 250ms ease;

    &.submenuOpen {
        transform: translateX(-100%);
    }
`;

export const MenuPanel = styled.div`
    min-width: 100%;
`;

export const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1)}px;
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const MenuItem = styled.li`
    flex: 1;
`;

export const MenuAction = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(1)}px;
    padding: ${({ theme }) => `${theme.spacing(1)}px 0`};
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: 22px;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.primary[600]};
    }
`;

export const MenuLink = styled(Link)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(1)}px;
    padding: ${({ theme }) => `${theme.spacing(1)}px 0`};
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: 22px;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.primary[600]};
    }
`;

export const MenuActionLabel = styled.span`
    flex: 1;
`;

export const Chevron = styled.span<ChevronProps>`
    display: inline-block;
    width: 4px;
    height: 9px;
    flex-shrink: 0;
    background-image: url("${arrowRightIcon}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 4px 9px;
    transform: ${({ direction }) => (direction === 'left' ? 'scaleX(-1)' : 'none')};
    position: relative;
    top: 1px;
`;

export const SubMenuBack = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)}px;
    padding: 0 0 ${({ theme }) => theme.spacing(1.5)}px;
    margin: 0 0 ${({ theme }) => theme.spacing(1)}px;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary[400]};
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.primary[600]};
    }
`;

export const SocialMediaBox = styled(SocialMedia)`
    margin-top: ${({ theme }) => theme.spacing(5)}px;
`;
