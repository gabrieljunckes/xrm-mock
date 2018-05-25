import { CalendarMock, ICalendarComponents } from "../../src/xrm-mock";

describe("Xrm.Calendar", () => {
  beforeEach(() => {
    this.calendar = new CalendarMock({
      AlgorithmType: 5,
      CalendarType: 4,
      Eras: [1, 2],
      IsReadOnly: false,
      MaxSupportedDateTime: new Date(),
      MinSupportedDateTime: new Date(),
      TwoDigitYearMax: 2,
    });
  });

  it("should exist", () => {
    expect(this.calendar).toBeDefined();
  });
});
