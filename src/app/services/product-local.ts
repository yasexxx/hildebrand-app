
export interface ProductHome {
  id:number;
  name: string;
  insert: string;
  type: string;
  price: {
    new:number;
    old: number | boolean;
  },
  url:string;
}

export interface ProductDetail {
  id: number;
  price: number;
  name: string;
  insert: string;
  type: string;
  url: string;
}


export interface ProductContents {
  id:number;
  title:string;
  content:{}[];
}





