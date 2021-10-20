import { getTimeRemaining } from "./index";

describe("test getTimeRemaining function", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2020, 3, 1));
  });

  it("Should return values with months", () => {
    const result = getTimeRemaining("October 19 2022 20:45:59", true);

    expect(result).toEqual({
      months: 33,
      days: 0,
      hours: 20,
      minutes: 45,
      seconds: 59,
    });
  });

  it("Should return values without months", () => {
    const result = getTimeRemaining("October 19 2022 20:45:59", false);

    expect(result).toEqual({
      months: 33,
      days: 932,
      hours: 20,
      minutes: 45,
      seconds: 59,
    });
  });
});
