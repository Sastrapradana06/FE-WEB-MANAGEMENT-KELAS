
import { CgMenuGridO } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import Sidebar from './Sidebar';
import admin_png from '/admin.jfif'
import { useLocation  } from 'react-router-dom';

import { useShallow } from 'zustand/react/shallow'
import useAppStore from '../../store/store';

export default function NavContainer() {
  const {pathname} = useLocation ();

  const [sidebar, setSidebar] = useAppStore(
    useShallow((state) => [state.sidebar, state.setSidebar])
  )


  return (
    <>
      <nav className="w-full h-max fixed z-40 flex justify-center items-center top-0 left-0 lg:left-[20%] lg:w-[80%] bg-[#E6EBEE] border-b">
        <div className="w-[95%] h-max p-2 flex justify-between items-center gap-3">
          <div className="flex justify-center items-center gap-2 ">
            <button onClick={() => setSidebar()} className='lg:hidden'>
              <CgMenuGridO size={28} />
            </button>
            <h1 className='hidden lg:block text-[#303972] font-bold text-[1.4rem] tracking-[1px] capitalize'>{pathname.replace(/[/-]/g, ' ')}</h1>
          </div>
          <div className="flex justify-center items-center gap-2 lg:gap-4">
            <button className=" p-1 rounded-md bg-[#FFFFFF] lg:p-2">
              <CiSettings className='size-6 lg:size-8'/>
            </button>
            <button>
              <img src={admin_png} alt="" className=" w-[30px] h-[30px] rounded-md object-cover lg:w-[45px] lg:h-[45px]" />
            </button>
          </div>
        </div>
      </nav>
      <Sidebar idSidebar={sidebar}/>
    </>
  )
}