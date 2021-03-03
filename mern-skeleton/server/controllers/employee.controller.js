import Employee from "../models/employee.model";
import extend from "lodash/extend";
import errorHandler from "./../helpers/dbErrorHandler";

const create = async (req, res) => {
  const employee = new Employee(req.body);
  employee.createdBy = req.profile;

  console.log(req);
  try {
    await employee.save();
    return res.status(200).json({
      message: "Successfully Saved!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const employeesByUserID = async (req, res, next, id) => {
  try {
    let employees = await Employee.find({ created_by: id });
    if (!employees)
      return res.status("400").json({
        error: "employees not found",
      });
    req.profile = employees;
    next();
  } catch (err) {
    return res.status("400").json({
      error: "Could not retrieve employees",
    });
  }
};

const read = (req, res) => {
  return res.json(req.profile);
};

export default {
  create,
  employeesByUserID,
  read,
};
