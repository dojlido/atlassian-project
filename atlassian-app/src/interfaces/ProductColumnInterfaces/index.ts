export interface AllAtlasProductsClients {
  id: number;
  name: string;
  dateOfBirth: string;
  address: { street: string; city: string; zipCode: string; country: string };
  phone: string;
  username: string;
  email: string;
  avatar: string;
  job: { title: string; company: string };
  quote: string;
  productName: string;
}
