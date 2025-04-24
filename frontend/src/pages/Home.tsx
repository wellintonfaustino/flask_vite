import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const irParaSistema = () => {
    navigate('/sistema');
  };

  return (
    <div className='p-4 text-center'>
      <h1 className='text-2xl font-bold mb-4'>Página Inicial</h1>
      <button
        onClick={irParaSistema}
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
      >
        Ver informações do sistema
      </button>

      <button
        onClick={() => navigate('/login')}
        className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 ml-4'
      >
        Ir para Login
      </button>
    </div>
  );
};

export default Home;
