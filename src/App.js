import logo from './logo.svg';
import './App.css';
import { Link, Route,Routes } from 'react-router-dom';
import LoginComponent from './components/login';
import ParentComponent from './components/Parent';
import AdminComponent from './components/Admin';
import TeacherComponent from './components/Teacher';
import { useSelector } from 'react-redux';
import LogoutComp from './components/LogoutComp';
import AddUser from './components/AddUSer';


function App() {

  const mystate = useSelector((state)=> state.logged);



  return (
    <div className="App">
      {/* <div style={{display:mystate.loggedIn?"none":"block" }}>
      <h1 className='bg-secondary text-blue'>Welcome to the EduConnect</h1>

      <nav className='navbar navbar-expand-sm bg-light mb-3'>
        <div className='container-fluid'>
          <ul className='navbar-nav'>
          <li className='nav-item'>
            
              <Link to="/" className='"nav-link px-3'>home</Link>
            </li>
            
          <li className='nav-item'>
              <Link to="/login" className='"nav-link px-3'>login</Link>
            </li>

          <li className='nav-item'>
            <Link to="/Admin_home" className='"nav-link px-3'>Admin</Link>
          </li>

          <li className='nav-item'>
            <Link to="/Teacher_home" className='"nav-link px-3'>Teacher</Link>
          </li>
          
           <li className='nav-item'>
            <Link to="/Parent_home" className='"nav-link px-3'>Parent</Link>
          </li>
    
          

          </ul>
        </div>
      </nav>

      </div> */}
      <AddUser/>

      <Routes>
        <Route path="/login" element={ <LoginComponent/> }/> 
        <Route path="/Admin_home" element={< AdminComponent/>}/>
        <Route path="/Teacher_home" element={<TeacherComponent/>}/>
        <Route path="/Parent_home" element={<ParentComponent/>}/>
        <Route path="logout" element={<LogoutComp/>}/>
        
        
      </Routes>
    </div>
  );
}


export default App;
