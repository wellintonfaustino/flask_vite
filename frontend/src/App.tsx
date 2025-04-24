import { useRoutes } from 'react-router-dom';
import routes from './routes/routes';
import './App.css';

export default function App() {
  const content = useRoutes(routes);
  return <>{content}</>;
}
