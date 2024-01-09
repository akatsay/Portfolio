import React, { Dispatch, SetStateAction} from "react";
import {IFullDescription} from "./LiveProjectsList";

interface IProps {
  openModal: boolean;
  onModalClose: Dispatch<SetStateAction<boolean>>;
  title: string;
  description: string;
  fullDescription?: IFullDescription
  src: string;
}

export const Modal = ({ openModal, onModalClose, title, description, fullDescription, src }: IProps) => {

  return (
    openModal ?
      <div onClick={() => onModalClose(false)}
           className='cursor-pointer fixed z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50'>
        <div
          onClick={(e) => e.stopPropagation()}
          className='absolute cursor-default min-w-[80%] sm:min-w-[70%] max-h-[80%] overflow-y-scroll top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 p-12 rounded-xl'
        >
          <div className="text-center">
            <p className='font-extrabold text-3xl mb-5 break-words'>{title}</p>
            <p className='font-medium text-2xl mb-2 break-words'>{description}</p>
          </div>
          <div className="my-5" >
            {fullDescription?.fullDescription.map((item) => (
              <React.Fragment key={item.category}>
                <p className='font-bold text-2xl my-4 break-words'>{item.category}:</p>
                {item.bulletPoints.map((bpoint) => (
                  <p className='font-medium text-2xl mb-2 break-words' key={bpoint}>
                    - {bpoint}
                  </p>
                ))}
              </React.Fragment>
            ))}
          </div>
          <a href={src} rel="noreferrer" target='_blank'>
            <p className='text-center font-medium text-blue-700 text-2xl mb-2 break-words'>Go to website</p>
          </a>
        </div>
      </div>
      :
      <></>
  );
}