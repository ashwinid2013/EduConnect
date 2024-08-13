import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewAssignedClasses = () => {
  // Sample data for assigned classes and subjects
  const assignedClasses = [
    { class: 1, subject: 'Math' },
    { class: 3, subject: 'Science' },
    { class: 5, subject: 'English' },
    { class: 7, subject: 'History' },
    { class: 10, subject: 'Geography' },
    
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">View Assigned Classes</h1>
      
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {assignedClasses.map((assignedClass, index) => (
              <tr key={index}>
                <td>{assignedClass.class}</td>
                <td>{assignedClass.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAssignedClasses;
