import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AssignTeacher = () => {
  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <div className="card" style={{ backgroundColor: 'rgba(128, 128, 128, 0.1)', border: 'none', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <div className="card-body">
          <h3 className="text-center mb-4" style={{ color: '#333' }}>Assign Teacher</h3>
          <div className="form-group row" style={{ marginBottom: '15px' }}>
            <label className="col-sm-3 col-form-label" style={{ fontWeight: 'bold', color: '#333' }}>Year:</label>
            <div className="col-sm-9">
              <select className="form-control" style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '10px' }}>
                <option value="">Select Year</option>
               
              </select>
            </div>
          </div>
          <br />
          <div className="form-group row" style={{ marginBottom: '15px' }}>
            <label className="col-sm-3 col-form-label" style={{ fontWeight: 'bold', color: '#333' }}>Standard:</label>
            <div className="col-sm-9">
              <select className="form-control" style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '10px' }}>
                <option value="">Select Standard</option>
               
              </select>
            </div>
          </div>
          <br />
          <div className="form-group row" style={{ marginBottom: '15px' }}>
            <label className="col-sm-3 col-form-label" style={{ fontWeight: 'bold', color: '#333' }}>Subject:</label>
            <div className="col-sm-9">
              <select className="form-control" style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '10px' }}>
                <option value="">Select Subject</option>
               
              </select>
            </div>
          </div>
          <br />
          <div className="form-group row" style={{ marginBottom: '15px' }}>
            <label className="col-sm-3 col-form-label" style={{ fontWeight: 'bold', color: '#333' }}>Teacher:</label>
            <div className="col-sm-9">
              <select className="form-control" style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '10px' }}>
                <option value="">Select Teacher</option>
                
              </select>
            </div>
          </div>
          <br />
          <button className="btn btn-primary btn-block" style={{ padding: '10px 20px', fontSize: '16px' }}>Assign</button>
        </div>
      </div>
    </div>
  );
};

export default AssignTeacher;
