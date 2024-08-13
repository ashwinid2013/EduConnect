//import { Link, Outlet } from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function ViewChildComponent(){
   
    return(
      <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            
            <div className="card-body p-4">
              <h6>Select Your Child</h6>
              <div className="mb-4">
              <select className="form-select form-select-lg" 
                style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', color: '#333', backgroundColor: '#f5f5f5' }}>
                  <option>Select Student</option>
                  <option value="s1">Student 1</option>
                  <option value="s2">Student 2</option>
                </select>
              </div>
    
              <h6 className="mt-4">Student Information</h6>
              <table className="table table-bordered mt-3">
                <tbody>
                  <tr>
                    <td><strong>Student Name:</strong> ----<br /><strong>Standard:</strong>-----</td>
                    <td><strong>Student ID:</strong> -----<br /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    ) 
}
export default ViewChildComponent;
