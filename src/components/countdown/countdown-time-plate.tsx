import styled from "styled-components";
import { useTranslation } from "react-i18next";

type CountdownTimePlateProps = {
  countTime: number;
  countText: string;
};

const CountdownPlate = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const CountdownTime = styled.span`
  font-size: 40px;
  font-family: Poppins-Bold;
`;

const CountdownText = styled.div`
  position: absolute;
  bottom: 5px;
  text-transform: uppercase;
`;

export default function CountdownTimePlate(
  props: CountdownTimePlateProps
): JSX.Element {
  const { countTime, countText } = props;
  const { t } = useTranslation();

  return (
    <CountdownPlate>
      <CountdownTime>{countTime}</CountdownTime>
      <CountdownText>
        {t(`${countText}_interval`, {
          postProcess: "interval",
          count: countTime,
        })}
      </CountdownText>
    </CountdownPlate>
  );
}
