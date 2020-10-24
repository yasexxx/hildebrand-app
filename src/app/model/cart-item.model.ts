export interface CartItem {
    id:string;
    user: string;
    attributes: {
        cart: [{
            cartId: number;
            product: string;
            price: string;
            quantity: number;
        }],
        totalAmount: number
    }
}