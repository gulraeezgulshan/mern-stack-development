import express from "express";
import empCtrl from "../controllers/employee.controller";
import authCtrl from "../controllers/auth.controller";

const router = express.Router();

router.route("/api/employees").post(empCtrl.create);

router
  .route("/api/employees/:userId")
  .get(authCtrl.requireSignin, empCtrl.read);

router.param("userId", empCtrl.employeesByUserID);

export default router;
