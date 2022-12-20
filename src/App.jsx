import Header from "./redux/components/Header";
import Footer from "./redux/components/Footer";
import Addform from "./redux/components/Addform";
import Letterbox from "./redux/components/Letterbox";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <StMain>
      <Header />
      <Addform></Addform>
      <Letterbox />
      <Footer />
    </StMain>
  );
}

export default App;

const StMain = styled.div`
  /* max-width: 1200px;
  min-width: 800px; */
  margin: 0px auto;
  background-color: #f6f6f6;
  background-image: url("https://2.bp.blogspot.com/--WDpGDMku54/UP52wFiUmAI/AAAAAAAAK_M/VJ4AYd-Hz3Y/s400/valentine_card_frame_yoko.jpg");
  background-size: cover;
`;
