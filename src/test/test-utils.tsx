import { render as rtlRender } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18next from "../i18n/config";

function render(ui, { ...options } = {}) {
  const Wrapper = ({ children }) => (
    <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
  );

  //@ts-ignore
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from "@testing-library/react";

export { render };
