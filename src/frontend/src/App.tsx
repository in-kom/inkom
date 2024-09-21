import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

function App() {
  // State to manage notifications
  const [notification, setNotification] = useState<{
    message: string;
    type: string;
  } | null>(null);

  // Function to show notifications
  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  async function prelaunchRegister() {
    console.log(API_URL);
    const mailField = document.getElementById("email") as HTMLInputElement;
    if (
      mailField.value &&
      mailField.value !== "" &&
      mailField.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
    ) {
      await axios
        .post(`${API_URL}/v0/prelaunch/subscribe`, {
          email: mailField.value,
        })
        .then((response) => {
          if (response.status === 409) {
            showNotification("Vous êtes déjà inscrit", "error");
          } else if (response.status === 201) {
            showNotification("Subscribed successfully", "success");
          }
        });
      mailField.value = "";
    } else {
      showNotification("Please enter a valid email address", "error");
    }
  }

  useEffect(() => {
    const layer = document.getElementById("main");

    if (layer) {
      const logoInsta = document.getElementById("logo-insta");
      const logoLinkedin = document.getElementById("logo-linkedin");
      const logoTiktok = document.getElementById("logo-tiktok");
      const logoYoutube = document.getElementById("logo-youtube");
      const logoMyBusiness = document.getElementById("logo-my-business");

      const handleMouseMove = (e: MouseEvent) => {
        const instavalueX = (e.pageX * -1) / 30;
        const instavalueY = (e.pageY * -1) / 30;
        const linkedinvalueX = (e.pageX * -1) / 40;
        const linkedinvalueY = (e.pageY * -1) / 60;
        const tiktokvalueX = (e.pageX * -1) / 50;
        const tiktokvalueY = (e.pageY * -1) / 50;
        const youtubevalueX = (e.pageX * -1) / 60;
        const youtubevalueY = (e.pageY * -1) / 40;
        const mybusinessvalueX = (e.pageX * -1) / 120;
        const mybusinessvalueY = (e.pageY * -1) / 70;

        if (logoInsta) {
          logoInsta.style.transform = `translate3d(${instavalueX}px, ${instavalueY}px, 0)`;
        }
        if (logoLinkedin) {
          logoLinkedin.style.transform = `translate3d(${linkedinvalueX}px, ${linkedinvalueY}px, 0)`;
        }
        if (logoTiktok) {
          logoTiktok.style.transform = `translate3d(${tiktokvalueX}px, ${tiktokvalueY}px, 0)`;
        }
        if (logoYoutube) {
          logoYoutube.style.transform = `translate3d(${youtubevalueX}px, ${youtubevalueY}px, 0)`;
        }
        if (logoMyBusiness) {
          logoMyBusiness.style.transform = `translate3d(${mybusinessvalueX}px, ${mybusinessvalueY}px, 0)`;
        }
      };

      layer.addEventListener("mousemove", handleMouseMove);

      return () => {
        layer.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <>
      {/* Notification Display */}
      {notification && (
        <div
          className={`fixed top-4 right-4 px-4 py-2 rounded-lg shadow-lg z-50
          ${notification.type === "success" ? "bg-green-500" : "bg-red-500"}
          text-white`}
        >
          {notification.message}
        </div>
      )}

      <div className="w-screen h-screen overflow-hidden" id="main">
        <div className="w-screen h-screen flex flex-col items-center justify-center absolute top-0 left-0">
          <img src="/assets/inkom.png" alt="Inkom" className="w-2/5" />
          <h1 className="text-3xl font-bold text-white w-1/2 text-center">
            Don't make your online presence a pain, gain time and engage more!
          </h1>
          <label className="text-white mt-4">
            Sign up to be informed of our product launch:
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-2/5 p-2 mt-1 rounded-lg"
            id="email"
          />
          <button
            className="bg-blue-500 text-white p-2 mt-4 rounded-lg"
            onClick={prelaunchRegister}
          >
            Sign up
          </button>
        </div>

        <div
          className="parallax absolute w-[16vw] flex items-center justify-center"
          style={{ top: "23vh", left: "4vw" }}
          id="logo-insta"
        >
          <img
            className="absolute w-[14.5vw]"
            style={{ filter: "blur(5px)" }}
            src="/assets/instagram.svg"
          />
          <img className="absolute w-[14vw]" src="/assets/instagram.svg" />
        </div>

        <div
          className="parallax absolute w-[16vw] flex items-center justify-center"
          style={{ top: "18vh", left: "70vw" }}
          id="logo-linkedin"
        >
          <img
            className="absolute w-[14.5vw]"
            style={{ filter: "blur(5px)" }}
            src="/assets/linkedin.svg"
          />
          <img className="absolute w-[14vw]" src="/assets/linkedin.svg" />
        </div>

        <div
          className="parallax absolute w-[16vw] flex items-center justify-center"
          style={{ top: "85vh", left: "70vw" }}
          id="logo-tiktok"
        >
          <img
            className="absolute w-[14.5vw]"
            style={{ filter: "blur(5px)" }}
            src="/assets/tiktok.svg"
          />
          <img className="absolute w-[14vw]" src="/assets/tiktok.svg" />
        </div>

        <div
          className="parallax absolute w-[16vw] flex items-center justify-center"
          style={{ top: "75vh", left: "15vw" }}
          id="logo-youtube"
        >
          <img
            className="absolute w-[14.5vw]"
            style={{ filter: "blur(5px)" }}
            src="/assets/youtube.svg"
          />
          <img className="absolute w-[14vw]" src="/assets/youtube.svg" />
        </div>

        <div
          className="parallax absolute w-[16vw] flex items-center justify-center"
          style={{ top: "60vh", left: "79vw" }}
          id="logo-my-business"
        >
          <img
            className="absolute w-[14.5vw]"
            style={{ filter: "blur(5px)" }}
            src="/assets/my-business.svg"
          />
          <img className="absolute w-[14vw]" src="/assets/my-business.svg" />
        </div>
      </div>
    </>
  );
}

export default App;
