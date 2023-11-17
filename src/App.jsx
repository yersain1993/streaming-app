import './App.css';
import { UserProvider } from './contexts/UserContext';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';

function App() {
  

  return (
    <div className={`flex flex-col h-screen font-[agbalumo]`}>
      <UserProvider>
        <RouterProvider router={router}/>
      </UserProvider>
    </div>
  )
}

export default App
