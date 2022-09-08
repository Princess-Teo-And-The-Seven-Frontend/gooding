export interface ServiceDataType {
  category: string;
  cycle: string;
  date: string;
  id: number;
  image: string;
  memo: string;
  name: string;
  price: string;
  subscriptionFee: number;
}
export interface ISelectedServiceData {
  id: number;
  name: string;
  category: string;
  subscriptionFee: number;
  image: string;
}
