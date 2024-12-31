import { createRoot } from 'react-dom/client';
import './index.css';
import { StrictMode } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Agents from './pages/agents/Agents';
import Weapons from './pages/weapons/Weapons';
import Tiers from './pages/tiers/Tiers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/agents',
        element: <Agents />
      },
      {
        path: '/weapons',
        element: <Weapons />
      },
      {
        path: '/tiers',
        element: <Tiers />
      },
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
);
