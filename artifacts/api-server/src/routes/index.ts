import { Router, type IRouter } from "express";
import healthRouter from "./health";
import consultingRouter from "./consulting";
import analyzeRouter from "./analyze";

const router: IRouter = Router();

router.use(healthRouter);
router.use(consultingRouter);
router.use(analyzeRouter);

export default router;
