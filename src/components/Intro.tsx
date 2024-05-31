import colors from '../constants/colors'
import Image from './Image'
//
const Intro = () => {
  return ( 
    <div
      data-testid="intro"
      id="intro"
      className="flex flex-col justify-center align-middle min-h-screen p-10"
      style={{backgroundColor: colors.green}}
    >
      <div className="mx-auto">
        <Image alt="My photo" imgSrc='/assets/i2-sVXlhtRU.jpg' blurredImageSrc='/assets/avatarBlur.png' width={250} height={250} className="rounded-full m-auto" />
        <p className="text-center text-white bold text-2xl mt-10">Hello, I am Alexandr!</p>
        <p className="text-center text-white bold text-4xl mt-5">Full Stack Web Developer</p>
        <p className="text-center text-white bold text-2xl mt-5">Experienced with Typescript, React, Next.js and Node.js</p>
      </div>
    </div>
  )
}
 
export default Intro