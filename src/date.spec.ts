import DateFormatter, { FuzzyResults } from "./date";

const SECOND = 1000;

describe("DateFormatter", () => {
  describe("#getRelativeDate", () => {
    it("when date is in future", () => {
      const formater = new DateFormatter(Date.now() + 10);

      expect(formater.getRelativeDate()).toBe(FuzzyResults.FUTURE_ERROR);
    });

    it("when date is now", () => {
      const formater = new DateFormatter(Date.now());

      expect(formater.getRelativeDate()).toBe(FuzzyResults.NOW);
    });

    it("when date is 2 seconds ago", () => {
      const formater = new DateFormatter(Date.now() - 2 * SECOND);

      expect(formater.getRelativeDate()).toBe(`2 ${FuzzyResults.SECONDS_AGO}`);
    });

    it("when date is 2 minutes ago", () => {
      const formater = new DateFormatter(Date.now() - 60 * SECOND);

      expect(formater.getRelativeDate()).toBe(`1 ${FuzzyResults.MINUTE_AGO}`);
    });

    it("when date is 2 hours ago", () => {
      const twoHours = 2 * 60 * 60 * SECOND;
      const formater = new DateFormatter(Date.now() - twoHours);

      expect(formater.getRelativeDate()).toBe(`2 ${FuzzyResults.HOURS_AGO}`);
    });
  });
});
