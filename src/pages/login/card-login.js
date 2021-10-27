import Lock from '../../assets/lock.png'
import User from '../../assets/user.png'

import { Link } from 'react-router-dom';
import './style.css'
export function CardLogin() {
    return (
        <div className='card'>
            <form >
                <h2 className='text-3xl text-center'>Login</h2>
                <div className='mt-4'>
                    <div className='flex flex-col'>
                        <p className='text-sm text-bold'>E-mail</p>
                        <div className='group mb-3 flex flex-row items-center border-2 shadow-inner border-stroke focus:border-secondary rounded-lg'>
                            <img src={User} alt='' className='h-5 w-5 relative' />
                            <input className='h-8 outline-none w-full rounded-md bg-back-dark' type='text' />
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <p className='text-sm text-bold'>Senha</p>
                        <div className='group mb-3 flex flex-row items-center border-2 shadow-inner border-stroke focus:border-secondary rounded-lg'>
                            <img src={Lock} alt='' className='h-5 w-5 relative' />
                            <input className='h-8 outline-none w-full rounded-md bg-back-dark' type='password' />
                        </div>
                    </div>
                </div>
                <Link to='home'><div className='p-1'>Esqueceu a senha</div></Link>
                <Link to='planners'><div className='btn-secondary'>Entrar</div></Link>
                <Link to='home'><div className='p-1 text-center'>Ainda não tem conta</div></Link>
            </form>
        </div>

    )
}