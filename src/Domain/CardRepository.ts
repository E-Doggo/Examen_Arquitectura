import { CardI } from "./CardEntity";

export interface CardRepo {
  chargeCard(card: CardI);
}
