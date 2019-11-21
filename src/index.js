/**
 *
 * HexagonalProgress
 *
 */

import React from 'react';
import BadgeLevel from './BadgeLevel';
import clsx from 'clsx';
import style from './style.css';

const SVG_PATH_LENGTH = 2160;

function HexagonalProgress({ value, badgeImg, disabled, color, level, lineCap, location }) {
    const setStrokeDashoffset = progress => ((100 - progress) / 100) * SVG_PATH_LENGTH;
    return (
      <div className={style.root}>
        <svg
          className={clsx(style.progress, disabled && style.disabled)}
          viewBox="0 0 776 670"
          strokeWidth={30}
        >
          <path
            className={style.track}
            stroke={!disabled && color}
            strokeOpacity={0.5}
            d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"
          />
          <path
            strokeDasharray={SVG_PATH_LENGTH}
            strokeDashoffset={SVG_PATH_LENGTH}
            className={style.fill}
            strokeLinecap={lineCap}
            stroke={!disabled && color}
            style={{ strokeDashoffset: setStrokeDashoffset(value) }}
            d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"
          />
          <BadgeLevel
            level={level}
            color={color}
            disabled={disabled}
            value={value}
            location={location}
          />
          {badgeImg && <image
            href={badgeImg}
            alt={`${value}%`}
            x="35%"
            y="35%"
            height="30%"
            width="30%"
          />}
        </svg>
      </div>
    );
  }
  
HexagonalProgress.defaultProps = {
    progress: 0,
    color: "red",
    badgeImg: null,
    disabled: false,
    lineCap: "round",
}

export default HexagonalProgress;
