import { AddToDrive, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { color } from "../../theme";
import "./SignUp.scss";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../App";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const { signupUser, verifyEmailAddress, currentUser } =
    useContext(AuthContext);
  const { mode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowConfirmPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    if (password !== confirmPassword) {
      return setError("password do not match");
    }

    try {
      setError("");
      setLoading(true);
      signupUser(email, password);

      navigate("/login");
    } catch {
      setError("Failed to sign in user, check credentials");
      setLoading(false);
    }
  };

  console.log(currentUser, "currentuser");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        minHeight: "100vh",
        backgroundImage:
          mode === "dark"
            ? 'url("/images/bubble-dark.webp")'
            : 'url("/images/bubble.webp")',
        color: mode === "dark" ? "text.color" : "inherit",
      }}
    >
      <div className="hbs-logo">
        <img src="/images/hbs-logo.png" alt="Hbs Drive" />
      </div>
      <form className={`form ${mode}`} onSubmit={handleSubmit}>
        <p className="form-header">Sign up for new account</p>
        <p className="error">{error}</p>
        <p className="success">{msg}</p>
        <div className="form-input">
          <TextField
            sx={{ width: "100%" }}
            label={"Email"}
            type={"email"}
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-input">
          <FormControl sx={{ width: "100%" }} variant="outlined" required>
            <InputLabel htmlFor="signup-password">Password</InputLabel>
            <OutlinedInput
              id="signup-password"
              required
              placeholder="password must be atleast 6 character"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>

        <div className="form-input">
          <FormControl sx={{ width: "100%" }} variant="outlined" required>
            <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
            <OutlinedInput
              id="confirm-password"
              required
              placeholder="password must be atleast 6 character"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
            />
          </FormControl>
        </div>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "50%" }}
            disabled={loading}
            disableElevation={loading}
          >
            Sign Up
          </Button>
        </Box>
      </form>
      <div className={`account ${mode}`}>
        <Link to="/forgot-password">Forgot Password</Link>
      </div>
      <div className={`account ${mode}`}>
        <p>Already have an account ?</p>
        <Link to="/login">Log in</Link>
      </div>
    </Box>
  );
};

export default SignUp;
