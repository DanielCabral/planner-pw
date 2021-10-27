import { Link } from 'react-router-dom'
import { FiPlus, FiMoreVertical } from 'react-icons/fi'
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
            <div className='pt-2 lg:pt-20 px-2 lg:px-20'>
                <div className='w-full flex flex-col lg:flex-row justify-between items-center'>
                    <p className='font-bold text-2xl'>Seus Planners</p>
                    <input className="border rounded-xl border-stroke focus:border-success px-6 py-2 outline-none focus:outline-none" placeholder="Buscar"></input>
                </div>
                <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 place-items-center">
                    <Link to='new-planner' className='cursor-pointer'>
                        <div className="w-28 h-32 lg:w-32 lg:h-40 bg-new-planner rounded-xl border-2 border-dashed tracking-widest border-secondary flex justify-center items-center">
                            <FiPlus className="text-secondary font-serif font-bold text-5xl" />
                        </div>
                    </Link>
                    {
                        planners.map((planner, i) => (
                            <div key={planner.id} className={`w-28 h-32 lg:w-32 lg:h-40 bg-${colors[i % colors.length]} rounded-xl `}>
                                <div className='h-28 lg:h-32 flex justify-center items-center'>
                                    <p className="text-white font-serif font-bold text-4xl">{planner.type}</p>
                                </div>
                                <div className="h-2 lg:h-8 mb-4 w-full flex justify-between items-center">
                                    <p className="ml-1 text-white font-light text-xs">{planner.title}</p>
                                    <a href='/planners' className='cursor-pointer'><FiMoreVertical className='text-white text-lg' /></a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}