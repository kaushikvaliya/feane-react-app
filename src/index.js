import React from 'react';
import ReactDOM from 'react-dom/client';
import Mainrouter from './Mainrouter.jsx';
import { RouterProvider } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import './assets/css/animation.css'
import './assets/css/animationmain.css'
import './assets/css/index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Mainrouter} />);

