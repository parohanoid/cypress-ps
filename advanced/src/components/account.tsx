'use client';

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "@/lib/store";
import { clearUser, setUser } from "@/lib/userSlice";
import logo from '../../public/carved-rock-logo-bug-filled-black.png'
import Image from "next/image";

type User = {
  username: string;
};

export default function Account() {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);

  const handleLogin = async () => {
    setLoginError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: usernameInput, password: passwordInput }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          dispatch(setUser({ username: usernameInput }));
          setShowLoginPopup(false);
          setUsernameInput('')
          setPasswordInput('')
        } else {
          setLoginError('Invalid username or password');
        }
      } else {
        setLoginError('Login failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginError('Login failed. Please try again later.');
    }
  };

  const handleLogout = () => {
    dispatch(clearUser());
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleLogin();
    }
  };

  const handleOpenLoginPopup = () => {
    setShowLoginPopup(true);
  };

  const handleCloseLoginPopup = () => {
    setShowLoginPopup(false);
    setLoginError('');
  };

  return (
    <div className="header-nav--utilities d-flex align-items-center justify-content-end flex-row-reverse flex-row flex-md-row">
      {user && user.username ? (
        <>
          <div className="account d-flex flex-column">
            {user.username} <a href="#" onClick={handleLogout}>Log Out</a>
          </div>
          <div className="image">
            <img
              alt={user.username}
              src="https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/profile-pic.jpg"
            />
          </div>
        </>
      ) : (
        <>
          <button data-testid="login-button" className="btn btn-default" onClick={handleOpenLoginPopup}>
            Login
          </button>

          {showLoginPopup && (
            <div className="login-popup">
              <div className="login-popup-content">
                <span className="login-popup-close" onClick={handleCloseLoginPopup}>×</span>
                <div className="container">
                  <Image src={logo} alt={""} width={125} />
                  <div className="form">
                    <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                      <input
                        type="text"
                        placeholder="Email"
                        value={usernameInput}
                        onChange={(e) => setUsernameInput(e.target.value)}
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                      />
                      <input type="submit" value="Login" />
                      {loginError && <div className="text-danger mb-2">{loginError}</div>}
                    </form>
                    <a href="#">Forgot password?</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      <style jsx>{`
        .login-popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .login-popup-content {
          background-color: white;
          padding: 15px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          position: relative;
          width: 475px;
          text-align: center;
        }

        .login-popup-close {
          position: absolute;
          top: 8px;
          right: 18px;
          font-size: 20px;
          cursor: pointer;
        }

        .container {
          width: 475px;
          margin: 0 auto;
          text-align: center;
        }

        .form {
          width: 60%;
          margin: 40px auto 0 auto;
          text-align: center;
        }

        input[type="text"],
        input[type="password"] {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }

        input[type="submit"] {
          width: 100%;
          background-color: #faa541;
          color: white;
          padding: 14px 20px;
          margin: 8px 0;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        input[type="submit"]:hover {
          background-color: #faa541;
        }

        a {
          display: block;
          text-align: center;
          margin-top: 10px;
          color: #faa541;
        }
      `}</style>
    </div>
  );
}