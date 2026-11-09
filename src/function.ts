import { customers, bookings } from "./data";
const PRICE_PER_PROPERTY = 5;
const PRICE_PER_WINDOW = 1;
export function totalWindowsOnDate(date: string): number {
    const onDate = bookings.filter(b => b.date.toISOString().slice(0, 10) === date);
    let total = 0;
    for (const b of onDate) {
        const customer = customers.find(c => c.customerNumber === b.customerNumber);
        if (customer) {
            total += customer.windows;
        }
    }
    return total;
}
export function costForBooking(bookingNumber: number): number {
    const booking = bookings.find(b => b.bookingNumber === bookingNumber);
    if (!booking) {
        return 0;
    }
    const customer = customers.find(c => c.customerNumber === booking.customerNumber);
    if (!customer) {
        return 0;
    }
    return PRICE_PER_PROPERTY + customer.windows * PRICE_PER_WINDOW;
}