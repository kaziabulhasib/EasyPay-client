import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Signin = () => {
  const [identifier, setIdentifier] = useState("");
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        identifier,
        pin,
      });

      if (response.data) {
        toast.success("Logged in successfully");
        alert("sign in successfull");

        navigate("/dashboard");
      }
    } catch (error) {
      //   toast.error(error.response?.data?.message || "Login failed");
      alert("login failed");
      console.log(error);
    }
  };

  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
        <form onSubmit={handleSubmit} className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email or Mobile</span>
            </label>
            <input
              type='text'
              placeholder='Email or Mobile No.'
              name='identifier'
              className='input input-bordered'
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>PIN</span>
            </label>
            <input
              type='password'
              placeholder='PIN'
              name='pin'
              className='input input-bordered'
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            />
          </div>

          <div className='form-control mt-6'>
            <button className='btn btn-primary font-medium text-white text-xl tracking-widest'>
              Sign In
            </button>
          </div>
        </form>
        <p className='text-center py-4'>
          New user?{" "}
          <Link
            to='/register'
            className='underline text-blue-600 cursor-pointer'>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
