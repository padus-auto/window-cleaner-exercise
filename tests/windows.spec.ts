   import { test, expect } from "@playwright/test";
   import { totalWindowsOnDate, costForBooking } from "../src/function";

   test("total windows on 2025-10-01", () => {
     expect(totalWindowsOnDate("2025-10-01")).toBe(26);
   });
      test("cost of booking 3", () => {
     expect(costForBooking(3)).toBe(15);
   });
   test("cost of booking 2", () => {
	 expect(costForBooking(2)).toBe(10);
   });
   test("cost of booking 4", () => {
	 expect(costForBooking(4)).toBe(17);
   });
   test("cost of booking 1", () => {
	 expect(costForBooking(1)).toBe(9);
   });
   test("cost of booking 5", () => {
	 expect(costForBooking(5)).toBe(0);
   });
   
