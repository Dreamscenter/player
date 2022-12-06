import React from 'react';
import styles from './Progress.module.css';
import {useDimensions} from '../../../hooks/useDimensions';

type ProgressProps = {
    percentage: number;
    height: number;
};

export function Progress({percentage, height}: ProgressProps) {
    const [dimensions, ref] = useDimensions();
    const width = dimensions?.width ?? 0;
    const progressWidth = percentage / 100 * width;
    const offsetInPercentage = 100;

    return (
        <div ref={(node) => ref(node)} className={styles.Progress} style={{height: `${height}px`}}>
            <div className={styles.glow} style={{
                width: `${percentage}%`,
                height: `${progressWidth > height ? 100 : progressWidth / height * 100}%`
            }}/>

            <div className={styles.currentContainer}>
                <div className={styles.current} style={{
                    left: `${-offsetInPercentage}%`,
                    width: `${percentage + offsetInPercentage}%`
                }}/>
            </div>
        </div>
    );
}
