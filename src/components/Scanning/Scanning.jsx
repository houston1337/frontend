import React from 'react';
import Canvas from '../Canvas/Canvas';
import Joystick from '../Joystick/Joystick';

function Scanning() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Canvas />
      <Joystick />
    </div>
  );
}

export default Scanning;
