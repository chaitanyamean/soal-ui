import React from 'react';

import { useForm } from "react-hook-form";
import { connect } from 'react-redux';

import { loginApi } from '../api';
import {authenticate, isAuth} from '../helpers/auth';
// import {Route} from 'react-router-dom';
// import {Redirect} from 'react-router';

import {loginDetails} from '../redux/actions';


const styles = {
    container: {
      width: "80%",
      margin: "0 auto",
    },
    input: {
      width: "100%",
      marginTop: "15px",
      height: "20px"
    },
    button: {
      marginTop: "15px"
    }
  };


const Login = ({history, login, onCreatePressed}) => {

const { register, handleSubmit, errors, formState } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {

      try {

        const responseData = await loginApi(data);

        authenticate(responseData, () =>
        {localStorage.getItem('token') && localStorage.getItem('token') ? history.push('/user/dashboard') : history.push('/')  }
        )
        onCreatePressed(responseData.data.data)

      }
      catch{}
  }

  return (
    <div style={styles.container}>
      <h4>Login</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          value="buyer1@gmail.com"
          ref={register({
            required: true,
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
          })}
          style={{ ...styles.input, borderColor: errors.email && errors.email.message && "red" }}
          placeholder="Email"
        />

        <input
          name="password"
          value="111111"
          ref={register({
            required: true,
            minLength: 6,
          })}
          style={{ ...styles.input, borderColor: errors.password && "red" }}
          placeholder="Password"
        />
        <button type="submit" className="btn btn-primary" style={styles.button} 
          disabled={formState.isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}


const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch => ({
  onCreatePressed: login => dispatch(loginDetails(login)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);