export class Order {
    id: number;
    date: string;
    name: string;
    status: string;
    orderTotal: number;
    paymentMode: string;
}

export class ListOfOrders {
    id: number;
    userName: string;
    fullName: string;
    productOrder: string;
    totalOrder: number;
    location: string;
    status: string;
    action: string;
}