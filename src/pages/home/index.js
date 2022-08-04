import "./style.css";

import {
  Nav,
  Intro,
  LinksBar,
  About,
  Technologies,
  Projects,
  Footer,
} from "../../components";

function Home() {
  return (
    <div>
      <Nav />
      <Intro />
      <LinksBar />
      <About />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
