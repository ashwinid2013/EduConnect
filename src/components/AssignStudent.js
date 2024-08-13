import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AssignStudent = () => {
  const [years, setYears] = useState([]);
  const [standards, setStandards] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedStandard, setSelectedStandard] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');

  useEffect(() => {
    // Placeholder for fetch logic
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for submit logic
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <div className="card" style={{ backgroundColor: 'rgba(128, 128, 128, 0.1)', border: 'none', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <div className="card-body">
          <h3 className="text-center mb-4" style={{ color: '#333' }}>Assign Student</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group row" style={{ marginBottom: '15px' }}>
              <label className="col-sm-3 col-form-label" style={{ fontWeight: 'bold', color: '#333' }}>Year:</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '10px' }}
                >
                  <option value="">Select Year</option>
                  {years.map(year => (
                    <option key={year.id} value={year.id}>{year.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <br />
            <div className="form-group row" style={{ marginBottom: '15px' }}>
              <label className="col-sm-3 col-form-label" style={{ fontWeight: 'bold', color: '#333' }}>Standard:</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  value={selectedStandard}
                  onChange={(e) => setSelectedStandard(e.target.value)}
                  style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '10px' }}
                >
                  <option value="">Select Standard</option>
                  {standards.map(standard => (
                    <option key={standard.id} value={standard.id}>{standard.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <br />
            <div className="form-group row" style={{ marginBottom: '15px' }}>
              <label className="col-sm-3 col-form-label" style={{ fontWeight: 'bold', color: '#333' }}>Student:</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  value={selectedStudent}
                  onChange={(e) => setSelectedStudent(e.target.value)}
                  style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '10px' }}
                >
                  <option value="">Select Student</option>
                  {students.map(student => (
                    <option key={student.id} value={student.id}>{student.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <br />
            <button className="btn btn-primary btn-block" type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>Assign</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignStudent;
