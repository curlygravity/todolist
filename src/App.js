import { NavLink, Route, Routes} from 'react-router-dom';
import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

const checkActiveLink = (isActive) => (isActive ? 'active' :'');

export default function App() {
  return (
    <>
    <div className="App"><TodoWrapper/></div>
    
    {/* <div>
      <NavLink  className = {({isActive}) => checkActiveLink(isActive)}
        to ="/about"
      >
        about
      </NavLink>
      <NavLink  className = {({isActive}) => checkActiveLink(isActive)}
        to ="/
        
        "
      >
        main
      </NavLink>
    </div>
    <Routes>
      <Route path="/main" element={<TodoWrapper/>}></Route>
      <Route path="/about" element={<div className="App"><TodoWrapper/></div>}></Route>
    </Routes> */}
    </>
  );
}
