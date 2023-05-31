
interface Extras {
  name: string,
  description: string,
  src: string,
  exchangeURL: string
}
export interface Rulebreakers {
  id: number;
  name: string;
  src: string;
  extras: Extras[];
  description: string;
  exchange: string;
}

