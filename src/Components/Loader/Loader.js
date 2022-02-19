import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}>
      <TailSpin color="#3f51b5" width={80} height={80} />
    </div>
  );
};

export default Loader;
