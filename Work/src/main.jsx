import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


import DataBinding from './components/data-binding/data_binding.jsx';
import DataBinding1 from './components/data-binding/data-binding1.jsx';
import  {GetCurrentDate}  from './components/date-react/date-react.jsx';
import { ExpressionDemo } from './components/regular-expression/regular-expression.jsx';
import { Flipkart } from './components/Flipkart/flipkart.jsx';
import { Inox } from './components/inox/inox.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Inox />
    <Flipkart />
    <ExpressionDemo />
    <GetCurrentDate />
    <DataBinding />
    <DataBinding1 />
  </StrictMode>,
)
