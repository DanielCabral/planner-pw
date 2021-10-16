import Header from '../../components/header';
import {VscSplitHorizontal, VscSplitVertical} from 'react-icons/vsc'
import {FiChevronLeft, FiChevronRight, FiPlus} from 'react-icons/fi'
import {MdDelete} from 'react-icons/md'

export default function EditPlanner() {
    const col = () =>{
        return (
        <div className='w-80 h-96 bg-new-planner border-4 border-dotted border-secondary'>
            <div className='ml-2 mt-2 flex flex-row'>
                <button cursor='pointer' className=''>
                    <VscSplitHorizontal className='p-1 text-secondary border border-secondary text-3xl rounded'/>
                </button>
                <button cursor='pointer' className=''>
                    <VscSplitVertical className='ml-1 p-1 text-secondary border border-secondary text-3xl rounded'/>
                </button>
                <button cursor='pointer' className=''>
                    <FiChevronLeft className='ml-1 p-1 text-secondary border border-secondary text-3xl rounded'/>
                </button>
                <button cursor='pointer' className=''>
                    <FiChevronRight className='ml-1 p-1 text-secondary border border-secondary text-3xl rounded'/>
                </button>
                <button cursor='pointer' className=''>
                    <MdDelete className='ml-1 p-1 text-secondary border border-secondary text-3xl rounded'/>
                </button>
            </div>
            <div className='h-80 flex items-center justify-center'>
                <FiPlus className='ml-1 p-1 text-secondary text-7xl'/>
            </div>
           </div>
    )
}

    return (
       <div className='w-full h-screen'>        
          <Header />

          <div className='mt-10 w-full grid gap-4 grid-cols-3 place-items-center'>           
           {col()}
           {col()}
           {col()}
          </div>
       </div>
    );
}