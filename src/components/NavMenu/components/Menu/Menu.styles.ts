import styled from '@emotion/styled';
import { Link } from 'react-router';

import { WaveBorder } from '../../../WaveBorder';

export const Menu = styled.nav`
    width: 220px;
    position: absolute;
    top: 40px;
    right: 0;
    z-index: 4;
    box-sizing: border-box;
    border-top-left-radius: ${({ theme }) => theme.spacing(3)}px;
    padding: ${({ theme }) => theme.spacing(2)}px;
    background-color: ${({ theme }) => theme.colors.primary[300]};
    color: ${({ theme }) => theme.colors.primary[800]};
    // box-shadow: 0 10px 30px rgba(62, 50, 44, 0.12);
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-8px);
    opacity: 0;
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s linear 0.2s;

    @media screen and (min-width: 640px) {
        position: static;
        visibility: visible;
        opacity: 1;
        width: auto;
        padding: 0;
        transform: none;
        pointer-events: all;
    }
`;

export const Viewport = styled.div`
    overflow: hidden;
`;

export const PanelGroup = styled.div`
    display: flex;
    width: 100%;
    transform: translateX(0);
    transition: transform 250ms ease;

    &.submenuOpen {
        transform: translateX(-100%);
    }
`;

export const Panel = styled.div`
    min-width: 100%;

    @media screen and (min-width: 640px) {
        display: flex;
        align-items: center;
    }
`;

export const ParentHeader = styled.button`
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

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1)}px;
    list-style: none;
    padding: 0;
    margin: 0;

    @media screen and (min-width: 640px) {
        flex-direction: row;
        gap: ${({ theme }) => theme.spacing(3)}px;
    }
`;

export const Item = styled.li`
    flex: 1;
`;

export const ItemLabel = styled.span`
    flex: 1;
`;

export const ItemLink = styled(Link)`
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

export const ItemButton = styled.button`
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

export const BottomWave = styled(WaveBorder)`
    position: absolute;
    left: 0;
    bottom: -16px;
    width: 100%;
    display: block;
    color: ${({ theme }) => theme.colors.primary[300]};
    pointer-events: none;

    @media screen and (min-width: 640px) {
        display: none;
    }
`;
