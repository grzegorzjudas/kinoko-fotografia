import styled from '@emotion/styled';

export const Container = styled.div`
    position: relative;
    display: inline-block;
`;

export const Image = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const SizeReference = styled.img`
    visibility: hidden;
`;
