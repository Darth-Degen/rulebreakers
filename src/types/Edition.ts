
export interface Edition {
  id: number;
  name:string;
  description:string;
  image_path:string;
  exchange_art_url: string;
  twitter_url: string;
  isVideo?:boolean;
}
