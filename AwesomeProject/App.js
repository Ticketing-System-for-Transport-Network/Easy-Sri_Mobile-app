import React from 'react';
import Home from './src/Home';
import Login from './src/login';
import Register from './src/Register';
import Recharge from './src/Recharge';
import Charge from './src/direction';
import Credit from './src/Credit';
import SuccScan from './src/SuccScan';
import LimitError from './src/LimitError';
import ReadFail from './src/ReadFail';
import Paysuc from './src/Paysuc';
import PayDetails from './src/PayDetails';
//import QR from './src/QRscan';


import  AppRouter from './src/router/router';

const App = ()=>{
  return (
    <PayDetails/>
  )
}

export default App;