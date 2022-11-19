import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Style.css";
import { height } from "@mui/system";

// Register form
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleClose();
  };

  return (
    <section>
      <article id="registerPage">
        <div>
          <img
            src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=900&t=st=1668793840~exp=1668794440~hmac=c474b0c18f5388fdb5ba662e51a71f8930fe5df0a423dfca7e7c2123aa37871c"
            className="imgSign"
          />
        </div>
        <div id="form-grp">
          <form className={classes.root} onSubmit={handleSubmit}>
            <h1>Register</h1>
            <TextField
              label="First Name"
              type="tel"
              variant="filled"
              required
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <TextField
              label="Last Name"
              variant="filled"
              required
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <TextField
              label="Phone"
              variant="filled"
              required
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            <TextField
              label="Email"
              variant="filled"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              variant="filled"
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <div>
              {/* <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button> */}
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#ff745c", width: "300px" }}
              >
                Register
              </Button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Form;
