import styled, { keyframes } from "styled-components";
import StationName from "./components/stationName";

function App() {
  return (
    <Bg>
      <StaNameBg>
        <StationName
          korean="동두천중앙"
          english="Dongducheonjungang"
          chineseJapanese="东豆川中央 トンドゥチョンチュンアン"
          delay="0s"
          doorType="left"
        />
        <StationName
          korean="덕정"
          english="Deokjeong"
          chineseJapanese="德亭 トクチョン"
          delay="0.5s"
          doorType="left"
        />
        <StationName
          korean="양주"
          english="Yangju"
          chineseJapanese="杨州 ヤンジュ"
          delay="1s"
          doorType="left"
        />
        <StationName
          korean="의정부"
          english="Uijeongbu"
          chineseJapanese="议政府 ウィジョンブ"
          delay="1.5s"
          doorType="right"
        />
        <StationName
          korean="회룡"
          english="Hoeryong"
          chineseJapanese="回龙 フェリョン"
          delay="2s"
          doorType="left"
          ascendTrsf="uijeongbu"
          descendTrsf="uijeongbu"
        />
        <StationName
          korean="도봉산"
          english="Dobongsan"
          chineseJapanese="道峰山 トボンサン"
          delay="2.5s"
          doorType="left"
          ascendTrsf="Line7"
          descendTrsf="Line7"
        />
        <StationName
          korean="창동"
          english="Chang-dong"
          chineseJapanese="仓洞 チャンドン"
          delay="3s"
          doorType="left"
          ascendTrsf="Line4"
          descendTrsf="Line4"
        />
        <StationName
          korean="광운대"
          english="Kwangun Univ"
          chineseJapanese="光云大学 クァンウンデ"
          delay="3.5s"
          doorType="left"
          ascendTrsf="gyeongchun"
        />
      </StaNameBg>
      <Line />
    </Bg>
  );
}

const draw = keyframes`
  from {
    width: 60px;
  }

  to {
    width: 1500px;
  }
`;

const Bg = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StaNameBg = styled.div`
  display: flex;
  margin-left: 30px;
`;

const Line = styled.div`
  width: 60px;
  height: 20px;

  background: #0052a4;

  border-radius: 0 10px 10px 0;

  animation-name: ${draw};
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

export default App;
