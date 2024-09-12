import React from "react";

const Register = ({onRouteChange}) => {
    return (
        <article className="br3 ba bg-white o-80 b--black-10 mv4 w-100 w-100-m w-25-l  mw6 shadow-5 pa3 center">
            <main className="pa4">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" for="name">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue o-80 hover-black w-100" type="text" name="name"  id="name"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue o-80 hover-black w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" for="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-lightest-blue o-80 hover-black w-100" type="password" name="password"  id="password"/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input onClick={() => onRouteChange("home")} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                    </div>
                    <div className="lh-copy mt3">
                    <a href="#0" className="f6 link dim black db">Register</a>
                    </div>
                </form>
            </main>
        </article>
    );
}


export default Register;