import { RouteObject } from 'react-router-dom';
import SistemaInfo from '../pages/SistemaInfo';
import Login from '../pages/Login';
import Home from '../pages/Home';

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/sistema', element: <SistemaInfo /> },
  { path: '/login', element: <Login /> },
];

export default routes;
