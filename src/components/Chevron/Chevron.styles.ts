import styled from '@emotion/styled';

import { getCssTransformRotation } from '../../lib/css';
import arrowRightIcon from '../../assets/images/icons/arrow-right.svg';

import type { ChevronProps } from './Chevron.types';

export const Chevron = styled.span<ChevronProps>`
    display: inline-block;
    width: 4px;
    height: 9px;
    flex-shrink: 0;
    background-image: url("${arrowRightIcon}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 4px 9px;
    transform: ${({ expanded, vertical }) => getCssTransformRotation(
        vertical
            ? (expanded ? 'up' : 'down')
            : (expanded ? 'left' : 'right'),
        'right',
    )};
    position: relative;
    top: 1px;
`;
