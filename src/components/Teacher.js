import { Link } from "react-router-dom";
function TeacherComponent(){
    return(<div>
        <h1>Welcome to Teacher Component</h1>

        <div className="App">
            <nav className='navbar navbar-expand-sm bg-light mb-3'>
                <div className='container-fluid'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to="viewMarks" className='"nav-link px-3'>View Marks</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="addMarks" className='"nav-link px-3'>Add Marks</Link>
                        </li>
                    
                        <li className='nav-item'>
                            <Link to="Add Assignment" className='"nav-link px-3'>Add Assignment</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="View Student Details" className='"nav-link px-3'>View Student</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/logout" className='"nav-link px-3'>Logout</Link>
                        </li>


                    </ul>
                </div>
            </nav>
        </div>


    </div>)
}
export default TeacherComponent;