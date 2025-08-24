import type { StickerProps } from './Sticker.types';
import * as Styled from './Sticker.styles';
import { useMemo } from 'react';

export function Sticker(props: StickerProps) {
    const [imageUrl, frameUrl] = useMemo(() => {
        return [
            require(`../../assets/images/sprites/${props.name}.png`),
            require(`../../assets/images/sprites/${props.name}-bg.png`),
        ];
    }, [props.name]);

    return (
        <Styled.Container className={props.className}>
            <Styled.SizeReference src={imageUrl} />
            <Styled.Image src={frameUrl} alt={`${props.name}-frame`} />
            <Styled.Image src={imageUrl} alt={props.alt ?? props.name} />
        </Styled.Container>
    );
};

export default Sticker;
