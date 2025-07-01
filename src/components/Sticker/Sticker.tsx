import type { StickerProps } from './Sticker.types';

export function Sticker({ src, width, height, borderWidth = 10 }: StickerProps) {
    if (!width || !height) {
        console.error('Sticker requires both \'width\' and \'height\' props.');
        return null;
    }

    const id = Math.random().toString(36).substr(2, 9);

    return (
        <div style={{ width, height, position: 'relative' }}>
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
            >
                <defs>
                    {/* Paper-like gradient fill */}
                    <linearGradient id={`sticker-gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fef6e4" />
                        <stop offset="100%" stopColor="#f4e2d8" />
                    </linearGradient>

                    {/* Generate an alpha mask of the image */}
                    <mask id={`alpha-mask-${id}`}>
                        <image
                            href={src}
                            x="0"
                            y="0"
                            width={width}
                            height={height}
                            preserveAspectRatio="xMidYMid slice"
                            style={{ filter: `contrast(10000%)` }} // Ensures alpha extraction
                        />
                    </mask>

                    {/* Filter to dilate the mask (outline shape) */}
                    <filter id={`outline-filter-${id}`} x="-50%" y="-50%" width="200%" height="200%">
                        <feImage href={src} x="0" y="0" width={width} height={height} result="sprite" />
                        <feColorMatrix
                            in="sprite"
                            type="matrix"
                            values="0 0 0 0 0
                          0 0 0 0 0
                          0 0 0 0 0
                          0 0 0 1 0"
                            result="alpha"
                        />
                        <feMorphology in="alpha" operator="dilate" radius={borderWidth} result="dilated" />
                        <feComposite in="dilated" in2="alpha" operator="out" result="borderOnly" />
                    </filter>
                </defs>

                {/* Border shape filled with paper gradient */}
                <g filter={`url(#outline-filter-${id})`} mask={`url(#alpha-mask-${id})`}>
                    <rect
                        x="0"
                        y="0"
                        width={width}
                        height={height}
                        fill={`url(#sticker-gradient-${id})`}
                    />
                </g>
            </svg>

            {/* Actual image on top */}
            <img
                src={src}
                alt="Sticker Sprite"
                style={{
                    width,
                    height,
                    position: 'relative',
                    zIndex: 1,
                    display: 'block',
                }}
            />
        </div>
    );
};

export default Sticker;
