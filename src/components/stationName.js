import styled, { keyframes } from "styled-components";
import Arrow from "./Arrow";

export default function StationName({
  korean,
  english,
  chineseJapanese,
  delay,
  doorType,
  ascendTrsf,
  descendTrsf,
}) {
  return (
    <Bg>
      {ascendTrsf && (
        <ArrowUpBg delay={delay}>
          <Arrow dir="asc" line={ascendTrsf} />
        </ArrowUpBg>
      )}
      <StaNameBg>
        <Korean>{korean}</Korean>
        <OtherLanguage>{english}</OtherLanguage>
        <OtherLanguage>{chineseJapanese}</OtherLanguage>
        <Blind delay={delay} />
      </StaNameBg>
      <DoorTypeBg>
        {doorType === "left" && !(!!ascendTrsf || !!descendTrsf) && (
          <Left delay={delay} />
        )}
        {doorType === "right" && !(!!ascendTrsf || !!descendTrsf) && (
          <Right delay={delay} />
        )}
        {doorType === "left" && (!!ascendTrsf || !!descendTrsf) && (
          <LeftTrsf delay={delay} />
        )}
        {doorType === "right" && (!!ascendTrsf || !!descendTrsf) && (
          <RightTrsf delay={delay} />
        )}
      </DoorTypeBg>
      {ascendTrsf && (
        <ArrowDownBg delay={delay}>
          <Arrow dir="desc" line={descendTrsf} />
        </ArrowDownBg>
      )}
    </Bg>
  );
}

const Bg = styled.div``;

const clear = keyframes`
    from {
        background: #0052a4;
        width: 207px;
    }

    to {
        width: 0;
        margin-left: 207px;
        background: #0052a4;
    }
`;

const left = keyframes`
    from {
        margin-top: 15px;
        height: 0;
    }

    to {
        margin-top: 0;
        height: 15px;
    }
`;

const right = keyframes`
    from {
        height: 0;
    }

    to {
        height: 15px;
    }
`;

const trsf = keyframes`
    from {
        width: 0;
        height: 0;
        margin-left: 11px;
    }

    to {
        width: 22px;
        height: 22px;
        margin-left: 0;
        border: 6px solid;
    }
`;

const up = keyframes`
    from {
        opacity: 0;
        transform: translateY(188px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const down = keyframes`
    from {
        opacity: 0;
        transform: translateY(-188px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const StaNameBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 207px;
  height: 80px;

  margin: 40px -8px;

  transform: rotate(-45deg);
`;

const Korean = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const OtherLanguage = styled.div`
  font-size: 12px;
`;

const Blind = styled.div`
  position: absolute;

  width: 207px;
  height: 80px;

  z-index: 1000;

  background: white;

  animation-name: ${clear};
  animation-duration: 0.3s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-delay: ${({ delay }) => delay};
`;

const DoorTypeBg = styled.div`
  height: 26px;

  display: flex;
  align-items: center;
`;

const NotTrsf = styled.div`
  width: 12px;
  height: 0;

  margin-left: 30px;

  animation-duration: 0.3s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-delay: ${({ delay }) => delay};
`;

const Trsf = styled.div`
  z-index: 1000;

  position: relative;
  top: 20px;
  border-radius: 50%;

  transform: translateX(20px);

  animation-name: ${trsf};
  animation-duration: 0.3s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-delay: ${({ delay }) => delay};
`;

const Left = styled(NotTrsf)`
  position: relative;
  top: 26px;
  background: yellow;
  border-radius: 5px 5px 0 0;
  animation-name: ${left};
`;

const LeftTrsf = styled(Trsf)`
  background: yellow;
`;

const RightTrsf = styled(Trsf)`
  background: white;
`;

const Right = styled(NotTrsf)`
  position: relative;
  top: 20px;

  background: white;

  border-radius: 0 0 5px 5px;

  animation-name: ${right};
`;

const ArrowUpBg = styled.div`
  opacity: 0;

  animation-name: ${up};
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-delay: ${({ delay }) => delay};
`;

const ArrowDownBg = styled.div`
  opacity: 0;

  animation-name: ${down};
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-delay: ${({ delay }) => delay};
`;
