import React from "react";
import { render, RenderResult } from "../../test/test-utils";
import Countdown from "./countdown";
import { getTimeRemaining } from "../../helpers";
import { DEFAULT_TIME_BASE } from "../../constants";

jest.mock("../../helpers", () => ({
  getTimeRemaining: jest.fn(),
}));

describe("countdown component test suite", () => {
  it("renders without crashing", () => {
    const renderComponent: RenderResult = render(
      <Countdown deadline={"October 19 2022 20:45:59"} includeMonths />
    );
    expect(renderComponent.baseElement).toBeTruthy();

    const el = renderComponent.getByTestId("countdown-container");
    expect(el).toBeInstanceOf(HTMLElement);
    expect(el).toBeTruthy();
  });

  it("renders with months", () => {
    const renderComponent: RenderResult = render(
      <Countdown deadline={"October 19 2022 20:45:59"} includeMonths />
    );

    const months = renderComponent.getByText(/months/i);
    expect(months).toHaveTextContent("months");
  });

  it("renders without months", () => {
    const renderComponent: RenderResult = render(
      <Countdown deadline={"October 19 2022 20:45:59"} />
    );

    const months = renderComponent.queryByText(/months/i);
    expect(months).toBeNull();
  });

  it("should init timer with success and start counting", () => {
    jest.spyOn(React, "useEffect").mockImplementation(React.useLayoutEffect);
    (getTimeRemaining as jest.Mock).mockReturnValue(DEFAULT_TIME_BASE);

    jest.useFakeTimers();

    render(<Countdown deadline={"October 19 2040"} includeMonths />);

    expect(getTimeRemaining).not.toHaveBeenCalled();

    jest.runOnlyPendingTimers();

    expect(getTimeRemaining).toHaveBeenCalled();
  });
});
