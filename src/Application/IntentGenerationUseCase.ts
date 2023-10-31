import { IntentGenerationRepo } from "../Domain/IntentGenerationRepo";
import { Intent } from "../Domain/TryEntity";

class GenerationUseCase {
  constructor(private intentRepo: IntentGenerationRepo) {}

  obtainKey(intent: Intent) {
    return this.intentRepo.generateKey(intent);
  }
}

export default GenerationUseCase;
