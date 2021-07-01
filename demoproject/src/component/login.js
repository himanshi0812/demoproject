import React from 'react'
import { NavLink } from 'react-router-dom';
const Login = () => {
    return(
        <>
         <section className="signin">
                <div className="container mt-5">
                    <div className="signin-content">
                    <div className="signin-form">
                            <h2 className="form-title">Sign-in</h2>
                        <div className="signin-image">
                                <figure>
                                    <img src="loginimage.jpg" alt="login pic" height ="200px" width="200"></img>
                                </figure>
                                <NavLink to="/signup" className="signin-image-link">Create an account</NavLink>
                        </div>
                       
                            <form className="login-form" id="login-form">
                                <div className="sign-in-form-group">

                                    <label htmlFor="email"><i class="zmdi zmdi-email"></i></label>
                                    <input type="text" name ="email" id="email" autoComplete="off" placeholder="your email" /><br></br>
                                    
                                    <label htmlFor="password"><i class="zmdi zmdi-lock"></i> </label>
                                    <input type="text" name ="password" id="password" autoComplete="off" placeholder="your password" /><br></br>
                                    
                                    <div class="col-12">
                                    <button type="submit" class="btn btn-primary">LOGIN</button>
                                    </div>
                                </div>
                                </form>
                          </div>     
                    </div>
                

                </div>
            </section>
       
        </>
    )
}

export default Login;