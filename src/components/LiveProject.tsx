import colors from '../constants/colors'
import IFrame from './IFrame'
import {useState} from "react";
import {Modal} from "./Modal";
import {IFullDescription} from "./LiveProjectsList";

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
    <div style={{backgroundColor: colors.gray}} className={`card rounded-xl ${className}`} >
      <IFrame src={src} />
      <div className='m-4'>
        <p className=' font-extrabold text-3xl mt-5 break-words'>{title}</p>
        <p className='font-medium text-2xl mt-2 ml-5 break-words'>{description}</p>
        <button onClick={() => setOpenModal(true)} className='font-medium text-2xl mt-2 ml-5 break-words'>
          ...Read more
        </button>
        <a href={src} rel="noreferrer" target='_blank' >
          <p className='font-medium text-blue-700 text-2xl mt-2 break-words'>Go to website</p>
        </a>
      </div>
    </div>
      <Modal openModal={openModal} onModalClose={() => setOpenModal(false)} title={title} description={description} fullDescription={fullDescription} src={src} />
    </>

  )
}
 
export default LiveProject