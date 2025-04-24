import { useEffect } from 'react';
import { useState } from 'react';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const container = document.getElementById('hearts-container');
    if (!container) return;

    const heartCount = 40;
    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement('span');
      heart.className = 'heart';

      const size = Math.random() * 15 + 10;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const duration = Math.random() * 10 + 10;
      const offsetY = Math.random() * 100; // para ajustar a posição inicial da animação

      Object.assign(heart.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: `${posX}%`,
        top: `${posY}%`,
        animation: `float ${duration}s linear infinite`,
        transform: `translateY(${offsetY}vh)`, // simula atraso sem delay
      });

      container.appendChild(heart);
    }
  }, []);

  return (
    <div className='min-h-screen flex items-center justify-center p-4 font-[Poppins] bg-[#fff5f7] relative overflow-hidden'>
      <div
        id='hearts-container'
        className='absolute w-full h-full '
      ></div>
      <div className=' z-10 login-container w-full max-w-md rounded-2xl overflow-hidden border border-pink-100 bg-gradient-to-br from-[#fff5f7] to-[#ffeef2] shadow-[0_10px_30px_rgba(255,138,171,0.2)]'>
        <div className='bg-gradient-to-r from-pink-400 to-pink-600 py-6 px-8 text-center'>
          <h1 className='text-3xl font-bold text-white'>Logo Pampili</h1>
          <p className='text-pink-100 mt-2'>
            Entre na sua conta para continuar
          </p>
        </div>
        <div className='bg-white/90 backdrop-blur-sm p-8'>
          <form
            className='space-y-5'
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const email = (form.email as HTMLInputElement).value;
              const password = (form.password as HTMLInputElement).value;
              const rememberMe = (form['remember-me'] as HTMLInputElement)
                .checked;
              alert(`Login realizado com sucesso! Bem-vinda!\nEmail: ${email}`);
              console.log({ email, password, rememberMe });
            }}
          >
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-pink-900 mb-1'
              >
                E-mail
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <i className='fas fa-envelope text-pink-400'></i>
                </div>
                <input
                  id='email'
                  type='email'
                  required
                  className='w-full pl-10 pr-3 py-3 rounded-lg border border-pink-200 bg-white/80 focus:bg-white focus:shadow-[0_0_0_3px_rgba(251,113,133,0.3)] focus:outline-none text-pink-900 placeholder-pink-300'
                  placeholder='seu@email.com'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-pink-900 mb-1'
              >
                Senha
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <i className='fas fa-lock text-pink-400'></i>
                </div>
                <input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  required
                  className='w-full pl-10 pr-10 py-3 rounded-lg border border-pink-200 bg-white/80 focus:bg-white focus:shadow-[0_0_0_3px_rgba(251,113,133,0.3)] focus:outline-none text-pink-900 placeholder-pink-300'
                  placeholder='••••••••'
                />
                <div
                  className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-pink-400 hover:text-pink-600'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i
                    className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}
                  ></i>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <label className='flex items-center text-sm text-pink-800'>
                <input
                  type='checkbox'
                  name='remember-me'
                  className='h-4 w-4 text-pink-600 border-pink-300 rounded focus:ring-pink-500'
                />
                <span className='ml-2'>Lembrar de mim</span>
              </label>
              <a
                href='#'
                className="text-sm font-medium text-pink-600 hover:text-pink-800 relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-pink-500 after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
              >
                Esqueceu a senha?
              </a>
            </div>
            <button
              type='submit'
              className='w-full py-3 px-4 rounded-lg text-white font-semibold bg-gradient-to-r from-pink-400 to-pink-600 shadow-[0_4px_15px_rgba(251,113,133,0.4)] hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(251,113,133,0.5)] active:translate-y-0 transition-all'
            >
              Entrar
            </button>

            <div className='text-center text-sm text-pink-800'>
              Não tem uma conta?
              <a
                href='#'
                className="ml-1 font-medium text-pink-600 hover:text-pink-800 relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-pink-500 after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
              >
                Cadastre-se
              </a>
            </div>
          </form>
        </div>
      </div>
      <style>{`
        .heart {
          position: absolute;
          display: block;
          background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fb7185'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/></svg>")
            no-repeat center center;
          background-size: contain;
          opacity: 0.6;
          animation: float 15s linear infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10%,
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-20vh) scale(1);
            opacity: 0;
          }
        }

      `}</style>
    </div>
  );
}
