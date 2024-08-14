import { useState, useEffect } from "react";

function ViewTeachersComponent() {
  const Parentprofile = JSON.parse(localStorage.getItem("loggedUser"));
  const parentid = Parentprofile.username.uid;

  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [studentDetails, setStudentDetails] = useState(null);
  const [classDetails, setclassData] = useState();
  const [classteachers, setclassTeachers] = useState([]); // State to hold the teachers data
  console.log(JSON.stringify(classDetails));
  //console.log(classDetails.std_id);
  console.log(JSON.stringify(classteachers));
  // Fetch students from the API
  useEffect(() => {
    if (parentid) {
      fetch(`http://localhost:8080/getStudentsByParents/${parentid}`)
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setStudents(data);
          } else {
            console.error("Unexpected data format:", data);
            setStudents([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching students:", error);
          setStudents([]);
        });
    }
  }, [parentid]);

  // Fetch selected student details and class data
  useEffect(() => {
    if (selectedStudentId) {
      fetch(`http://localhost:8080/getStudentById/${selectedStudentId}`)
        .then((response) => response.json())
        .then((data) => {
          setStudentDetails(data);
          return fetch(`http://localhost:8080/getClassStudent/${selectedStudentId}`);
        })
        .then((response) => response.json())
        .then((data) => {
          setclassData(data);
        })
        .catch((error) => {
          console.error("Error fetching additional data:", error);
          setclassData(null);
        });
    }
  }, [selectedStudentId]);

  // Fetch teachers based on student ID and class ID
  const handleViewTeachers = () => {
    const std = classDetails.std_id;
    console.log(std);
    if (std) {
      fetch(`http://localhost:8080/getClassTeachersByStandard/${std}`)
        .then((response) => response.json())
        .then((data) => {
          setclassTeachers(data);
        })
        .catch((error) => {
          console.error("Error fetching teachers:", error);
          setclassTeachers([]);
        });
    }
  };

  // Handle select change
  const handleSelectChange = (e) => {
    const selectedId = parseInt(e.target.value, 10);
    setSelectedStudentId(selectedId);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center mb-4">
        <div className="col-md-12">
          <div className="card shadow-lg">
            <div className="card-body">
              <h6>Select Your Child</h6>
              <div className="mb-4">
                <select
                  className="form-select form-select-lg"
                  style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '16px',
                    color: '#333',
                    backgroundColor: '#f5f5f5',
                  }}
                  onChange={handleSelectChange}
                >
                  <option>Select Student</option>
                  {students.length > 0 ? (
                    students.map((student) => (
                      <option key={student.sid} value={student.sid}>
                        {student.fname} {student.lname}
                      </option>
                    ))
                  ) : (
                    <option disabled>No students available</option>
                  )}
                </select>
              </div>

              <div className="text-center">
                <input
                  type="button"
                  value="View Teachers"
                  className="btn btn-primary btn-lg"
                  onClick={handleViewTeachers}
                />
              </div>

             
              {classteachers.length > 0 && (
                <div className="mt-4">
                  <h6>Teachers Details</h6>
                 
                  <table className="table-bordered">
            <thead>
                <tr>
                    <th>Subject Name</th>
                    <th>Teacher Name</th>
                    <th>Contact No</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {classteachers.map((item, index) => (
                    <tr key={index}>
                        <td>{item.sub_id.sub_name}   </td>
                        <td>{item.tid.fname}  {item.tid.lname}</td> 
                        <td>{item.tid.contact_no}  </td>
                        <td>{item.tid.email}   </td>
                    </tr>
                ))}
            </tbody>
        </table>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTeachersComponent;
