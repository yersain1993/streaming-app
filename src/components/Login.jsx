import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";
import Footer from "./Footer";

import film from '../assets/img/carrete-de-pelicula.png';

const Login = () => {
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState(null);
  const { user, saveUser } = useContext(UserContext);
  
  const handleChange = (e) => {
    const newEmailValue = e.target.value;

    setEmailValue(newEmailValue);
    if(newEmailValue === '') setEmailError('Email is requeried');
    else if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(newEmailValue))
        setEmailError('Only email adress, please!');
    else setEmailError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!emailError) {
        saveUser(emailValue);
    }
  }

  return (
    <div className="flex flex-col items-center bg-[url('/src/assets/img/vista-superior-palomitas-maiz-espacio-copia.jpg')] 
    bg-cover bg-no-repeat bg-center">
        <span>
            <img src={film} alt="carrete" className="w-56 mt-3 hover:scale-110 duration-700"/>
        </span>
        <h1 className="font-bold text-[3rem] text-center text-sky-900 mb-4">
          Unlimited movies and series
        </h1>
        <h2 className="font-bold text-[1.5rem] text-center text-sky-900 mb-4">
            Enjoy wherever you want. Cancel whenever you want.
        </h2>
        <form className="flex flex-col justify-center bg-[#d8f5fd] text-black rounded-md w-96 h-40"
                onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <input 
                type="email"
                placeholder="Type your email to start"
                className="rounded-md "
                value={emailValue}
                onChange={handleChange}
            />
            <button
                type="submit"
                className="text-sky-100 bg-sky-500 rounded-md px-6 mt-2 hover:bg-sky-700 hover:text-sky-200 duration-700"
            >
                Login
            </button>
            {emailError && <p className="text-sky-500 text-center mt-5">{emailError}</p>}
          </div>
        </form>
        {user && <Navigate to="/home" replace/>}
        <div className="mt-14 w-full">
          <Footer user={user}/>
        </div>
        
    </div>
  )
}

export default Login