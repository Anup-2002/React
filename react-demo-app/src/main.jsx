import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import {Login} from './component/login/login.jsx'
import {DataBinding} from './component/data-binding/data-binding.jsx';
import { EventBinding } from './component/event-bonding/event_binidng.jsx';
import { Fakestore } from './component/fakestore/fakestore.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventBinding/>
    <Fakestore/>
    {/* <h1>Hello from React!</h1>
    <div className='alert alert-info'>
      <p>this first component name DataBinding</p> 
      <DataBinding />
    </div>
    <div className='mt-4 p-4 border-top bg-info'>
      <p>this second component name Login</p>
      <Login />
    </div>
    <div className='mt-4 p-4 border-top bg-success'>
      <p>this third component name App</p>
      <App />
      
    </div> */}

  </StrictMode>,

)
