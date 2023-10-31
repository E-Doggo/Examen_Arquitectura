import { Intent } from "./TryEntity";

export interface IntentGenerationRepo {
  generateKey(generation: Intent);
}
