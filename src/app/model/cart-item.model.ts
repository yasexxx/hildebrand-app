export interface CartModel {
    user: string;
    attributes: {
      cart: [
        {
          cartId: number,
          product: string,
          price: number,
          quantity: number
        }
      ],
      totalAmount: number
    }
  }
