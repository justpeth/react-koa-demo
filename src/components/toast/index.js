import React from 'react';
import ReactDOM from 'react-dom'
import {Toastwraper} from './style'
function Toast ({message}){
  let div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(
    <Toastwraper>{message}</Toastwraper>
    , div);
  setTimeout(()=>{
    document.body.removeChild(div);
  },3000);
}
export default Toast;