import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_CONTRACTOR } from '../utils/mutation'
import Auth from '../utils/auth'

const Clogin = (props) => {
    const [formState, setFormState] = useState({email:'',password:''})
    const [login, {error}] = useMutation(LOGIN_CONTRACTOR)
      // update state based on form input changes
      const handleChange = (e) => {
          const {name, value} = e.target;

          setFormState({
              ...formState,
              [name]: value,
          })
      };
      //submit form
      const handleFormSubmit = async (e) => {
          e.preventDefault();
          try{
            const {data }= await login({
              variables:{...formState}
            })
            Auth.login(data.login.token)
          } catch(e) {
            console.log(e)
          }

          //clear form values
          setFormState({
              email:'',
              password:'',
          })
      };
      return (
        <main className='flex-row justify-center mb-4'>
        <div className='col-12 col-md-6'>
          <div className='card'>
            <h4 className='card-header'>Login</h4>
          <div className='card-body'>
            <form onSubmit={handleFormSubmit}>
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
              <button className='btn d-block w-100' type='submit'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );

}
export default Clogin