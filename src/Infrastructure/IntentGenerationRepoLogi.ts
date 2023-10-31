import { IntentGenerationRepo } from "../Domain/IntentGenerationRepo";
import { Intent } from "../Domain/TryEntity";

class IntentGeneration implements IntentGenerationRepo {
  generateKey(generation: Intent) {
    const min = Math.pow(10, 9); // 10^9
    const max = Math.pow(10, 10) - 1; // 10^10 - 1
    const key = Math.floor(Math.random() * (max - min + 1)) + min;
    return { key: key.toString() };
  }
}

export default IntentGeneration;
