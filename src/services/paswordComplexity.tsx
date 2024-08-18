import React from 'react';
import zxcvbn from 'zxcvbn';

import './paswordComplexity.scss';

const PaswordComplexity: React.FC<{ valueOfPassword: string }> = ({
  valueOfPassword,
}) => {
  const result = valueOfPassword !== undefined ? zxcvbn(valueOfPassword) : null;

  const colorVisible: () => [string, number] = () => {
    if (result === null) return ['#ffffff', 0];

    switch (result.score) {
      case 0:
        return ['#ffffff', 0];
      case 1:
        return ['#ff0000', 1];
      case 2:
        return ['#ffff00', 2];
      case 3:
        return ['#ffff00', 3];
      case 4:
        return ['#00ff00', 4];
      default:
        return ['#ffffff', 0];
    }
  };

  return (
    <div className="password-strength-box">
      {[1, 2, 3, 4].map((line) => {
        const [color, visible] = colorVisible();

        return (
          <div
            key={line}
            style={{ backgroundColor: color }}
            className={`password-strength-line ${visible >= line ? 'active' : ''}`}
          ></div>
        );
      })}
    </div>
  );
};

export default PaswordComplexity;
