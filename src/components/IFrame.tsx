import { useState } from 'react'
import Loader from './Loader'

interface IProps {
  src: string
}

const IFrame = ({src} : IProps) => {

  const [isLoading, setIsLoading] = useState(true) // Loading state
  
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
        <Loader />
      }
    </div>
  )
}
 
export default IFrame