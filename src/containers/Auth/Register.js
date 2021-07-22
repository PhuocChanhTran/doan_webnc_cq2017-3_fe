import React from "react";
import {useForm} from 'react-hook-form'
import { useHistory,NavLink } from 'react-router-dom';
function Register(){
    const history = useHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit =  function (data) {
        console.log(data);
    }    
    return (
        
        <div className="main-content">
			<div className="box-content padding-left-30">
				<div className="section-content-internal-page page-sign-up-main padding-bottom-35">
					<div className="sign-up-content-page main-conten-text">
						<div className="container custom-max-width-container">
							<div className="row">
								<div className="col-12 col-sm-12 col-md-12 wow fadeInUp column-top-login">
									<div className="main-box-top-title">
										<h1 className="title-main-page font-48 text-center">
											Sign up
										</h1>
										<div className="description-main-page text-center font-18">
											Use your work email to create new account
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-sm-12 col-md-12 wow fadeInUp column-top-login form-bistkey">
									<div className="form-subscribe float-none margin-top-50">
                                    <form>
											<div className="form-group">
											    <label htmlFor="inputRegisterForm-username">Username</label>
											    <input type="text" className="form-control" id="inputRegisterForm-username" placeholder="abc1245" required></input>
											</div>
											<div className="form-group">
											    <label htmlFor="inputRegisterForm-username">Full Name</label>
											    <input type="text" className="form-control" id="inputRegisterForm-fullname" placeholder="Nguyen Van ABC" required></input>
											</div>
											<div className="form-group">
											    <label htmlFor="inputRegisterForm-username">First Name</label>
											    <input type="text" className="form-control" id="inputRegisterForm-firstname" placeholder="Nguyen" required></input>
											</div>
										  	<div className="form-group">
											    <label htmlFor="inputRegisterForm-lastname">Last Name</label>
											    <input type="text" className="form-control" id="inputRegisterForm-lastname" placeholder="ABC" required></input>
											</div>
											<div className="form-group">
												<label htmlFor="inputRegisterForm-email">EMAIL</label>
												<input type="email" className="form-control" id="inputRegisterForm-email" placeholder="you@example.com" required></input>
											</div>
										  	<div className="form-group">
											    <label htmlFor="exampleInputPassword1">PASSWORD</label>
											    <input type="password" className="form-control" id="inputRegisterForm-password" placeholder="************" required></input>
											</div>
											
											<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="defaultChecked" required></input>
												<label className="custom-control-label" htmlFor="defaultChecked" >I have read the <NavLink to="/terms">Terms and Conditions.</NavLink></label>
											</div>
											<div className="login-submit margin-top-15">
											 	<button className="btn sub-login full-width-btn">Register </button>
											</div>
											 <div className="login-facebook margin-top-35">
												<p className="social-fb">Have an account? <NavLink to="/login">Login now!</NavLink></p>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
    )
}
export default Register;