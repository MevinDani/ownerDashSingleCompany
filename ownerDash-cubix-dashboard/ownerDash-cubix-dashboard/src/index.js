import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
// import { store } from './hrModule/app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <DndProvider backend={HTML5Backend}> */}
    {/* <Provider store={store}> */}

    <App />

    {/* </Provider> */}
    <ToastContainer />
    {/* </DndProvider> */}
  </BrowserRouter>
);

