import StayHome from '../../assets/stay-home.png'
import { Link } from 'react-router-dom'
import Check from '../../assets/check.png'

export default function Home() {
    return (
        <div>
            <div className='flex flex-col lg:flex-row mx-8 lg:mx-28 my-2'>
                <div className='mt-2 lg:mt-8 lg:mr-16 lg:w-2/3 h-auto flex flex-col justify-center items-center'>
                    <p className='w-full text-3xl lg:text-6xl text-center lg:text-left'>Organize sua vida com o Planner!</p>
                    <p className='w-full mt-8 lg:mt-12 text-xl text-left'>Facilite seu trabalho utilizando a ferramenta para:</p>
                    <div className='mt-2 lg:mt-6 w-full flex flex-col items-start justify-start'>
                        <div className='py-1 flex flex-row justify-center items-center'>
                            <img src={Check} alt='' className='h-6 lg:h-8' />
                            <p className='ml-2 lg:ml-4 text-primary text-lg lg:text-2xl'>Finanças</p>
                        </div>
                        <div className='py-0.5 lg:py-1 flex flex-row justify-center items-center'>
                            <img src={Check} alt='' className='h-6 lg:h-8' />
                            <p className='ml-2 lg:ml-4  text-primary text-lg lg:text-2xl'>Academia</p>
                        </div>
                        <div className='py-0.5 lg:py-1 flex flex-row justify-center items-center'>
                            <img src={Check} alt='' className='h-6 lg:h-8' />
                            <p className='py-0.5 lg:ml-2 lg:ml-4  text-primary text-lg lg:text-2xl'>Dentre outros</p>
                        </div>
                    </div>
                </div>
                <div className='mt-4 lg:mt-8 lg:w-1/3 flex flex-col justify-center items-end'>
                    <img className='w-64 h-64 mx-auto hidden lg:block' src={StayHome} alt='Stay Home' />
                    <br />
                    <Link to='/pricing'><div className='btn-third w-96 shadow-lg text-2xl mt-7'>Experimente Já!</div></Link>
                    <div className='w-full py-1 flex justify-center'>
                        <p className='text-secondary text-lg'>Ou</p>
                    </div>
                    <Link to='/login'><div className='btn-secondary-outlined w-96 shadow-lg text-2xl'>Registre-se</div></Link>
                </div>
            </div>
        </div>
    );
}