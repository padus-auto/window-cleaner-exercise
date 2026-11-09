import { Customer, Booking } from "./type";

export const customers: Customer[] = [
    {customerNumber: 1, name: "John", windows: 10},
    {customerNumber: 2, name: "Paul", windows: 5},
    {customerNumber: 3, name: "Ringo", windows: 12},
    {customerNumber: 4, name: "George", windows: 4},
];

export const bookings: Booking[] = [
    {bookingNumber: 1, customerNumber: 4, date: new Date("2025-10-01")},
    {bookingNumber: 2, customerNumber: 2, date: new Date("2026-01-10")},
    {bookingNumber: 3, customerNumber: 1, date: new Date("2025-10-01")},
    {bookingNumber: 4, customerNumber: 3, date: new Date("2025-10-01")},
];