import React ,{useState} from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log("Name:", name);
    console.log("Email:", email);   
  };

  return (
    <div className="signup">
          <h1>Register</h1>
          <input className="inputBox" type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="inputBox" type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="inputBox" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSubmit} className="signupButton" type="submit">Sign Up</button>
    </div>
  );
};

export default SignUp;
