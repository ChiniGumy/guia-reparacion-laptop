import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage.jsx';
import Charger from './routes/Charger.jsx';
import Ram from './routes/Ram.jsx';
import Battery from './routes/Battery.jsx';
import Inverter from './routes/Inverter.jsx';
import Display from './routes/Display.jsx';
import Disipador from './routes/Disipador.jsx';
import Fan from './routes/Fan.jsx';
import Mobo from './routes/Mobo.jsx';
import Hdd from './routes/HDD.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: '/cargador',
        element: <Charger />
    },
    {
        path: '/disco-duro',
        element: <Hdd />
    },    {
        path: '/memoria-ram',
        element: <Ram />
    },    {
        path: '/bateria',
        element: <Battery />
    },    {
        path: '/inverter',
        element: <Inverter />
    },    {
        path: '/display',
        element: <Display />
    },    {
        path: '/disipador',
        element: <Disipador />
    },
    {
        path: '/fan',
        element: <Fan />
    },
    {
        path: '/mainboard',
        element: <Mobo />
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
