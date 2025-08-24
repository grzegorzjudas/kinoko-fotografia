import { useEffect, useState } from 'react';

import type { SwitchProps } from './Switch.types';
import { BOTH_CRTL_UNCRTL_WARNING } from './Switch.const';
import * as Styled from './Switch.styles';

export function Switch(props: SwitchProps) {
    const [isChecked, setIsChecked] = useState(props.defaultChecked ?? false);
    const { checked, onChange, disabled, label, ...rest } = props;

    useEffect(() => {
        if (typeof props.checked !== 'undefined' && typeof props.defaultChecked !== 'undefined') {
            console.warn(BOTH_CRTL_UNCRTL_WARNING);
        }

        if (typeof props.checked !== 'undefined') {
            setIsChecked(props.checked);
        }
    }, [props.checked, props.defaultChecked]);

    function onToggle() {
        if (typeof checked === 'undefined') {
            setIsChecked(prev => !prev);
            onChange?.(!isChecked);
        } else {
            onChange?.(!checked);
        }
    }

    return (
        <Styled.Label
            aria-checked={isChecked}
            role="switch"
            tabIndex={0}
            disabled={disabled}
            {...rest}
            onKeyDown={(e) => {
                if (e.key === 'Space' || e.key === ' ') {
                    e.preventDefault();
                    if (!disabled) {
                        onChange?.(!checked);
                    }
                }
            }}
        >
            <Styled.Input
                type="checkbox"
                checked={isChecked}
                disabled={disabled}
                onClick={onToggle}
                readOnly
            />
            <Styled.Slider className="switch-slider" />
            {label && (
                <Styled.LabelText>{label}</Styled.LabelText>
            )}
        </Styled.Label>
    );
}

export default Switch;
