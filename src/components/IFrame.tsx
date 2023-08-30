import { useState } from 'react'

interface IProps {
  src: string
}

const IFrame = ({src} : IProps) => {

  const [isLoading, setIsLoading] = useState(true) // Loading state

  console.log(isLoading)

  return ( 
    <div className='relative'>
      <iframe
        src={src}
        style={{height: '80vh'}}
        className={'rounded-xl w-full'}
        loading='lazy'
        onLoad={() => {setIsLoading(false)}}
        onError={() => {setIsLoading(false)}}
      />

      {
        isLoading &&
      <div
        style={{height: '100%'}}
        className="absolute inset-0 rounded-xl flex items-center justify-center bg-black opacity-90"
      >
        <div className='m-auto flex flex-col justify-center align-middle'>
          <div className=" mx-auto lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <p className='navbar-item menu-item m-3 text-xl bold text-white'>Site is loading</p>
        </div>
      </div>
      }
    </div>
  )
}
 
export default IFrame