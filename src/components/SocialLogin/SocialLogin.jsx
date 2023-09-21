import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLoaderData();
    // const from = location?.state?.from?.pathname || "/";
  
    const handleGoogleSignIn = () => {
      googleSignIn().then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          photo: loggedInUser.photoURL,
          role: "student",
        };
        
      });
    };
  

    return (
        <div className="w-full text-center my-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          <FaGoogle/>
        </button>
      </div>
    );
};

export default SocialLogin;