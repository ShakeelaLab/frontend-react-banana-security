import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {useNavigate, Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import './NavBar.css';

function NavBar() {

    // const dataObject = useContext(AuthContext);
    // console.log(dataObject);
    const {
        isAuth,
        logout,
        user,
    } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>

            <div>
                {isAuth ?
                    <div className="logout-container">
                        <p>{user.email}</p>
                        <button
                            type="button"
                            onClick={logout}
                        >
                            Log uit
                        </button>
                    </div>
                    :
                    <div>
                        <button
                            type="button"
                            onClick={() => navigate('/signin')}
                        >
                            Log in
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/signup')}
                        >
                            Registreren
                        </button>
                    </div>


                }

            </div>
        </nav>
    );
}

export default NavBar;