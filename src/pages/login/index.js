import Paper from '../../assets/paper.png'
import Lock from '../../assets/lock.png'
import User from '../../assets/user.png'
import Header from '../../components/header';

import {Link} from 'react-router-dom';

export default function Login() {
    return (
       <div className='w-full h-screen'>         
          <Header />
          <div className='flex flex-row'>
              <div className='mt-36 w-full h-auto flex flex-col justify-start items-center'>
               <form className='px-20 py-12 shadow-lg border rounded-xl flex flex-col items-center justify-center'>
                   <p className='text-3xl leading-normal font-serif mb-4'>Login</p>
                   <div  className='flex flex-row items-end'>
                    <img src={User} alt='' className='h-6 w-6'/>
                        <div className='ml-3 flex flex-col'>                        
                            <p className='text-sm text-bold'>E-mail</p>
                            <input className='border-2 shadow-inner border-secondary rounded' type='text'/>
                        </div>
                   </div>
                   <div  className='flex flex-row items-end'>
                    <img src={Lock} alt='' className='h-6 w-6'/>
                        <div className='ml-3 flex flex-col'>                        
                            <p className='text-sm text-bold'>Senha</p>
                            <input className='border-2 border-secondary shadow-inner rounded' type='password'/>
                        </div>
                   </div>
                   <Link className='w-full mt-6 px-6 py-1 bg-secondary text-white rounded-lg text-center' to='planners'>Entrar</Link>
               </form>
               <a href="#" className='mt-3 text-sm cursor-pointer'>Ainda Não tenho conta</a>
              </div>
              <div className='w-full flex flex-col justify-center items-center mr-24'>
                <img className='h-128 w-128' src={Paper} alt='Stay Home'/>            
              </div>
          </div>
       </div>
    );
}