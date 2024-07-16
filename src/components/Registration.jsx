const Registration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const pin = form.pin.value;
    const mobile = form.mobile.value;
    const email = form.email.value;
    const user = { name, pin, mobile, email };
    console.log(user);
    form.reset();
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
            <button className='btn btn-primary'>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
