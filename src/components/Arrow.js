import { IoTriangleSharp } from "react-icons/io5";
import styled from "styled-components";

const asc = {
  uijeongbu: {
    name: "의정부경전철",
    dir: "발⠀곡",
    color: "#FDA600",
  },
  Line7: {
    name: 7,
    dir: "장⠀암",
    color: "#747F00",
  },
  Line4: {
    name: 4,
    dir: "당고개",
    color: "#00A4E3",
  },
  gyeongchun: {
    name: "경춘선",
    dir: "춘⠀천",
    color: "#178C72",
  },
};

const desc = {
  uijeongbu: {
    name: "의정부경전철",
    dir: "⠀⠀탑⠀⠀석",
    color: "#FDA600",
  },
  Line7: {
    name: 7,
    dir: "⠀⠀부평구청",
    color: "#747F00",
  },
  Line4: {
    name: 4,
    dir: "⠀⠀오이도",
    color: "#00A4E3",
  },
};

export default function Arrow({ dir, line }) {
  if (!line || !dir) return <></>;

  return dir === "asc" ? (
    <UpBg>
      <TriangleBg>
        <Up color={asc[line].color} />
        <LineMark>{asc[line].name}</LineMark>
      </TriangleBg>
      <Stick color={asc[line].color}>{asc[line].dir}</Stick>
    </UpBg>
  ) : (
    <Bg>
      <DownStick color={desc[line].color}>{desc[line].dir}</DownStick>
      <TriangleBg>
        <Down color={desc[line].color}></Down>
        <DownLineMark>{desc[line].name}</DownLineMark>
      </TriangleBg>
    </Bg>
  );
}

const Bg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  transform: translateX(2px);

  position: absolute;
`;

const UpBg = styled(Bg)`
  transform: translateY(-120px);
`;

const TriangleBg = styled.div`
  font-size: 70px;
`;

const Up = styled(IoTriangleSharp)`
  margin-bottom: -30px;
`;

const Down = styled(IoTriangleSharp)`
  margin-bottom: 0px;
  transform: rotate(180deg);
`;

const Stick = styled.div`
  display: flex;
  align-items: center;

  width: 32px;
  height: 100px;

  font-size: 21px;
  font-weight: bold;
  text-align: center;

  color: white;
  background: ${({ color }) => color};
`;

const DownStick = styled(Stick)`
  height: 120px;
  margin-bottom: -12px;
  font-size: 18px;
`;

const LineMark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 60px;
  left: 20px;

  width: 25.5px;
  height: 25.5px;

  color: white;

  font-size: ${({ children }) =>
    typeof children === "number" ? "20px" : "8px"};
  font-weight: bold;
  text-align: center;

  border: 2px solid white;
  border-radius: 50%;
`;

const DownLineMark = styled(LineMark)`
  top: 118px;
`;
