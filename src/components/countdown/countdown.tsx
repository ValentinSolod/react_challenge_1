import { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { DEFAULT_TIME_BASE } from "../../constants";
import { getTimeRemaining } from "../../helpers";
import CountdownTimePlate from "./countdown-time-plate";

type CountdownProps = {
  deadline: string;
  includeMonths?: boolean;
};

const CountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CountdownPlateWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  gap: 10px;
`;

const EndTitle = styled.span`
  font-size: 20px;
  text-transform: uppercase;
  align-self: flex-start;
  margin-bottom: 10px;
`;

export default function Countdown(props: CountdownProps): JSX.Element {
  const { deadline, includeMonths = false } = props;
  const { t } = useTranslation();
  const [timeRemainingState, setTimeRemaining] =
    useState<{ [time: string]: number }>(DEFAULT_TIME_BASE);

  useEffect(() => {
    const timer = setInterval(() => {
      const timeRemaining = getTimeRemaining(deadline, includeMonths);
      if (timeRemaining.seconds >= 0) {
        setTimeRemaining(timeRemaining);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline, includeMonths]);

  return (
    <CountdownContainer data-testid={"countdown-container"}>
      <EndTitle>{t("starts-in")}</EndTitle>
      <CountdownPlateWrapper>
        {Object.keys(timeRemainingState).map((key) => {
          if (!includeMonths && key === "months") return;
          return (
            <CountdownTimePlate
              key={key}
              countTime={timeRemainingState[key]}
              countText={key}
            />
          );
        })}
      </CountdownPlateWrapper>
    </CountdownContainer>
  );
}
