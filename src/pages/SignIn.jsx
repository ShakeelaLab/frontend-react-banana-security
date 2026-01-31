import {useContext, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import axios from "axios";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await axios.post(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/login`,{
                email:email,
                password: password,
            },{
                headers: {
                    'novi-education-project-id': 'fc3b1d4e-24cf-4767-8ccb-fce51b54f7f8',
                }
            })
            console.log(response);
            login(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Vul je emailadres en wachtwoord in om in te loggen:</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email-field">Naam:</label>
                <input
                    name="email"
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
                    id="password-field"
                    type="password"
                    placeholder="Vul je wachtwoord in"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                >Inloggen</button>
            </form>

            <p>Heb je nog geen account? <Link
                to="/signup">Registreer</Link> je dan eerst.
            </p>
        </>
    );
}

export default SignIn;