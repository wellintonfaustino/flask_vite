import { RouteObject } from 'react-router-dom';
import SistemaInfo from '../pages/SistemaInfo';
import Home from '../pages/Home';

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/sistema', element: <SistemaInfo /> },
];

export default routes;
