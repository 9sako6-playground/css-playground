import React from 'react';
import './loading1.scss';

export default function Loading1() {
  const size = 8;
  const elems = [];
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      elems.push((<div key={`sq${x}-${y}`} className={`sq${x}-${y} square`}></div>));
    }
  }
  return (
    <div id='loading1'>
      {elems}
    </div>
  );
}
