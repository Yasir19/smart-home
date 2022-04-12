import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CON } from "../../utils/mutation";
import Auth from "../../utils/auth";

const Csignup = (props) => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    typeOfServices: "",
    address: "",
    driverLicense: "",
    cert: "",
    serviceZipcode: "",
    bio: "",
    photo: "",
    phoneNumber: "",
  });
  const [addContractor, { error }] = useMutation(ADD_CON);
  // update state based on form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  // submit form
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // use try/catch instead of promises to handle error
    try {
      //execute addContractor mutation and pass in variable data from form
      const { data } = await addContractor({
        variables: { ...formState },
      });
      Auth.login(data.ADD_CON.token);
      console.log(data)
    } catch (err) {
      console.log('err',err);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Sign Up</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your Username"
                name="username"
                type="text"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Your Email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="password"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Type Of Services"
                name="typeOfServices"
                type="text"
                id="typeOfServices"
                value={formState.typeOfServices}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="address"
                name="address"
                type="address"
                id="address"
                value={formState.address}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="driverLicense"
                name="driverLicense"
                type="text"
                id="driverLicense"
                value={formState.driverLicense}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Service Zip Code"
                name="serviceZipcode"
                type="number"
                id="serviceZipcode"
                value={formState.serviceZipcode}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Phone Number"
                name="phoneNumber"
                type="text"
                id="phoneNumber"
                value={formState.phoneNumber}
                onChange={handleChange}
              />
                  <input
                className="form-input"
                placeholder="cert"
                name="cert"
                type="text"
                id="cert"
                value={formState.cert}
                onChange={handleChange}
              />
                  <input
                className="form-input"
                placeholder="photo"
                name="photo"
                type="text"
                id="photo"
                value={formState.photo}
                onChange={handleChange}
              />
                  <textarea
                className="form-input"
                placeholder="bio"
                name="bio"
                type="text"
                id="bio"
                value={formState.bio}
                onChange={handleChange}
              />

              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
              {error && <div>Sign up failed </div>}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Csignup;
