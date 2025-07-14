import styled from '@emotion/styled';

import spot from '../../../../assets/images/spot.svg';
import marker from '../../../../assets/images/icons/marker.svg';
import type { ContentProps } from './ListItem.types';

export const ListItem = styled.li`
    margin: 0;
    padding: 0;
    margin-bottom: ${({ theme }) => theme.spacing(1.5)}px;
`;

export const OrderMarker = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("${spot}");
    width: 38px;
    height: 40px;
    font-family: ${({ theme }) => theme.typography.font.highlight};
    line-height: 37px;
    color: ${({ theme }) => theme.colors.primary[700]};
    padding-top: 3px;
    padding-right: 3px;
`;

export const Marker = styled.span`
    display: inline-block;
    margin-right: ${({ theme }) => theme.spacing(1)}px;
    background-image: url("${marker}");
    width: 9px;
    height: 16px;
    font-family: ${({ theme }) => theme.typography.font.highlight};
    line-height: 37px;
    color: ${({ theme }) => theme.colors.primary[700]};
`;

export const Heading = styled.header`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)}px;
`;

export const Title = styled.h2`
    font-family: ${({ theme }) => theme.typography.font.heading};
    font-weight: 400;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary[900]};
`;

export const Content = styled.div<ContentProps>`
    display: ${({ hasTitle }) => (hasTitle ? 'block' : 'flex')};
    align-items: center;
`;
