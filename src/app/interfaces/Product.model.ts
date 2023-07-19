import { ProviderDTO } from "./Provider.model";

export interface ProductDTO {
  id: number;
  name: string;
  description: string;
  price: number;
  provider: ProviderDTO;
  image: string;
}
