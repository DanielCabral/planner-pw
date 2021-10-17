import Paper from '../../assets/paper.png'
import Lock from '../../assets/lock.png'
import User from '../../assets/user.png'
import Header from '../../components/header';

import {Link} from 'react-router-dom';

export default function Login() {
    return (
       <div className='w-full'>         
          <Header />
          <div className='flex flex-row'>
              <div className='mt-8 lg:mt-12 lg:mb-14 w-full flex flex-col flex-grow justify-start items-center'>
               <form className='px-2 lg:px-20 py-2 lg:py-12 h-96 lg:shadow-lg shadow-x rounded-xl flex flex-col items-center justify-start'>
                   <p className='text-lg leading-normal mt-4'>Login</p>
                   <div className='mt-4'>
                   <div  className='flex flex-col'>                
                   <p className='text-sm text-bold'>E-mail</p>
                        <div className='group mb-3 flex flex-row items-center border-2 shadow-inner border-stroke focus:border-secondary rounded-lg'>                        
                            <img src={User} alt='' className='h-5 w-5 relative'/>
                            <input className='h-8 outline-none focus:outline-none group-focus:border-secondary' type='text'/>
                        </div>
                   </div>

                   <div  className='flex flex-col'>                
                   <p className='text-sm text-bold'>Senha</p>
                        <div className='group mb-3 flex flex-row items-center border-2 shadow-inner border-stroke focus:border-secondary rounded-lg'>                        
                            <img src={Lock} alt='' className='h-5 w-5 relative'/>
                            <input className='h-8 outline-none focus:outline-none group-focus:border-secondary' type='password'/>
                        </div>
                   </div>
                   </div>
                   <Link className='w-full mt-1 underline text-sm text-left text-gray' to='planners'>Esqueceu a senha</Link>
                   <Link className='w-full mt-3 px-6 py-2 bg-secondary text-white rounded-lg text-center' to='planners'>Entrar</Link>
                   <p className='mt-6 text-sm cursor-pointer ::before'>Ainda não tem conta?</p> <a href="/home" className='text-secondary underline'>Registre-se</a>           
               </form>
              </div>
              <div className='hidden lg:block mt-12 w-full flex flex-col justify-center items-center mr-24'>
                  <p className='font-serif text-primary text-7xl -mb-8'>Planner</p>
                <img className='h-128 w-128 transform scale-75' src={Paper} alt='Stay Home'/>            
              </div>
          </div>
       </div>
    );
}