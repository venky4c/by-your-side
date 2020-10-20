import React from "react";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Controller, useForm } from "react-hook-form";
import LandingPage from "../../containers/landingpage/index.js";
import SignUp from "../../containers/signup/index";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
}));

function Login() {
  const history = useHistory();
  const { register, handleSubmit, control, errors } = useForm();

  const classes = useStyles();
  const onSubmit = (data) => {
    console.log(data);
    history.push("/landingPage");
  };
  return (
    <div>
      <Switch>
        <Route path="/landingPage" exact component={LandingPage}></Route>
        <Route path="/signup" component={SignUp}></Route>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          {/* <h5>Sign in</h5> */}
          <p>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" ref={register({ required: true })} />
          </p>
          {errors.name && <p>Name is required</p>}
          <Controller
            as={<TextField />}
            type="email"
            label="Email"
            fullWidth
            variant="outlined"
            defaultValue=""
            name="email"
            control={control}
            ref={register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {/* <p>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              ref={register({
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
          </p> */}
          {errors.email && <p>A valid email is required</p>}

          <p>
            <label htmlFor="checkbox"></label>
            <input type="checkbox" id="checkbox" />
          </p>
          <input type="submit" value="Login" />

          <Link to="#">Forgot password?</Link>

          <Link to="/signup">{`Don't have an account? Sign up`}</Link>
        </form>
      </Switch>
    </div>
  );
}

export default Login;
