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
        path: '/guia-reparacion-laptop/',
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: '/guia-reparacion-laptop/cargador',
        element: <Charger />
    },
    {
        path: '/guia-reparacion-laptop/disco-duro',
        element: <Hdd />
    },    {
        path: '/guia-reparacion-laptop/memoria-ram',
        element: <Ram />
    },    {
        path: '/guia-reparacion-laptop/bateria',
        element: <Battery />
    },    {
        path: '/guia-reparacion-laptop/inverter',
        element: <Inverter />
    },    {
        path: '/guia-reparacion-laptop/display',
        element: <Display />
    },    {
        path: '/guia-reparacion-laptop/disipador',
        element: <Disipador />
    },
    {
        path: '/guia-reparacion-laptop/fan',
        element: <Fan />
    },
    {
        path: '/guia-reparacion-laptop/mainboard',
        element: <Mobo />
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
