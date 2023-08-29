import colors from '../constants/colors'

const Intro = () => {
  return ( 
    <div
      data-testid="intro"
      id="intro"
      className="flex flex-col justify-center align-middle h-screen"
      style={{backgroundColor: colors.green}}
    >
      <div className="m-auto">
        <img alt="My photo" src='/assets/i2-sVXlhtRU.jpg' width={250} height={250} className="rounded-full m-auto" />
        <p className="text-center text-white bold text-2xl mt-5">Hello, I am Alexandr!</p>
        <p className="text-center text-white bold text-4xl mt-10">Full Stack Web Developer</p>
        <p className="text-center text-white bold text-2xl mt-5">Experienced with Typescript, React, Next.js and Node.js</p>
      </div>
    </div>
  )
}
 
export default Intro