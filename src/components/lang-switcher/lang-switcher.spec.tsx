import {
  render,
  cleanup,
  RenderResult,
  fireEvent,
} from "../../test/test-utils";
import LangSwitcher from "./lang-switcher";

describe("LangSwitcher component test suite", () => {
  let renderComponent: RenderResult = null;

  beforeEach(() => {
    renderComponent = render(<LangSwitcher />);
  });

  afterEach(() => {
    cleanup();
    renderComponent = null;
  });

  it("renders without crashing", () => {
    expect(renderComponent.baseElement).toBeTruthy();

    const el = renderComponent.getByTestId("lang-switcher");
    expect(el).toBeInstanceOf(HTMLElement);
    expect(el).toBeTruthy();
  });

  it("check default language, should be en", () => {
    const message = renderComponent.getByText(/Current language:/i);
    expect(message).toHaveTextContent("Current language: en");
  });

  it("change language from en to ru", () => {
    const swithcBtn = renderComponent.getByRole("button");
    const message = renderComponent.getByText(/Current language:/i);

    expect(message).toHaveTextContent("Current language: en");
    fireEvent.click(swithcBtn);
    expect(message).toHaveTextContent("Current language: ru");
  });
});
