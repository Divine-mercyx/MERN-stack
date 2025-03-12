import { useState } from 'react';
import './login.css';
import axios from 'axios';
import {Link} from "react-router-dom";
import img from '../assets/pexels-steve-29450012.jpg'


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/users/login", { email, password });
            localStorage.setItem("token", response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            console.log(response.data);
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    setError("user not found");
                }
                else if (error.response.status === 400) {
                    setError("invalid credentials");
                }
                else {
                    setError("login failed");
                }
            } else {
                setError("internet error");
            }
        }
    }

    const styles = {
        colLg: {
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            position: "relative",
        }
    }
    
    return (
        <div className="login container-fluid">
            <div className='row'>
                <div style={ styles.colLg } className='firstHalf col-lg-6 col-sm-4'>
                    <div className="overlay">
                        <h1 className="display-1 animate__animated animate__wobble text-white-50">
                            Capture,<br />
                            ----- share,<br />
                            inspire<br />
                            your moment<br />
                            & story -----
                        </h1>
                    </div>
                </div>
                <div className='main col-lg-6 col-sm-5'>
                    {error && <div className="alert position-fixed container m-3 alert-danger">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="h"></div>
                        <div className="box">
                            <div className='container'>
                                <br/>
                                <h1 className="text-light">Login</h1>
                                <div className='mb-4'>
                                    <label htmlFor='email' className='text-white-50 mb-2 '>Email</label>
                                    <input
                                        id='email'
                                        type='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className='text-light form-control container'
                                        name='email'
                                        required
                                    />
                                </div>

                                <div className='mb-4'>
                                    <label htmlFor='password' className='text-white-50 mb-2 '>Password</label>
                                    <input
                                        id='password'
                                        type='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className='text-light mb-4 form-control container'
                                        name='password'
                                        required
                                    />

                                    <p className='text-end p'><Link to='/signup' className='text-decoration-none text-white-50'>Dont
                                        have an account? Sign up</Link></p>
                                </div>

                                <div className='mb-4'>
                                    <input type='submit' className='btn btn-dark text-light shadow-lg  container-fluid'
                                           value="Sign in"/>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;