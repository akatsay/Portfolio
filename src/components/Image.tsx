import {useEffect, useState} from 'react'

interface IProps {
  imgSrc: string
  blurredImageSrc: string
  alt: string
  width?: number
  height?: number
  className?: string
}

const Image = ({imgSrc, blurredImageSrc, alt, width, height, className}: IProps) => {

  const [loading, setLoading] = useState(true)
  console.log(loading)

  useEffect(() => {
    const blurredImageDiv = document.querySelector('.blurred-img')

    if (blurredImageDiv && loading === false) {
      blurredImageDiv.classList.add('loaded')
    } else if (blurredImageDiv && loading === true) {
      blurredImageDiv.classList.remove('loaded')
    }
  }, [loading])

  return ( 
    <div 
      className={`blurred-img ${className}`}  
      style={{backgroundImage: `url(${blurredImageSrc})`, 
        width: `${width}px`, height: `${height}px`}} 
    >
      <img 
        alt={alt} 
        src={imgSrc} 
        width={width} 
        height={height} 
        className={className} 
        loading="lazy" 
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      />
    </div>
  )
}
 
export default Image