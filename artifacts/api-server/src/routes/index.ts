import { Router, type IRouter } from "express";
import healthRouter from "./health";
import consultingRouter from "./consulting";

const router: IRouter = Router();

router.use(healthRouter);
router.use(consultingRouter);

export default router;
