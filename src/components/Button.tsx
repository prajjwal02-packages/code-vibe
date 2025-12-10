import * as React from 'react';
import { ReactNode } from 'react';
type PropsType = {
  children: ReactNode;
};

const Button = ({ children }: PropsType) => {
  return (
    <button
      style={{
        padding: '10px 20px',
        fontSize: '1.2em',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: 'blue',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};

export { Button };
