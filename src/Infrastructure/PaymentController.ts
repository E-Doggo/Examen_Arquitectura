import CardCharge from "../Application/CardChargeUseCase";
import GenerationUseCase from "../Application/IntentGenerationUseCase";
import { CardRepo } from "../Domain/CardRepository";
import { IntentGenerationRepo } from "../Domain/IntentGenerationRepo";
import { Request, Response } from "express";

class PaymentController {
  private intentGeneration: GenerationUseCase;
  private paymentUseCase: CardCharge;
  constructor(intentRepo: IntentGenerationRepo, paymentRepo: CardRepo) {
    this.intentGeneration = new GenerationUseCase(intentRepo);
    this.paymentUseCase = new CardCharge(paymentRepo);
  }

  async getIntent(req: Request, res: Response): Promise<void> {
    try {
      const { localToken, productCode, amount } = req.body;
      const intentInfo = { localToken, productCode, amount };
      const plan = this.intentGeneration.obtainKey(intentInfo);
      res.status(200).json(plan);
    } catch (error) {
      console.error("Error fetching assignments:", error);
      res.status(500).json({ error: "Server error" });
    }
  }

  async payment(req: Request, res: Response): Promise<void> {
    try {
      const { ccv, expiration_date, savings } = req.body;
      const cardInfo = { ccv, expiration_date, savings };
      const plan = this.paymentUseCase.chargePrice(cardInfo);
      res.status(200).json(plan);
    } catch (error) {
      console.error("Error fetching assignments:", error);
      res.status(500).json({ error: "Server error" });
    }
  }
}

export default PaymentController;
