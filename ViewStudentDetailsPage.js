import React, { useState, useEffect } from 'react';

export default function ViewStudentDetailsPage() {
  const [options1, setOptions1] = useState([]);
  
  const [selectedOption1, setSelectedOption1] = useState('');
 

  // Fetch options for select fields from the backend
  useEffect(() => {
    fetch('/api/options1')
      .then(response => response.json())
      .then(data => setOptions1(data));

   
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      selectedOption1,
      
    };
    console.log('Form Submitted:', formData);
    // You can handle form submission here, such as sending data to a backend.
  };

  return (
    <div className="container mt-4">
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="select1">Select Standard:</label>
          <select
            id="select1"
            className="form-select form-control"
            value={selectedOption1}
            onChange={(e) => setSelectedOption1(e.target.value)}
          >
            <option value="">Select an option</option>
            {options1.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        
        
        </div>
         <div style={{"paddingTop":20}}></div>   
         <button type="submit" className="btn btn-primary" >Submit</button>
       </form>
     </div>
   );
 }

        

        
