import { CardI } from "../Domain/CardEntity";
import { CardRepo } from "../Domain/CardRepository";

class CardCharge {
  constructor(private cardRepo: CardRepo) {}

  chargePrice(card: CardI) {
    return this.cardRepo.chargeCard(card);
  }
}

export default CardCharge;
