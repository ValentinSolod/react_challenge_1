import LangSwitcher from "./components/lang-switcher/lang-switcher";
import Countdown from "./components/countdown/countdown";
import styled from "styled-components";

const CenteredWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function App(): JSX.Element {
  return (
    <>
      <LangSwitcher />
      <CenteredWrapper>
        <Countdown deadline={"October 19 2022 20:45:59"} includeMonths />
      </CenteredWrapper>
    </>
  );
}
