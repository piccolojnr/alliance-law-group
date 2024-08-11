// import Footer from "./components/footer";
// import Navbar from "./components/navbar";
// import AboutUs from "./pages/about";
// import ContactUs from "./pages/contact";
// import Hero from "./pages/home-page";
// import Services from "./pages/services";
// import TeamMembers from "./pages/team";
// import Testimonials from "./pages/testimonials";
import React from "react";
import { Suspense } from "react";

const Navbar = React.lazy(() => import("./components/navbar"));
const Footer = React.lazy(() => import("./components/footer"));
const AboutUs = React.lazy(() => import("./pages/about"));
const ContactUs = React.lazy(() => import("./pages/contact"));
const Hero = React.lazy(() => import("./pages/home-page"));
const Services = React.lazy(() => import("./pages/services"));
const TeamMembers = React.lazy(() => import("./pages/team"));
const Testimonials = React.lazy(() => import("./pages/testimonials"));

export default function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <ContactUs />
      <TeamMembers />
      <Footer />
    </Suspense>
  );
}

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};
