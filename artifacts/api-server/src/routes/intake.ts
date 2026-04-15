import { Router, type IRouter } from "express";
import { sendIntakeEmail } from "../lib/postmark";

const router: IRouter = Router();

router.post("/intake", async (req, res) => {
  const { name, email, packageType, workflows, tools, teamSize, goals, extra } = req.body;

  if (!email) {
    res.status(400).json({ error: "email is required" });
    return;
  }

  try {
    await sendIntakeEmail({ name, email, packageType, workflows, tools, teamSize, goals, extra });
    res.json({ ok: true });
  } catch (err: any) {
    req.log.error({ err }, "Failed to send intake email");
    res.status(500).json({ error: "Failed to send intake email" });
  }
});

export default router;
