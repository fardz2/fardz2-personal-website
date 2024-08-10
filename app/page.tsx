import Contact from "../components/Contact";
import About from "../components/About";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import Portfolio from "../components/Portfolio";
import Footer from "../components/footer";

export default async function Page() {
  return (
    <>
      <NavBar />
      <Main />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
