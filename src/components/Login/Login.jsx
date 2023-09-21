import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
   const {  signIn } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
      //  Handle form submission
      signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
               
            });
    };
    
  

    return (
        <div className="w-[45%] ">
        <h3 className="font-semibold text-2xl">Login</h3>
        <form  onSubmit={handleSubmit(onSubmit)} className="border-2 border-gray-200 p-14 mt-4  ">
          <p className="mt-2">Username or email address *</p>
          <input   {...register("email", { required: true })}
            className="mt-2 h-12 px-1  w-full border-2 border-gray-200 border-"
            type="email"
            placeholder=""
          />
          <p className="mt-4">Password *</p>
          <input  {...register("password", { required: true })}
            className="mt-2 px-1  h-12 w-full border-2 border-gray-200 border-"
            type="password"
            placeholder=""
          />
          <div type="submit" className="text-white bg-red-500 mt-4 flex items-center justify-center">
            <button  className="py-4 text-sm uppercase ">Login</button>
          </div>
          <SocialLogin/>
          <div className="flex items-center  gap-3">
            <p className="mt-4">Remember Me</p>
          </div>
          <div>
            <p>Lost your password?</p>
          </div>
        </form>
      </div>
    );
};

export default Login;