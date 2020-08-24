
export interface ProductLocalHome {
  id:number;
  name: string;
  type: string;
  price: {
    new:number;
    old: number | boolean;
  },
  src:string;
}

export interface ProductLocalNewHome {
  id?:number;
  name?: string;
  url?: string;
}

export interface ProductDetail {
  id?: number;
  price?: number;
  name?: string;
  url?: string;
}


export interface ProductContents {
  id?:number;
  title?:string;
  content?:{}[];
}





