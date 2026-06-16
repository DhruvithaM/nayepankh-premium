import "./Login.css";

import { useState }
from "react";

import {
  useNavigate
} from "react-router-dom";

function Login() {

  const navigate =
    useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      username === "admin" &&
      password === "admin123"
    ) {

      navigate("/admin");

    }

    else {

      alert("Invalid Credentials");

    }

  };

  return (

    <section className="login">

      <form
        className="login-card"

        onSubmit={handleLogin}
      >

        <h1>Admin Login</h1>

        <input
          type="text"
          placeholder="Username"

          value={username}

          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"

          value={password}

          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Login
        </button>

      </form>

    </section>
  );
}

export default Login;