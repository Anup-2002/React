import './login.css'
export function Login() {
    return (
        
       <div className='login-container '>
        <button className='btn btn-warning' data-bs-toggle="alert" data-bs-target="#form1">login form open</button>
<form className='form-container alert alert-dismissible alert-warning' id='form1'>
    
<h3 className='bi bi-person-circle'> User Login</h3>
<button data-bs-dismiss="alert" className='btn btn-close'></button>
<dl>

<dt>User Name</dt>
<dd><input type="text" className='form-control' /></dd>
<dt>Password</dt>
<dd><input type="password" className='form-control' /></dd>
</dl>
<button className='btn btn-warning w-100'>Login</button>
</form>
</div>
    )
}

