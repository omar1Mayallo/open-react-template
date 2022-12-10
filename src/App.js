//LAYOUT
import Header from "./Components/Header/Header.component";
import Footer from "./Components/Footer/Footer.component";
//SECTIONS
import Hero from "./Sections/Hero/Hero.section";
import Services from "./Sections/Services/Services.section";
import Testimonials from "./Sections/Testimonials/Testimonials.section";
import Workflow from "./Sections/Workflow/Workflow.section";
import Subscribe from "./Sections/Subscribe/Subscribe.section";
//STYLES
import "./utils/styles/App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Workflow />
        <Testimonials />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}

export default App;
