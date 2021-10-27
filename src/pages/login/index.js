import Paper from '../../assets/paper.png'
import { CardLogin } from './card-login';

export default function Login() {
    return (
        <div className='w-full'>
            <div className='flex flex-row p-6'>
                <div className='m-8 flex-col w-full flex justify-center items-center'>
                    <CardLogin />
                </div>
                <div className='hidden lg:block m-8 flex-col w-full flex justify-center items-center'>
                    <div className='m-5'>
                        <p className='font-serif text-primary text-7xl -mb-8'>Planner</p>
                        <img className='transform scale-75' src={Paper} alt='Stay Home' />
                    </div>
                </div>
            </div>
        </div>
    );
}