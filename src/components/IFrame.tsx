import { useState } from 'react'
import Loader from './Loader'

interface IProps {
  src: string
  height?: string
}

const IFrame = ({src, height = "80vh"} : IProps) => {

  const [isLoading, setIsLoading] = useState(true) // Loading state
  
  return ( 
    <div className='relative'>
      <iframe
        src={src}
        style={{height: `${height}`}}
        className={'rounded-xl w-full'}
        loading='lazy'
        onLoad={() => {setIsLoading(false)}}
        onError={() => {setIsLoading(false)}}
        width="800" height="600"
      />

      {
        isLoading &&
        <Loader />
      }
    </div>
  )
}
 
export default IFrame