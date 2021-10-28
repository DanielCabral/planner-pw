import { Link } from 'react-router-dom'
import { FiPlus, FiMoreVertical } from 'react-icons/fi'
import CardPlanner from './CardPlanner';
export default function Planners() {
    const planners = [
        {
            id: '1',
            type: 'Fin',
            title: 'Rendas',
        },
        {
            id: '2',
            type: 'Aca',
            title: 'Unidade I',
        },
        {
            id: '3',
            type: 'Pro',
            title: 'Projetos',
        },
        {
            id: '4',
            type: 'Est',
            title: 'Metas',
        }
    ];

    return (
        <div>
            <div className='p-20'>
                <div className='w-full flex flex-col lg:flex-row justify-between items-center'>
                    <p className='font-bold text-2xl'>Seus Planners</p>
                    <input className="border-2 rounded-xl border-stroke focus:border-success px-6 py-2 outline-none focus:outline-none" placeholder="Buscar"></input>
                </div>
                <div className="place-items-center grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-8">
                    <Link to='new-planner' className='cursor-pointer'>
                        <div className="w-40 h-40 bg-new-planner rounded-xl border-2 border-dashed border-secondary flex justify-center items-center">
                            <FiPlus className="text-secondary font-serif font-bold text-5xl" />
                        </div>
                    </Link>
                    {
                        planners.map((planner, i) => (
                            <CardPlanner
                                key={planner.id}
                                index={i}
                                planner={planner}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    );
}