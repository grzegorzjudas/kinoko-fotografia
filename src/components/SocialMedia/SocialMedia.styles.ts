import styled from '@emotion/styled';

import theme, { coloredSvg } from '../../lib/theme';

import type { SocialButtonProps } from './SocialMedia.types';

import iconFacebook from '../../assets/images/icons/social-fb.svg?raw';
import iconInstagram from '../../assets/images/icons/social-instagram.svg?raw';

export const ButtonGroup = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const SocialButton = styled.a<SocialButtonProps>`
    width: ${({ iconSize }) => iconSize || 32}px;
    height: ${({ iconSize }) => iconSize || 32}px;
    display: block;
    transition: transform 0.3s ease;
    color: ${({ theme }) => theme.colors.primary[600]};
    transform: scale(0.9);
    box-sizing: content-box;

    &:hover {
        transform: scale(1);
    }

    @media screen and (min-width: 640px) {
        padding: 10px;
    }
`;

export const FacebookIcon = styled.span`
    width: 100%;
    height: 100%;

    background-image: url('data:image/svg+xml;base64,${btoa(coloredSvg(iconFacebook, theme.colors.primary[600]))}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
`;

export const InstagramIcon = styled.span`
    width: 100%;
    height: 100%;
    background-image: url('data:image/svg+xml;base64,${btoa(coloredSvg(iconInstagram, theme.colors.primary[600]))}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
`;
