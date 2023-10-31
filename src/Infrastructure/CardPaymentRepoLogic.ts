import { CardI } from "../Domain/CardEntity";
import { CardRepo } from "../Domain/CardRepository";

class CardPaymentDebit implements CardRepo {
  chargeCard(card: CardI) {
    return "Payment with Debit Card Succesfull";
  }
}

class CardPaymentCredit implements CardRepo {
  chargeCard(card: CardI) {
    return "Payment with Credit Card Succesfull";
  }
}

export { CardPaymentCredit, CardPaymentDebit };
