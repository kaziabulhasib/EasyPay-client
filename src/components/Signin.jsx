import { Link } from "react-router-dom";

const Signin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
        <form onSubmit={handleLogin} className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              placeholder='Email or Mobile No.'
              name='email'
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

          <div className='form-control mt-6'>
            <button className='btn btn-primary font-medium text-white text-xl tracking-widest'>
              Sign In
            </button>
          </div>
        </form>
        <p className='text-center py-4'>
          New user ?{" "}
          <Link to='/register'>
            {" "}
            <span className='underline text-blue-600 cursor-pointer'>
              Register{" "}
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
