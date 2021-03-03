import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import auth from "./../auth/auth-helper";
import { create } from "./api-employees";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  error: {
    verticalAlign: "middle",
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  submit: {
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
}));

const CreateEmployee = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    age: "",
    salary: "",
    error: "",
    created_by: {},
  });

  useEffect(() => {
    setValues({ ...values, created_by: auth.isAuthenticated().user });
  }, []);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = () => {
    const employee = {
      first_name: values.first_name || undefined,
      last_name: values.last_name || undefined,
      age: values.age || undefined,
      salary: values.salary || undefined,
      created_by: values.created_by || {},
    };

    create(employee, { t: jwt.token }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: "", open: true });
      }
    });
  };

  const jwt = auth.isAuthenticated();

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Create Employee
          </Typography>
          <TextField
            id="first_name"
            label="First Name"
            className={classes.textField}
            value={values.first_name}
            onChange={handleChange("first_name")}
            margin="normal"
          />
          <br />
          <TextField
            id="last_name"
            label="Last Name"
            className={classes.textField}
            value={values.last_name}
            onChange={handleChange("last_name")}
            margin="normal"
          />
          <br />
          <TextField
            id="age"
            label="Age"
            className={classes.textField}
            value={values.age}
            onChange={handleChange("age")}
            margin="normal"
          />
          <TextField
            id="salary"
            label="Salary"
            className={classes.textField}
            value={values.salary}
            onChange={handleChange("salary")}
            margin="normal"
          />
          <br />{" "}
          {values.error && (
            <Typography component="p" color="error">
              <Icon color="error" className={classes.error}>
                error
              </Icon>
              {values.error}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={clickSubmit}
            className={classes.submit}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
      <Dialog open={values.open} disableBackdropClick={true}>
        <DialogTitle>New Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New employee successfully created.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to={"/employees/" + auth.isAuthenticated().user._id}>
            <Button color="primary" autoFocus="autoFocus" variant="contained">
              View List
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateEmployee;
