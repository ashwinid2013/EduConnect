import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewMarks = () => {
  const [showTable, setShowTable] = useState(false);

  const handleViewMarks = () => {
    setShowTable(true);
  };

  // Sample data
  const marksData = [
    { rollNo: 1, subject1: 85, subject2: 78, subject3: 92 },
    { rollNo: 2, subject1: 88, subject2: 74, subject3: 90 },
    { rollNo: 3, subject1: 90, subject2: 82, subject3: 85 },
    // Add more student data as needed
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">View Marks</h1>

      <div className="form-group">
        <label>Standard:</label>
        <select className="form-control">
          <option value="">Select Standard</option>
          <option value="1">Standard 1</option>
          <option value="2">Standard 2</option>
          <option value="3">Standard 3</option>
          <option value="1">Standard 4</option>
          <option value="2">Standard 5</option>
          <option value="3">Standard 6</option>
          <option value="1">Standard 7</option>
          <option value="2">Standard 8</option>
          <option value="3">Standard 9</option>
          <option value="3">Standard 10</option>
        </select>
      </div>
      <br />

      <div className="form-group">
        <label>Exam Type:</label>
        <select className="form-control">
          <option value="">Select Exam Type</option>
          <option value="ut1">Unit Test-1</option>
          <option value="midterm">Midterm</option>
          <option value="ut2">Unit Test-2</option>
          <option value="final">Final</option>
        </select>
      </div>
      <br />

      <button className="btn btn-primary btn-block" onClick={handleViewMarks}>View Marks</button>
      <br /><br /> 

      {showTable && (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Roll No.</th>
                <th>Subject 1</th>
                <th>Subject 2</th>
                <th>Subject 3</th>
              </tr>
            </thead>
            <tbody>
              {marksData.map((student, index) => (
                <tr key={index}>
                  <td>{student.rollNo}</td>
                  <td>{student.subject1}</td>
                  <td>{student.subject2}</td>
                  <td>{student.subject3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewMarks;
