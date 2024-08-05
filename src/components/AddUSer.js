import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddUser = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [gmail, setGmail] = useState('');

    const [userType, setUserType] = useState('');

    const userTypes = [
        { id: 1, name: 'Admin' },
        { id: 2, name: 'Teacher' },
        { id: 3, name: 'Parent' },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send the data to the server or handle it as needed
        console.log('Registration form submitted:', {
            username,
            password,
            firstName,
            lastName,
            middleName,
            address,
            contactNumber,
            gmail,
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2>Registration Form</h2>
                    <form onSubmit={handleSubmit}>

                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Select User Type</label>
                            <div className="col-sm-9">

                                <select
                                    className="form-control"
                                    value={userType}
                                    onChange={(event) => setUserType(event.target.value)}
                                >
                                    <option>--Select User Type--</option>
                                    {userTypes.map((userType) => (
                                        <option key={userType.id} value={userType.id}>
                                            {userType.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <br/>

                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Username:</label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={username}
                                    onChange={(event) => setUsername(event.target.value)}
                                />
                            </div>
                        </div>
                        <br/>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Password:</label>
                            <div className="col-sm-9">
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </div>
                        </div>
                        <br/>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">First Name:</label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={firstName}
                                    onChange={(event) => setFirstName(event.target.value)}
                                />
                            </div>
                        </div>
                        <br/>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Last Name:</label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={lastName}
                                    onChange={(event) => setLastName(event.target.value)}
                                />
                            </div>
                        </div>
                        <br/>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Middle Name:</label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={middleName}
                                    onChange={(event) => setMiddleName(event.target.value)}
                                />
                            </div>
                        </div>
                        <br/>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Address:</label>
                            <div className="col-sm-9">
                                <textarea
                                    className="form-control"
                                    value={address}
                                    onChange={(event) => setAddress(event.target.value)}
                                />
                            </div>
                        </div>
                        <br/>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Contact Number:</label>
                            <div className="col-sm-9">
                                <input
                                    type="tel"
                                    className="form-control"
                                    value={contactNumber}
                                    onChange={(event) => setContactNumber(event.target.value)}
                                />
                            </div>
                        </div>
                        <br/>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Gmail:</label>
                            <div className="col-sm-9">
                                <input
                                    type="email"
                                    className="form-control"
                                    value={gmail}
                                    onChange={(event) => setGmail(event.target.value)}
                                />
                            </div>
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;