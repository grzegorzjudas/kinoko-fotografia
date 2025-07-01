import { css, useTheme, Global as EmotionGlobal } from '@emotion/react';

import junicode from '../../assets/fonts/junicode-2.211.woff2';
import licorice from '../../assets/fonts/licorice-v6.woff2';
import romantic from '../../assets/fonts/romantic.woff2';
import lato400latin from '../../assets/fonts/lato400-latin.woff2';
import lato400latinext from '../../assets/fonts/lato400-latinext.woff2';

export const Global = () => {
    const theme = useTheme();

    return (
        <EmotionGlobal
            styles={css`
                body {
                    margin: 0;
                    background-color: ${theme.colors.primary[200]};
                    font-family: ${theme.typography.font.default};

                    * {
                        box-sizing: border-box;
                    }

                    button {
                        border: 0;
                        background-color: transparent;
                        padding: 0;
                    }
                }

                @font-face {
                    font-family: Junicode;
                    font-style: normal;
                    src:
                        local("Junicode"),
                        url("${junicode}") format("woff2");
                }

                @font-face {
                    font-family: Licorice;
                    font-style: normal;
                    src:
                        local("Licorice"),
                        url("${licorice}") format("woff2");
                }

                @font-face {
                    font-family: Lato;
                    font-style: normal;
                    font-weight: 400;
                    src: url(${lato400latin}) format('woff2');
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }

                 @font-face {
                    font-family: Lato;
                    font-style: normal;
                    font-weight: 400;
                    src: url(${lato400latinext}) format('woff2');
                    unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }

                @font-face {
                    font-family: Romantic;
                    font-style: normal;
                    src:
                        local("Romantic"),
                        url("${romantic}") format("woff2");
                }
            `}
        />
    );
};
