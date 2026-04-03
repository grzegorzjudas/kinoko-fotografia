import { useEffect, useState } from 'react';

export type Direction = 'right' | 'left' | 'up' | 'down';

const DIRECTION_ROTATION_ORDER: Direction[] = ['right', 'down', 'left', 'up'];

/**
 * A React hook that returns a boolean indicating whether the given CSS media query matches the current viewport.
 *
 * @example
 * const isDesktop = useMediaQuery('screen and (min-width: 640px)'); // true if viewport is at least 640px wide
 * @param query The CSS media query to evaluate.
 * @returns A boolean indicating whether the media query matches the current viewport.
 */
export function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(() => {
        if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
            return false;
        }

        return window.matchMedia(query).matches;
    });

    useEffect(() => {
        if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
            return undefined;
        }

        const mediaQueryList = window.matchMedia(query);
        const updateMatch = (event: MediaQueryListEvent) => setMatches(event.matches);

        setMatches(mediaQueryList.matches);

        /* Modern browsers support the recommended `addEventListener` method on MediaQueryList */
        if (typeof mediaQueryList.addEventListener === 'function') {
            mediaQueryList.addEventListener('change', updateMatch);

            return () => mediaQueryList.removeEventListener('change', updateMatch);
        }

        /* Fallback for older browsers that only support `addListener` */
        mediaQueryList.addListener(updateMatch);

        return () => mediaQueryList.removeListener(updateMatch);
    }, [query]);

    return matches;
}

/**
 * Returns a CSS transform rotation string based on the desired direction the element should be
 * facing and its original/default direction.
 *
 * @example
 * // For an element that is originally facing 'down', to rotate it to face 'right':
 * // const rotation = getCssTransformRotation('right', 'down'); // 'rotate(-90deg)'
 * @param direction The direction to rotate to.
 * @param base The base direction from which to calculate the rotation. Defaults to 'up'.
 * @returns A CSS transform rotation string using the shortest signed angle.
 */
export function getCssTransformRotation(direction: Direction, base: Direction = 'up') {
    const baseIndex = DIRECTION_ROTATION_ORDER.indexOf(base);
    const directionIndex = DIRECTION_ROTATION_ORDER.indexOf(direction);
    const quarterTurns = (directionIndex - baseIndex + DIRECTION_ROTATION_ORDER.length) % DIRECTION_ROTATION_ORDER.length;
    const rotationDegrees = quarterTurns > 2 ? (quarterTurns - DIRECTION_ROTATION_ORDER.length) * 90 : quarterTurns * 90;

    return `rotate(${rotationDegrees}deg)`;
}
