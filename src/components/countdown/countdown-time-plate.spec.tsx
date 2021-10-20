import { render, cleanup, RenderResult } from "../../test/test-utils";
import CountdownTimePlate from "./countdown-time-plate";

describe("countdown-time-plate component test suite", () => {
  let renderComponent: RenderResult;

  beforeEach(() => {
    renderComponent = render(
      <CountdownTimePlate countTime={15} countText={"hours"} />
    );
  });

  afterEach(() => {
    cleanup();
    renderComponent = null;
  });

  it("renders without crashing", () => {
    expect(renderComponent.baseElement).toBeTruthy();

    const el = renderComponent.getByTestId("countdown-plate-container");
    expect(el).toBeInstanceOf(HTMLElement);
    expect(el).toBeTruthy();
  });
});
