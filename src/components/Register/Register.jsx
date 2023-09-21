import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
      createUser(data?.email, data?.password)
            .then(result => {
                const user = result?.user;
                console.log(user)
                const fullName = `${data.firstName} ${data.lastName}`
                updateUserProfile(fullName)
                .then(result=>{
                  Swal.fire({
                    title: 'User Login Successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                })

                
                // navigate(from, { replace: true });
            })

    
    }
  

    return (
        <div className="w-[45%] ">
            <h3 className="font-semibold text-2xl">Registration</h3>
            <form  onSubmit={handleSubmit(onSubmit)} className="border-2 border-gray-200 p-14 mt-4  ">
              <p className="mt-2">First Name *</p>
              <input  {...register("firstName", { required: true })}
                className="mt-2 px-2 h-12 w-full border-2 border-gray-200 border-"
                type="text"
                placeholder=""
              />
              <p className="mt-4">Last Name *</p>
              <input  {...register("lastName", { required: true })}
                className="mt-2 px-2 h-12 w-full border-2 border-gray-200 border-"
                type="text"
                placeholder=""
              />
              <p className="mt-4">Email Address *</p>
              <input  {...register("email", { required: true })}
                className="mt-2 px-2 h-12 w-full border-2 border-gray-200 border-"
                type="email"
                placeholder=""
              />
               <p className="mt-4">Password *</p>
          <input  {...register("password", { required: true })}
            className="mt-2 px-1  h-12 w-full border-2 border-gray-200 border-"
            type="password"
            placeholder=""
          />
              <div  type="submit" className="text-white bg-red-500 mt-4 flex items-center justify-center">
                <button  className="py-4 text-sm uppercase ">
                  Registration
                </button>
              </div>
              <p className="mt-4">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>
              <div className="flex items-center  gap-3">
                <p className="mt-4">Remember Me</p>
              </div>
            </form>
          </div>
    );
};

export default Register;