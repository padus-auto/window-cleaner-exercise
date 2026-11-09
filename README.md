# Window Cleaner Exercise

Coding Exercise – Part 1 (GD&D Programming & Build – Practitioner)

## What it does

This project stores customer details and their bookings for a window cleaning business. It also calculates the total number of windows to be cleaned on a given date and the cost for a particular booking.

## Features

**Feature 1 – Calculate total windows**

Takes a date as input and calculates the total number of windows for all bookings on that date. It returns the total number of windows.

**Feature 2 – Calculate booking cost**

Takes a booking number and calculates the cost for that booking.

The pricing is:
- £5 per property.
- £1 for each window.

For example, booking number 2 belongs to Paul, who has 5 windows. The total cost is £10.

## Project Structure

```text
window-cleaner-exercise/
│
├── src/
│   ├── data.ts
│   ├── function.ts
│   └── type.ts
│
├── tests/
│   └── windows.spec.ts
│
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

## How to Run

Install the dependencies:

```bash
npm install
```

Run the tests:

```bash
npm test
```

## Design Choices

### 1. Programming Language – TypeScript

I chose TypeScript because it allows me to define the structure of customer and booking data. It also helps identify type-related mistakes while writing the code and makes the code easier to maintain.

### 2. In-memory Storage

The customer and booking details are stored in memory, as requested in the exercise. There is no database, and the data is not saved permanently.

### 3. Data Modelling

I have kept the customer and booking data separately in `data.ts`, using arrays of objects.

Customer details include the customer number, name and number of windows.

Booking details include the booking number, customer number and booking date.

The types for both are defined in `type.ts`.

Each booking stores a `customerNumber`, which is used to find the customer in the customers array. The window count is taken from the customer record.

For example, booking 1 has customer number 4. This belongs to George, who has 4 windows.

This means a customer can have more than one booking without repeating their details each time.

### 4. Functions and Pricing

The calculation functions are kept in `function.ts`.

The booking cost is calculated using £5 per property and £1 per window. I have used named constants for these amounts so they can be changed easily if the pricing changes.

### 5. Date Handling

The booking dates are stored as `Date` objects. When checking a date, the function converts the booking date into `YYYY-MM-DD` format using `toISOString().slice(0, 10)`.

I used this approach because comparing two Date objects with `===` checks whether they are the same object, rather than whether they contain the same date.

The function takes the date to search for as a string.

### 6. Missing Records

If the booking or customer cannot be found, the function returns `0`.

I chose this so the function returns a number instead of stopping with an error. Another option would have been to throw an error when a record is missing.

### 7. Testing – Playwright Test

I used Playwright Test to run the tests for my TypeScript functions. It is only being used as a test runner; no browser is opened.

The tests check whether the functions return the expected results.

For example, `costForBooking(2)` should return `10`, as booking 2 belongs to a customer with 5 windows (£5 + £5).

