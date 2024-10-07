import React from 'react'

const Menu = () => {
  return (
    <div className='h-14 bg-black'>
      <div className="menu h-full flex items-center justify-between font-bold">
        <h1 className='text-purple-400 p-10'>Mattoso</h1>
        <div className="lista">
          <ul className='flex text-white'>
            <li className='mr-10 cursor-pointer'><p>Home</p></li>
            <li className='mr-10 cursor-pointer'><a><p>About this Project</p></a></li>
            <li className='mr-10 cursor-pointer'><a><p>About Me</p></a></li>
            <li className='mr-10 cursor-pointer'><a><p>Tecnologies</p></a></li>
            <li className='mr-10 cursor-pointer'><a><p>Projects</p></a></li>
            <li className='mr-10 cursor-pointer'><a><p>Contact</p></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu