import React from 'react';
import './loading2.scss';

export default function Loading2() {
  const size = 5;
  const arr = [...Array(size)].map((_, i) => (i));
  return (
    <div id='loading2'>
      {arr.map(i => <div key={i} className={`bar${i} bar`}></div>)}
    </div>
  );
}
