import React, { useContext } from 'react';
import { AuthContext } from './Providers/AuthProvider';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password).then(result => {
            console.log(result.user)
            //New User has been created
            const createdAt = result.user?.metadata?.creationTime;
            const user = { email, createdAt: createdAt };
            fetch('https://coffee-store-server-hlh4wyzk3-rahid-amins-projects.vercel.app/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then(res => res.json()).then(data => {
                console.log(data)
            }
            )
        }).catch(error => console.error(error));
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">
                                signUp
                            </button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp