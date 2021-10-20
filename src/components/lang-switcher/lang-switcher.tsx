import styled from "styled-components";
import { useTranslation } from "react-i18next";

const LangSwitcherContainer = styled.div``;

const SwitchButton = styled.button``;

export default function LangSwitcher(): JSX.Element {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const handleLanguage = () => {
    if (language === "en") {
      return i18n.changeLanguage("ru");
    }
    return i18n.changeLanguage("en");
  };

  return (
    <LangSwitcherContainer data-testid={"lang-switcher"}>
      <SwitchButton onClick={handleLanguage}>
        Current language: {language}
      </SwitchButton>
    </LangSwitcherContainer>
  );
}
