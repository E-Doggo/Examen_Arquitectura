import CardCharge from "../Application/CardChargeUseCase";
import { CardPaymentCredit } from "../Infrastructure/CardPaymentRepoLogic";
import IntentGeneration from "../Infrastructure/IntentGenerationRepoLogi";
import PaymentController from "../Infrastructure/PaymentController";
import express from "express";

const repository = new IntentGeneration();

const paymentoRepository = new CardPaymentCredit();
const getIntentController = new PaymentController(
  repository,
  paymentoRepository
);

const intentRouter = express.Router();

intentRouter.post(
  "/",
  async (req, res) => await getIntentController.getIntent(req, res)
);

export default intentRouter;
