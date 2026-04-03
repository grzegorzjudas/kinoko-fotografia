import styled from '@emotion/styled';

import type { BackdropProps } from './Backdrop.types';

export const Backdrop = styled.button<BackdropProps>`
    position: fixed;
    inset: 0;
    z-index: 2;
    border: 0;
    padding: 0;
    background: rgba(17, 17, 17, 0.1);
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
    pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    transition: opacity 200ms ease, visibility 0s linear ${({ visible }) => (visible ? '0s' : '200ms')};
`;
