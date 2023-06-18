import { useState } from "react";
import { useRef, useEffect } from "react";
import "../asets/login.css";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Service/api";

function Login() {
  const nav = useNavigate();
  const naviagteHook = () => {
    nav(-1);
  };
  const [user, setUser] = useState({
    FirstName: " ",
    LastName: " ",
    email: "",
    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const addDetails = async (e) => {
    e.preventDefault();
    await addUser(user);
  };

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="login-container">
        <div
          className="login-form"
          style={{ marginTop: "0.5%", height: "97vh" }}
        >
          <img src="../images/loginlogo.png" alt="lo" className="login-img" />
          <h3>CREATE ACCOUNT</h3>
          <form onSubmit={handleSubmit}>
            <label
              style={{
                marginRight: "80%",
                paddingBottom: "2%",
                fontSize: "1.2em",
              }}
            >
              First Name
            </label>
            <input
              type="text"
              onChange={handleInputs}
              name="FirstName"
              value={user.FirstName}
              ref={inputRef}
            />
            <label
              style={{
                marginRight: "80%",
                paddingBottom: "2%",
                fontSize: "1.2em",
              }}
            >
              Last Name
            </label>
            <input
              type="text"
              onChange={handleInputs}
              name="LastName"
              value={user.LastName}
            />
            <label
              style={{
                marginRight: "88%",
                paddingBottom: "2%",
                fontSize: "1.2em",
              }}
            >
              E-mail
            </label>
            <input
              type="email"
              onChange={handleInputs}
              name="email"
              value={user.email}
            />
            <label
              style={{
                marginRight: "85%",
                paddingBottom: "2%",
                fontSize: "1.2em",
              }}
            >
              Password
            </label>
            <input
              type="password"
              onChange={handleInputs}
              name="password"
              value={user.password}
            />
            <button
              type="submit"
              style={{ marginTop: "6%" }}
              onClick={(e) => addDetails(e)}
            >
              Create
            </button>
            <img
              src="../images/gobacklogo.png"
              alt="log"
              style={{ width: "50px", marginTop: "-256%", marginLeft: "-290%" }}
              onClick={naviagteHook}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
