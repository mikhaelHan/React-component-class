import React from 'react';
import zxcvbn from 'zxcvbn';

import './Second-form.page.scss';

const PaswordComplexity: React.FC<{ valueOfPassword: string }> = ({
  valueOfPassword,
}) => {
  const result = valueOfPassword !== undefined ? zxcvbn(valueOfPassword) : null;

  const strength: () => [number, string] = () => {
    if (result === null) return [0, '#ffffff'];

    switch (result.score) {
      case 0:
        return [0, '#ffffff'];

      case 1:
        return [1, '#ff0000'];

      case 2:
        return [2, '#ffff00'];

      case 3:
      case 4:
        return [3, '#00ff00'];
    }
  };

  const color: () => string = () => {
    const res: [number, string] = strength();
    return res[1];
  };

  const visible: () => number = () => {
    const res: [number, string] = strength();
    return res[0];
  };

  return (
    <div className="password-strength-box">
      <div
        style={{ backgroundColor: color() }}
        className={`password-strength-line ${visible() === 1 || visible() === 2 || visible() === 3 ? 'active' : ''}`}
      ></div>
      <div
        style={{ backgroundColor: color() }}
        className={`password-strength-line ${visible() === 2 || visible() === 3 ? 'active' : ''}`}
      ></div>
      <div
        style={{ backgroundColor: color() }}
        className={`password-strength-line ${visible() === 3 ? 'active' : ''}`}
      ></div>
    </div>
  );
};

export default PaswordComplexity;
