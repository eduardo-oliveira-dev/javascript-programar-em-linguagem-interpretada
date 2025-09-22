import './Login.css'
const Login = () => {

    return (
        <div className="login-page">
            <div className="login-container ">
                <div className="left-container">
                    <h1>Sign In to Developer</h1>
                    <div className="login-form">
                        <div className="icons-container">
                            <div className="icon-item">
                                <i className="fab fa-google"></i>
                                <span>Google</span>
                            </div>
                            <div className="icon-item">
                                <i className="fab fa-linkedin"></i>
                                <span>LinkedIn</span>
                            </div>
                            <div className="icon-item">
                                <i className="fab fa-github"></i>
                                <span>Github</span>
                            </div>
                        </div>
                        <h5>Or use your email account:</h5>
                        <form>
                            <div className="form-group">
                                <input type="text" id="userEmail" name="userEmail" required placeholder="User Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" id="password" name="password" required placeholder="Password" />
                            </div>
                            <button className="submit-button" type="submit">Login</button>
                        </form>
                    </div>
                </div>
                <div className="right-container">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button onClick={() => window.location.href = '/register'}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Login;