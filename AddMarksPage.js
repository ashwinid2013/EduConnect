import React, { useState, useEffect } from 'react';

export default function AddMarksPage() {
  const [options1, setOptions1] = useState([]);
  const [options2, setOptions2] = useState([]);
  const [options3, setOptions3] = useState([]);
  const [options4, setOptions4] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');

  // Fetch options for select fields from the backend
  useEffect(() => {
    fetch('/api/options1')
      .then(response => response.json())
      .then(data => setOptions1(data));

    fetch('/api/options2')
      .then(response => response.json())
      .then(data => setOptions2(data));

    fetch('/api/options3')
      .then(response => response.json())
      .then(data => setOptions3(data));

    fetch('/api/options4')
      .then(response => response.json())
      .then(data => setOptions4(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      selectedOption1,
      selectedOption2,
      selectedOption3,
      selectedOption4,
      textInput,
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

        <div className="form-group" style={{"paddingTop":20}}>
          <label htmlFor="select2">Select Subject:</label>
          <select
            id="select2"
            className="form-select form-control"
            value={selectedOption2}
            onChange={(e) => setSelectedOption2(e.target.value)}
          >
            <option value="">Select an option</option>
            {options2.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group" style={{"paddingTop":20}}>
          <label htmlFor="select3">Select ExamType:</label>
          <select
            id="select3"
            className="form-select form-control"
            value={selectedOption3}
            onChange={(e) => setSelectedOption3(e.target.value)}
          >
            <option value="">Select an option</option>
            {options3.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group" style={{"paddingTop":20}}>
          <label htmlFor="select4">Select Student:</label>
          <select
            id="select4"
            className="form-select form-control"
            value={selectedOption4}
            onChange={(e) => setSelectedOption4(e.target.value)}
          >
            <option value="">Select an option</option>
            {options4.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group" style={{"paddingTop":20}}>
          <label htmlFor="textInput">Enter Marks:</label>
          <input
            type="text"
            id="textInput"
            className="form-control"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Enter some text"
          />
        </div>
         <div style={{"paddingTop":20}}></div>   
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
    </div>
  );
}
