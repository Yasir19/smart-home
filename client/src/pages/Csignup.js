import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CONTRACTOR } from '../utils/mutation';
import Auth from '../utils/auth'

const Csignup = () => {
    const [formState, setFormState] = useState({ name: '', email: '', password: '',typeOfServices:'',address:'',driverLicense:'',cert:'',serviceZipcode:'',bio:'',photo:'',phoneNumber:''});
    const [addContractor, {error}] = useMutation(ADD_CONTRACTOR);


  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
      // use try/catch instead of promises to handle error
      try {
          //execute addContractor mutation and pass in variable data from form
          const { data } = await addContractor({
              variables:{...formState}
          });
          console.log(data);
          Auth.login(data.addContractor.token)
      } catch (e){
          console.error(e)
      }
  };

  return (
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Sign Up</h4>
          <div className='card-body'>
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Your Name'
                name='name'
                type='text'
                id='name'
                value={formState.name}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Services'
                name='typeOfServices'
                type='text'
                id='services'
                value={formState.typeOfServices}
                onChange={handleChange}
              />
               <input
                className='form-input'
                placeholder='Your Address'
                name='address'
                type='address'
                id='address'
                value={formState.address}
                onChange={handleChange}
              />
                    <input
                className='form-input'
                placeholder='Your Driver License'
                name='driverLicense'
                type='text'
                id='driverLicense'
                value={formState.driverLicense}
                onChange={handleChange}
              />
                    <input
                className='form-input'
                placeholder='Your cert'
                name='cert'
                type='text'
                id='cert'
                value={formState.cert}
                onChange={handleChange}
              />
                    <input
                className='form-input'
                placeholder='Your Service Zipcode'
                name='serviceZipcode'
                type='number'
                id='serviceZipcode'
                value={formState.serviceZipcode}
                onChange={handleChange}
              />
                    <input
                className='form-input'
                placeholder='Your bio'
                name='bio'
                type='text'
                id='bio'
                value={formState.bio}
                onChange={handleChange}
              />
                    <input
                className='form-input'
                placeholder='Your Photo'
                name='photo'
                type='text'
                id='photo'
                value={formState.photo}
                onChange={handleChange}
              />
                       <input
                className='form-input'
                placeholder='(999)-999-9999'
                name='phoneNumber'
                type='text'
                id='phoneNumber'
                value={formState.phoneNumber}
                onChange={handleChange}
              />
              <button className='btn d-block w-100' type='submit'>
                Submit
              </button>
              {error && <div>Sign up failed</div>}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Csignup