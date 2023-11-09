import { Info } from "./info";
import { Results } from "./results";

export interface Episode {
  info: Info
  results: Array<Results>
}
