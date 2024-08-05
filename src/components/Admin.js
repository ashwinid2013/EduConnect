import { Link } from "react-router-dom";

function AdminComponent(){

    
    return(<div>
        <h1>Welcome to Admin Component</h1>

        <div className="App">
            <nav className='navbar navbar-expand-sm bg-light mb-3'>
                <div className='container-fluid'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to="Addteacher" className='"nav-link px-3'>Add Teacher</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="addParent" className='"nav-link px-3'>Add Parent</Link>
                        </li>
                    
                        <li className='nav-item'>
                            <Link to="Add Subject" className='"nav-link px-3'>Add Subject</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="Assignsubjecttoteacher" className='"nav-link px-3'>Assign Subject</Link>
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
export default AdminComponent;