import { ipcRenderer } from 'electron';
import React from 'react'
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends React.Component<any, any> {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            isLogging: false,
            error: "",
            isError: false,
            disabled: false
        }
        
        
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUsername(e) {
        if (e.target.value === '') {
            this.setState({isError: true, error: "Username harus diisi"});
            
        } else {
            this.setState({isError: false});

            this.setState({username: e.target.value})
        }
    }

    handlePassword(e) {
        if (e.target.value === '') {
            this.setState({isError: true, error: "Password harus diisi"});
        } else {
            this.setState({isError: false});

            this.setState({password: e.target.value})
        }
    }

    handleSubmit(e) {
        const username = this.state.username;
        const password = this.state.password;

        ipcRenderer.invoke("login", username, password).then((result) => {
            console.log(result.response)
            this.setState({'disabled': true});
            if (result.response === true) {
                sessionStorage.setItem("user", result.data[0].id_user);
                sessionStorage.setItem("username", result.data[0].username);
                sessionStorage.setItem("nama", result.data[0].nama);

                this.setState({isLogging: true});

            } else {
                this.setState({isError: true, error: "Username atau Password salah"});
                setTimeout(() => {
                    if (this.state.isError) {
                        toast(this.state.error)
                        this.setState({'disabled': false});

                    }
                }, 1000)
                

            }
        })
        
        
    }

    render() {
        let alert_error:any;
        const error = this.state.isError



        if (this.state.isLogging) {
            return <Navigate to="/dashboard" replace={true} />
        }

        return (
            
            <div className="login-box">
                <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        />
            <div className="login-logo text-center mb-3">
                <img src="assets/img/logo-login.png" alt=""/>
            </div>
            <div className="card card-custom-dark">
                <div className="card-body">
                    <div className="title-report text-center">
                        <h4>Login</h4>
                    </div>
                    
                    <div className="pl-20 pr-20">
                    
                        <div className="">
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control custom-input" onChange={this.handleUsername} id="username"/>
                            </div>
                            <div className="form-group mt-2">
                                <label>Password</label>
                                <input type="password" className="form-control custom-input" onChange={this.handlePassword} id="password"/>
                            </div>
    
                        </div>
                        <div className="d-grid mt-3">
                            <button id="login"
                                className="btn btn-primary btn-primary-cozy d-block" onClick={this.handleSubmit} disabled={this.state.disabled}
                                >Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Login