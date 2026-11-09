export interface Customer {
    customerNumber: number;
    name: string;
    windows: number;
}

export interface Booking {
    bookingNumber: number;
    customerNumber: number;
    date: Date;
}