import colors from '../constants/colors'
import IFrame from './IFrame'
import {useState} from "react";
import {Modal} from "./Modal";
import {IFullDescription} from "./LiveProjectsList";
import { FaRegWindowRestore } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

interface IProps {
  src: string
  className?: string
  title: string
  description: string
  fullDescription?: IFullDescription
}

const LiveProject = ({src, className, title, description, fullDescription} : IProps) => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
    <div style={{backgroundColor: colors.gray}} className={`card flex flex-col rounded-xl ${className}`} >
      <IFrame src={src} />
      <div className='m-4'>
        <p className=' font-extrabold text-3xl mt-5 break-words'>{title}</p>
        <p className='font-medium text-2xl mt-2 ml-5 break-words'>{description}</p>
          <button onClick={() => setOpenModal(true)} className='flex flex-row text-blue-700 font-medium text-2xl mt-2 ml-5 break-words'>
            ...Read more
            <FaRegWindowRestore className="ml-2 text-blue-700" />
          </button>
        <div className="flex justify-end">
          <a href={src} rel="noreferrer" target='_blank' className="flex flex-row text-2xl break-words" >
            <p className='font-medium text-blue-700 '>Go to website</p>
            <FaExternalLinkAlt className="ml-2 text-blue-700" />
          </a>
        </div>
      </div>
    </div>
      <Modal openModal={openModal} onModalClose={() => setOpenModal(false)} title={title} description={description} fullDescription={fullDescription} src={src} />
    </>

  )
}
 
export default LiveProject