import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { lawFirmData } from "../_data";

export default function ContactUs() {
  return (
    <section
      id="contact"
      className=" bg-black text-white p-10 flex justify-between"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center">
          <img
            src={lawFirmData.image}
            alt={lawFirmData.name}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1
            className="text-5xl font-medium mb-16 text-start"
            style={{ fontFamily: "Abhaya Libre" }}
          >
            Get in Touch
          </h1>

          {/* email */}
          <div className="flex items-start mb-5 flex-col">
            <p
              className="text-2xl  font-medium text-[#b4816b]"
              style={{ fontFamily: "Abhaya Libre" }}
            >
              Email
            </p>
            <p className="text-lg" style={{ fontFamily: "Abhaya Libre" }}>
              {lawFirmData.email}
            </p>
          </div>
          {/* social */}
          <div className="flex items-start mb-5 flex-col">
            <p
              className="text-2xl  font-medium text-[#b4816b]"
              style={{ fontFamily: "Abhaya Libre" }}
            >
              Social
            </p>
            <div className="flex items-center space-x-5">
              <a href={lawFirmData.social.facebook}>
                <CiFacebook className="text-3xl" />
              </a>
              <a href={lawFirmData.social.twitter}>
                <CiTwitter className="text-3xl" />
              </a>
              <a href={lawFirmData.social.linkedin}>
                <CiLinkedin className="text-3xl" />
              </a>
              <a href={lawFirmData.social.instagram}>
                <CiInstagram className="text-3xl" />
              </a>
            </div>
          </div>

          {/* website */}
          <div className="flex items-start mb-5 flex-col">
            <p
              className="text-2xl  font-medium text-[#b4816b]"
              style={{ fontFamily: "Abhaya Libre" }}
            >
              Website
            </p>
            <a
              href={lawFirmData.website}
              className="text-lg"
              style={{ fontFamily: "Abhaya Libre" }}
            >
              {lawFirmData.website}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
