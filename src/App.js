import { NavLink, Route, Routes} from 'react-router-dom';
import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import { Navbar } from './pages/Navbar';
import './index.css'
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.16/browser.js"></script>

export default function App() {
  return (
    <>
    <Navbar className="nav"/>
     
      <Routes>
        <Route path="/about" element={ <div className="TodoWrapper">This to do list was developed with the help of me and youtube</div>
        }/>
        <Route path="/" element={<div className="App"><TodoWrapper/></div>}/>
      </Routes>
    </>
  );
}
