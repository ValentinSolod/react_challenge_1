import styled from "styled-components";
import { useTranslation } from "react-i18next";

const LangSwitcherContainer = styled.div``;

const SwitchButton = styled.button``;

export default function LangSwitcher(): JSX.Element {
  const { i18n } = useTranslation();

  return (
    <LangSwitcherContainer>
      <SwitchButton onClick={() => i18n.changeLanguage("en")}>EN</SwitchButton>
      <SwitchButton onClick={() => i18n.changeLanguage("ru")}>RU</SwitchButton>
    </LangSwitcherContainer>
  );
}
