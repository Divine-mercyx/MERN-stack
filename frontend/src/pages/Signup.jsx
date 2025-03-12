import { useState } from 'react';
import './login.css';
import axios from 'axios';
import {Link} from "react-router-dom";
import img from '../assets/pexels-steve-29450012.jpg'



const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:5000/api/users/signup", { username, email, password, image });
            // console.log(response);
        } catch(error) {
            setError(
                error.response?.data?.message || "Failed to create account. Please try again."
            );
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
                            Capture,<br/>
                            ----- share,<br/>
                            inspire<br/>
                            your moment<br/>
                            & story -----
                        </h1>
                    </div>
                </div>
                <div className='main col-lg-6'>
                    {error && <div className="alert position-fixed container m-3 alert-danger">{error}</div>}
                    <div className="h"></div>
                    <form onSubmit={handleSubmit}>
                        <div className="box">
                            <div className='container'>
                            <br/>
                                <h1 className="text-light">Signup</h1>
                                <div className='mb-4'>
                                    <label htmlFor='username' className='text-white-50 mb-2 '>Username</label>
                                    <input
                                        id='username'
                                        type='text'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className='text-light form-control container'
                                        name='username'
                                        required
                                    />
                                </div>

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
                                    <label htmlFor='picture' className='text-white-50 mb-2 '>Image url:</label>
                                    <input
                                        id='picture'
                                        type='text'
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                        className='text-light form-control container'
                                        name='picture'
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

                                    <p className='text-end p'><Link to='/login' className='text-decoration-none text-white-50'>
                                        have an account? Sign in</Link></p>
                                </div>

                                <div className='mb-4'>
                                    <input type='submit' className='btn text-light btn-dark container-fluid'
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

export default Signup;