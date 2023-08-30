const Loader = () => {
  return ( 
    <div
      style={{height: '100%'}}
      className="absolute inset-0 rounded-xl flex items-center justify-center bg-black opacity-90"
    >
      <div className='m-auto flex flex-col justify-center align-middle'>
        <div className=" mx-auto lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <p className='navbar-item menu-item m-3 text-xl bold text-white'>Site is loading</p>
      </div>
    </div>
  )
}
 
export default Loader