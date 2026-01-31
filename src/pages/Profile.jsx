import React, {
    useContext,
    useEffect,
    useState
} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import axios from "axios";
import {jwtDecode} from 'jwt-decode';

function Profile() {
    const jwtToken = localStorage.getItem('token');
    const decoded = jwtDecode(jwtToken);

    const [profile, setProfile] = useState([]);
    const currentUser = profile.find((pro) => pro.email === decoded.email);
    const {user} = useContext(AuthContext);

    const token = localStorage.getItem('token');
    console.log(token);

    useEffect(() => {
        async function getProfileData(){

            try {
                const response = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/users`,{
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                })

                setProfile(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        }

       void getProfileData()
    }, []);

    console.log(decoded);
    console.log(currentUser);



  return (
    <>
      <h1>Profielpagina</h1>
      <section>
        <h2>Gegevens</h2>

{/*          <br/>*/}
{/*          <p>dit is uit api:</p>*/}
{/*          <br/>*/}
{/*          {profile.map((pro) => (*/}
{/*              <p key={pro.id}>{pro.id} – {pro.email}</p>*/}
{/*          ))}*/}
{/*          <br/>*/}
{/*<p>dit is van decoded:</p>*/}
{/*          <br/>*/}
{/*          {Object.entries(decoded).map(([key, value]) => ( <p key={key}>{key}: {value}</p> ))}*/}

{/*          dit was een lastige en kan dit op een andere makkelijke manier?*/}

          {/*hoe haal ik email: userDetails.user.email, op uit login en hier laten zien ? uit AuthContext.jsx*/}

{/*          https://novi-backend-api-wgsgz.ondigitalocean.app/api/secrets kon ik niet gebruiken omdat het een foutcode geeft*/}
{/*          als ik in de api op try out en execute klik dan krijg ik deze melding: */}
{/*          Error: response status is 403*/}

        <p><strong>Gebruikersnaam:</strong></p>
          {currentUser && <p><strong>Email: </strong>{currentUser.email}</p>}

          {/*<p><strong>Email: </strong>{user.email}</p>*/}
      </section>
      <section>
        <h2>Strikt geheime profiel-content</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
      </section>
      <p>Terug naar de <Link to="/">Homepagina</Link></p>
    </>
  );
}

export default Profile;