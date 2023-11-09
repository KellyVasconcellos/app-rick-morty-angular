import { Info } from "./info";
import { Results } from "./results";

export interface Location {
  info: Info
  results: Array<Results>
}
