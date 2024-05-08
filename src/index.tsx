import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/output/index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './components/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: []
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} fallbackElement={<NotFound />} />
  </Provider>
);
