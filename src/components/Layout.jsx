// import React from 'react';

import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { UserContext } from "../contexts/UserContext";
import Footer from "./Footer";

const Layout = () => {
    const { removeUser } =useContext(UserContext);
    const { user } = useContext(UserContext);

  return (
    <div className="h-screen flex flex-col" >
        <nav className="flex justify-between bg-sky-900 text-sky-200 sticky">
            <div>
                <i className='bx bx-movie-play text-2xl ml-3'></i>
            </div>
            <section className="flex justify-between">
                {user ? <button className="flex justify-center items-center mx-5"
                        onClick={removeUser}>
                    <h1 className="text-xs">
                        Logout
                    </h1>
                    <i className='bx bx-log-out text-2xl hover:scale-110 hover:text-sky-500 duration-500' ></i>
                </button> : ''}
            </section>
        </nav>
        <div className="p-4 grow-[2] bg-[url('/src/assets/img/vista-superior-palomitas-maiz-espacio-copia.jpg')] 
                    bg-cover bg-no-repeat bg-center">
            <Outlet/>
        </div>
        <Footer user={user}/>
    </div>
  )
}

export default Layout