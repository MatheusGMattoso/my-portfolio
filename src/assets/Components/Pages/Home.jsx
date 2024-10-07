import React from 'react'

const Home = () => {
    return (
        <div className='bg-neutral-900 h-screen flex justify-around items-center'>
            <div className="esquerda text-white text-7xl">
                <h1>Hi,</h1>
                <h1>I'm <span className='text-purple-400'>Matheus</span></h1>
                <h1>FullStack Developer</h1>
            </div>
            <div className="direita text-white">
                IMAGEM
            </div>
        </div>
    )
}

export default Home