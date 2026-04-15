import { Router, type IRouter } from "express";
import healthRouter from "./health";
import consultingRouter from "./consulting";
import analyzeRouter from "./analyze";
import intakeRouter from "./intake";

const router: IRouter = Router();

router.use(healthRouter);
router.use(consultingRouter);
router.use(analyzeRouter);
router.use(intakeRouter);

export default router;
