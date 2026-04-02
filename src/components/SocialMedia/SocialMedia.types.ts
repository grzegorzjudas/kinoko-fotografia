export type SocialMediaProps = {
    iconSize?: number;
    className?: string;
};

export type SocialButtonProps = Pick<SocialMediaProps, 'iconSize'>;
