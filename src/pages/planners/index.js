import {Link} from 'react-router-dom'
import Header from '../../components/header';

export default function Planners() {
    return (
       <div className='w-full h-screen'>        
          <Header />
          <div className='pt-20 px-80'>
              <div className='w-full flex flex-row justify-between items-center'>
                  <p className='font-serif text-2xl'>Seus Planners</p>
                  <input className="border rounded-3xl border-success px-6 py-2" placeholder="Buscar"></input>                  
              </div>          
              <div className="mt-8 grid grid-cols-4 gap-8">
                    <div className="w-36 h-36 bg-fourth rounded-xl flex justify-center items-center">
                        <p className="text-white font-serif font-bold text-4xl">FIN</p>
                        <div className="mb-2 relative top-12 left-10 h-2 w-2 bg-white rounded-full"></div>
                        <div className="mb-1 relative top-14 left-8 h-2 w-2 bg-white rounded-full"></div>
                        <div className="relative top-16 left-6 h-2 w-2 bg-white rounded-full"></div>
                    </div>
                    <div className="w-36 h-36 bg-danger rounded-xl flex justify-center items-center">
                        <p className="text-white font-serif font-bold text-4xl">Aca</p>
                        <div className="mb-2 relative top-12 left-10 h-2 w-2 bg-white rounded-full"></div>
                        <div className="mb-1 relative top-14 left-8 h-2 w-2 bg-white rounded-full"></div>
                        <div className="relative top-16 left-6 h-2 w-2 bg-white rounded-full"></div>
                    </div>
                    <div className="w-36 h-36 bg-third rounded-xl flex justify-center items-center">
                        <p className="text-white font-serif font-bold text-4xl">Pro</p>
                        <div className="mb-2 relative top-12 left-10 h-2 w-2 bg-white rounded-full"></div>
                        <div className="mb-1 relative top-14 left-8 h-2 w-2 bg-white rounded-full"></div>
                        <div className="relative top-16 left-6 h-2 w-2 bg-white rounded-full"></div>
                    </div>
                    <div className="w-36 h-36 bg-link rounded-xl flex justify-center items-center">
                        <p className="text-white font-serif font-bold text-4xl">Est</p>
                        <div className="mb-2 relative top-12 left-10 h-2 w-2 bg-white rounded-full"></div>
                        <div className="mb-1 relative top-14 left-8 h-2 w-2 bg-white rounded-full"></div>
                        <div className="relative top-16 left-6 h-2 w-2 bg-white rounded-full"></div>
                    </div>
                    <Link to='new-planner' className='cursor-pointer'>
                    <div className="w-36 h-36 bg-secondary rounded-xl flex justify-center items-center">
                        <p className="text-white font-serif font-bold text-4xl">+</p>
                        <div className="mb-2 relative top-12 left-10 h-2 w-2 bg-white rounded-full"></div>
                        <div className="mb-1 relative top-14 left-8 h-2 w-2 bg-white rounded-full"></div>
                        <div className="relative top-16 left-6 h-2 w-2 bg-white rounded-full"></div>
                    </div>
                    </Link>
              </div>    
          </div>

       </div>
    );
}