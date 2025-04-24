import { useRoutes } from 'react-router-dom';
import routes from './routes/routes';

export default function App() {
  const content = useRoutes(routes);
  return <>{content}</>;
}
