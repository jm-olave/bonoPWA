import React from 'react';

import './App.css';
import {Joke} from './components/Joke'
// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
// key publica: 7824a774959e768a0c1683031eb43a69
// key privada : 3ff935d51b09d333e953507881371c310709bc72
// ts: 1
// 13ff935d51b09d333e953507881371c310709bc727824a774959e768a0c1683031eb43a69
// md5-hash : 0d0a44b0cb2b1ca9952853b4bc96c503
function App() {
  return (
  <>
  <Joke />
  </>
  );
}

export default App;
