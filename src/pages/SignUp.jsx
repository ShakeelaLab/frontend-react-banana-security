import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";

function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await axios.post(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/users`,{
                email:email,
                password:password,
                roles:['user'],
            },{
                headers: {
                    'novi-education-project-id': 'fc3b1d4e-24cf-4767-8ccb-fce51b54f7f8',
                }
            })
            console.log(response);
            setEmail("");
            setPassword("");
            navigate("/signin");
        } catch (e) {
            console.error(e);
        }
    }


  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email-field">Naam:</label>
            <input
                name="email"
                required
                id="email-field"
                type="email"
                placeholder="Vul je emailadres in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label
                htmlFor="password-field">Wachtwoord:</label>
            <input
                name="password"
                required
                id="password-field"
                type="password"
                placeholder="Vul je wachtwoord in"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type="submit"
            >Register</button>
        </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;