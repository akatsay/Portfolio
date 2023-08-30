interface IProps {
  src: string
  className?: string
}

const IFrame = ({src, className} : IProps) => {
  return ( 
    <iframe
      src={src}
      className={`card h-screen rounded-xl ${className}`}
      loading='lazy'
    />
  )
}
 
export default IFrame