import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
const Registration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const pin = form.pin.value;
    const mobile = form.mobile.value;
    const email = form.email.value;

    if (!/^\d+$/.test(pin)) {
      // toast.error("PIN must be a number");
      alert("PIN must be a number");
      return;
    }

    if (pin.length !== 5) {
      // toast.error("PIN must be exactly 5 digits");
      alert("PIN must be exactly 5 digits");
      return;
    }

    const user = { name, pin, mobile, email };

    axios.post("http://localhost:5000/users", user).then((response) => {
      console.log(response.data);
      if (response.data.insertedId) {
        toast.success("User Created Successfully");
        alert("User Created Successfully");
        form.reset();
      }
    });
  };
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
        <form onSubmit={handleSubmit} className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              placeholder='Name'
              name='name'
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>PIN</span>
            </label>
            <input
              placeholder='PIN'
              name='pin'
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Mobile No.</span>
            </label>
            <input
              type='text'
              placeholder='Mobile No.'
              name='mobile'
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              placeholder='Email'
              name='email'
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control mt-6'>
            <button className='btn btn-primary font-medium text-white text-xl tracking-widest'>
              Register
            </button>
          </div>
        </form>
        <p className='text-center py-4'>
          Existing user ?{" "}
          <Link to='/sigin'>
            {" "}
            <span className='underline text-blue-600 cursor-pointer'>
              Sign in{" "}
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
