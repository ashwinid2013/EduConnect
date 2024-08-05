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
    const [city, setCity] = useState('');
    const [area, setArea] = useState('');

    const [errors, setErrors] = useState({});

    const userTypes = [
        { id: 1, name: 'Admin' },
        { id: 2, name: 'Teacher' },
        { id: 3, name: 'Parent' },
    ];

    const Areas = [
        { id: 1, name: 'Viman nagar' },
        { id: 2, name: 'Deccan' },
        { id: 3, name: 'Hadapsar' },
    ];

    const Cities = [
        { id: 1, name: 'Pune' },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
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
                userType,
                city,
                area
            });
        }
    };

    const handleReset = () => {
        setUsername('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setMiddleName('');
        setAddress('');
        setContactNumber('');
        setGmail('');
        setUserType('');
        setCity('');
        setArea('');
        setErrors({});
    };

    const validateForm = () => {
        const newErrors = {};
        if (!username) newErrors.username = 'Username is required';
        if (!password) newErrors.password = 'Password is required';
        if (!firstName) newErrors.firstName = 'First Name is required';
        if (!lastName) newErrors.lastName = 'Last Name is required';
        if (!address) newErrors.address = 'Address is required';
        if (!contactNumber) {
            newErrors.contactNumber = 'Contact Number is required';
        } else if (!/^\d{10}$/.test(contactNumber)) {
            newErrors.contactNumber = 'Contact Number must be 10 digits';
        }
        if (!gmail) {
            newErrors.gmail = 'Gmail is required';
        } else if (!/\S+@\S+\.\S+/.test(gmail)) {
            newErrors.gmail = 'Email address is invalid';
        }
        if (!userType) newErrors.userType = 'User Type is required';
        if (!city) newErrors.city = 'City is required';
        if (!area) newErrors.area = 'Area is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateField = (name, value) => {
        const newErrors = { ...errors };
        switch (name) {
            case 'username':
                if (!value) {
                    newErrors.username = 'Username is required';
                } else {
                    delete newErrors.username;
                }
                break;
            case 'password':
                if (!value) {
                    newErrors.password = 'Password is required';
                } else {
                    delete newErrors.password;
                }
                break;
            case 'firstName':
                if (!value) {
                    newErrors.firstName = 'First Name is required';
                } else {
                    delete newErrors.firstName;
                }
                break;
            case 'lastName':
                if (!value) {
                    newErrors.lastName = 'Last Name is required';
                } else {
                    delete newErrors.lastName;
                }
                break;
            case 'address':
                if (!value) {
                    newErrors.address = 'Address is required';
                } else {
                    delete newErrors.address;
                }
                break;
            case 'contactNumber':
                if (!value) {
                    newErrors.contactNumber = 'Contact Number is required';
                } else if (!/^\d{10}$/.test(value)) {
                    newErrors.contactNumber = 'Contact Number must be 10 digits';
                } else {
                    delete newErrors.contactNumber;
                }
                break;
            case 'gmail':
                if (!value) {
                    newErrors.gmail = 'Gmail is required';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    newErrors.gmail = 'Email address is invalid';
                } else {
                    delete newErrors.gmail;
                }
                break;
            case 'userType':
                if (!value) {
                    newErrors.userType = 'User Type is required';
                } else {
                    delete newErrors.userType;
                }
                break;
            case 'city':
                if (!value) {
                    newErrors.city = 'City is required';
                } else {
                    delete newErrors.city;
                }
                break;
            case 'area':
                if (!value) {
                    newErrors.area = 'Area is required';
                } else {
                    delete newErrors.area;
                }
                break;
            default:
                break;
        }
        setErrors(newErrors);
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
                                    onChange={(event) => {
                                        setUserType(event.target.value);
                                        validateField('userType', event.target.value);
                                    }}
                                >
                                    <option>--Select User Type--</option>
                                    {userTypes.map((userType) => (
                                        <option key={userType.id} value={userType.id}>
                                            {userType.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.userType && <small className="text-danger">{errors.userType}</small>}
                            </div>
                        </div>
                        <br />
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Username:</label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={username}
                                    onChange={(event) => {
                                        setUsername(event.target.value);
                                        validateField('username', event.target.value);
                                    }}
                                />
                                {errors.username && <small className="text-danger">{errors.username}</small>}
                            </div>
                        </div>
                        <br />
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Password:</label>
                            <div className="col-sm-9">
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                        validateField('password', event.target.value);
                                    }}
                                />
                                {errors.password && <small className="text-danger">{errors.password}</small>}
                            </div>
                        </div>
                        <br />
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">First Name:</label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={firstName}
                                    onChange={(event) => {
                                        setFirstName(event.target.value);
                                        validateField('firstName', event.target.value);
                                    }}
                                />
                                {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
                            </div>
                        </div>
                        <br />
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
                        <br />
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Last Name:</label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={lastName}
                                    onChange={(event) => {
                                        setLastName(event.target.value);
                                        validateField('lastName', event.target.value);
                                    }}
                                />
                                {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
                            </div>
                        </div>
                        <br />
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Address:</label>
                            <div className="col-sm-9">
                                <textarea
                                    className="form-control"
                                    value={address}
                                    onChange={(event) => {
                                        setAddress(event.target.value);
                                        validateField('address', event.target.value);
                                    }}
                                />
                                {errors.address && <small className="text-danger">{errors.address}</small>}
                            </div>
                        </div>
                        <br />
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Select City</label>
                            <div className="col-sm-9">
                                <select
                                    className="form-control"
                                    value={city}
                                    onChange={(event) => {
                                        setCity(event.target.value);
                                        validateField('city', event.target.value);
                                    }}
                                >
                                    <option>--Select City--</option>
                                    {Cities.map((C) => (
                                        <option key={C.id} value={C.id}>{C.name}</option>
                                    ))}
                                </select>
                                {errors.city && <small className="text-danger">{errors.city}</small>}
                            </div>
                        </div>
                        <br />
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Select Area</label>
                            <div className="col-sm-9">
                                <select
                                    className="form-control"
                                    value={area}
                                    onChange={(event) => {
                                        setArea(event.target.value);
                                        validateField('area', event.target.value);
                                    }}
                                >
                                    <option>--Select Area--</option>
                                    {Areas.map((a) => (
                                        <option key={a.id} value={a.id}>{a.name}</option>
                                    ))}
                                </select>
                                {errors.area && <small className="text-danger">{errors.area}</small>}
                            </div>
                        </div>
                        <br />
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Contact Number:</label>
                            <div className="col-sm-9">
                                <input
                                    type="tel"
                                    className="form-control"
                                    value={contactNumber}
                                    onChange={(event) => {
                                        setContactNumber(event.target.value);
                                        validateField('contactNumber', event.target.value);
                                    }}
                                />
                                {errors.contactNumber && <small className="text-danger">{errors.contactNumber}</small>}
                            </div>
                        </div>
                        <br />
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Gmail:</label>
                            <div className="col-sm-9">
                                <input
                                    type="email"
                                    className="form-control"
                                    value={gmail}
                                    onChange={(event) => {
                                        setGmail(event.target.value);
                                        validateField('gmail', event.target.value);
                                    }}
                                />
                                {errors.gmail && <small className="text-danger">{errors.gmail}</small>}
                            </div>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleReset} style={{ marginLeft: '10px' }}>
                            Reset
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
