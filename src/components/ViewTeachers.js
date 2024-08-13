import { Link, Outlet } from "react-router-dom";
function ViewTeachersComponent(){
   // const profile = JSON.parse(localStorage.getItem("loggedUser"));
   return (
    <div className="container mt-5">
      <div className="row justify-content-center mb-4">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-body">
              
              <div className="mb-4">
                <label htmlFor="studentSelect" className="form-label">
                  Select Student
                </label>
                <select id="studentSelect" className="form-select">
                  <option>Select Student</option>
                  <option value="s1">Student 1</option>
                  <option value="s2">Student 2</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="subjectSelect" className="form-label">
                  Select Subject
                </label>
                <select id="subjectSelect" className="form-select">
                  <option>Select Subject</option>
                  <option value="t1">Subject 1</option>
                  <option value="t2">Subject 2</option>
                  <option value="t3">Subject 3</option>
                  <option value="t4">Subject 4</option>
                </select>
              </div>
              <div className="text-center">
                <input
                  type="button"
                  value="View Teachers"
                  className="btn btn-primary btn-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}
export default ViewTeachersComponent;