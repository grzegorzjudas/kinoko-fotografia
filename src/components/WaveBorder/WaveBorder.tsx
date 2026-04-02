import type { WaveBorderProps } from './WaveBorder.types';

const VIEWBOX_WIDTH = 100;
const VIEWBOX_HEIGHT = 16;
const EDGE_Y = 7;

function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
}

function createWavePath(waves: number, amplitude: number) {
    const totalWaves = Math.max(1, Math.round(waves));
    const segmentWidth = VIEWBOX_WIDTH / totalWaves;
    const valleyY = clamp(EDGE_Y + clamp(amplitude, 0.1, 1) * 8, EDGE_Y + 1, VIEWBOX_HEIGHT - 0.5);

    let path = `M 0 0 V ${EDGE_Y}`;

    for (let index = 0; index < totalWaves; index += 1) {
        const startX = segmentWidth * index;
        const quarterX = segmentWidth / 4;
        const midX = startX + segmentWidth / 2;
        const endX = startX + segmentWidth;

        path += ` C ${startX + quarterX} ${EDGE_Y}, ${startX + quarterX} ${valleyY}, ${midX} ${valleyY}`;
        path += ` C ${startX + quarterX * 3} ${valleyY}, ${startX + quarterX * 3} ${EDGE_Y}, ${endX} ${EDGE_Y}`;
    }

    path += ` V 0 Z`;

    return path;
}

export function WaveBorder({
    className,
    waves = 3,
    height = 16,
    amplitude = 0.45,
    color = 'currentColor',
}: WaveBorderProps) {
    return (
        <svg
            className={className}
            width="100%"
            height={height}
            viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
        >
            <path d={createWavePath(waves, amplitude)} fill={color} />
        </svg>
    );
}

export default WaveBorder;
