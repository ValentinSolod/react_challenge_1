import { render, cleanup, RenderResult } from "./test/test-utils";
import App from "./App";

describe("App components test suite", () => {
  let renderComponent: RenderResult;

  beforeEach(() => {
    renderComponent = render(<App />);
  });

  afterEach(() => {
    cleanup();
    renderComponent = null;
  });

  it("renders without crashing", () => {
    expect(renderComponent.baseElement).toBeTruthy();

    const el = renderComponent.getByTestId("app-container");
    expect(el).toBeInstanceOf(HTMLElement);
    expect(el).toBeTruthy();
  });
});
