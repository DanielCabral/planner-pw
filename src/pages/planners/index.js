import {Link} from 'react-router-dom'
import {FiPlus, FiMoreVertical} from 'react-icons/fi'
import Header from '../../components/header';

export default function Planners() {
    const planners = [
        {
            id: '1',
            type: 'Fin',
            title: 'Planer 1',
        },
        {
            id: '2',
            type: 'Aca',
            title: 'Planer Academico',
        },
        {
            id: '3',
            type: 'Pro',
            title: 'Planner 3',
        },
        {
            id: '4',
            type: 'Est',
            title: 'PLanner 4',
        }
    ];

    const colors = ['fourth', 'danger', 'third', 'link'];

    return (
       <div className='w-full h-screen'>        
          <Header />
          <div className='pt-20 px-20'>
              <div className='w-full flex flex-row justify-between items-center'>
                  <p className='font-bold text-2xl'>Seus Planners</p>
                  <input className="border rounded-xl border-stroke focus:border-success px-6 py-2 outline-none focus:outline-none" placeholder="Buscar"></input>                  
              </div>          
              <div className="mt-8 grid grid-cols-4 gap-8 place-items-center">
                    {
                        planners.map((planner, i) => (
                            <div key={planner.id} className={`w-32 h-40 bg-${colors[i%colors.length]} rounded-xl `}>
                                <div className='h-32 flex justify-center items-center'>
                                    <p className="text-white font-serif font-bold text-4xl">{planner.type}</p>                            
                                </div>                                
                                <div className="h-8 mb-4 w-full flex justify-between items-center">
                                    <p className="ml-1 text-white font-light text-xs">{planner.title}</p>
                                    <a href='/planners'className='cursor-pointer'><FiMoreVertical className='text-white text-lg' /></a>
                                </div>
                            </div>
                        ))
                    }                    
                    <Link to='new-planner' className='cursor-pointer'>
                    <div className="w-32 h-40 bg-new-planner rounded-xl border-2 border-dashed tracking-widest border-secondary flex justify-center items-center">
                        <FiPlus className="text-secondary font-serif font-bold text-5xl"/>                                                                        
                    </div>
                    </Link>
              </div>    
          </div>

       </div>
    );
}