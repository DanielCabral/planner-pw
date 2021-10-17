import {Link} from 'react-router-dom'
import {FiChevronDown} from 'react-icons/fi'
import Business from '../../assets/business.png'
import Notes from '../../assets/notes.png'
import Pen from '../../assets/pen.png'
import Header from '../../components/header';

export default function PlannerModel() {
    return (
       <div className='w-full h-screen'>        
          <Header />

          <div className='pt-4 px-2 lg:pt-10 lg:px-56'>
            <p className='text-4xl text-center mb-8'>Selecione um modelo abaixo e descubra um novo mundo</p>
            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <div>
                    <Link to='edit-planner' className='cursor-pointer'>
                            <div className="w-56 h-56 p-8 border border-secondary rounded-full ">
                                <img src={Business} alt='Business'/>
                            </div>
                    </Link>
                    <p className='w-56 mt-4 text-center text-lg'>Gerencie seu negócio com o nosso planner financeiro</p>
                </div>
                <div>
                    <Link to='edit-planner' className='cursor-pointer'>
                            <div className="w-56 h-56 p-8 border border-secondary rounded-full ">
                                <img src={Notes} alt='Notes'/>
                            </div>
                    </Link>
                    <p className='w-56 mt-4 text-center text-lg'>Sua vida acadêmica não será a mesma com este planner escolar</p>
                </div>
                <div>
                    <Link to='new-planner' className='cursor-pointer'>
                            <div className="w-56 h-56 p-8 border border-secondary rounded-full ">
                                <img src={Pen} alt='Pen'/>
                            </div>
                    </Link>


                    <p className='w-56 mt-4 text-center text-lg'>Crie um planner do zero de acordo com suas necessidades</p>
                </div>
            </div>
            <Link to='edit-planner' className='cursor-pointer'>
                <div className='flex flex-col items-center'>
                    <p className='mt-3 text-secondary text-xl text-center'>Ver mais modelos</p>
                    <FiChevronDown className='text-4xl text-secondary text-center' />
                </div>
            </Link>
          </div>
       </div>
    );
}