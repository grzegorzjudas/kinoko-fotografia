import * as Styled from './SocialMedia.styles';

import type { SocialMediaProps } from './SocialMedia.types';

export function SocialMedia(props: SocialMediaProps) {
    return (
        <Styled.ButtonGroup className={props.className}>
            <Styled.SocialButton
                href="https://www.facebook.com/kinoko.fotografia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                iconSize={props.iconSize}
            >
                <Styled.FacebookIcon aria-hidden="true" />
            </Styled.SocialButton>
            <Styled.SocialButton
                href="https://www.instagram.com/kinoko.fotografia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                iconSize={props.iconSize}
            >
                <Styled.InstagramIcon aria-hidden="true" />
            </Styled.SocialButton>
        </Styled.ButtonGroup>
    );
}

export default SocialMedia;
