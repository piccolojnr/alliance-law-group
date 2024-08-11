import Footer from "./components/footer";
import Navbar from "./components/navbar";
import AboutUs from "./pages/about";
import ContactUs from "./pages/contact";
import Hero from "./pages/home-page";
import Services from "./pages/services";
import TeamMembers from "./pages/team";
import Testimonials from "./pages/testimonials";
// import Services from "./pages/services";

export default function App() {
  return (
    <div>
      <Navbar />

      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <ContactUs />
      <TeamMembers />
      <Footer />
    </div>
  );
}
