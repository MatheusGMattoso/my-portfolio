import React from 'react'

const Menu = () => {
  return (
    <div className='h-16 bg-neutral-800'>
      <div className="menu h-full flex items-center justify-between font-bold">
        <h1 className='text-purple-400 ml-10 text-2xl'>Mattoso</h1>
        <div className="lista">
          <ul className='flex text-white'>
            <li className='mr-10 cursor-pointer hover:border-purple-400 hover:border-b-2'><p>Home</p></li>
            <li className='mr-10 cursor-pointer hover:border-purple-400 hover:border-b-2'><a><p>About this Project</p></a></li>
            <li className='mr-10 cursor-pointer hover:border-purple-400 hover:border-b-2'><a><p>About Me</p></a></li>
            <li className='mr-10 cursor-pointer hover:border-purple-400 hover:border-b-2'><a><p>Tecnologies</p></a></li>
            <li className='mr-10 cursor-pointer hover:border-purple-400 hover:border-b-2'><a><p>Projects</p></a></li>
            <li className='mr-10 cursor-pointer hover:border-purple-400 hover:border-b-2'><a><p>Contact</p></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu