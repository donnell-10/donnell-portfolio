// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import ContactButtons from "./components/ContactButtons";
import HomeCarousel from "./components/HomeCarousel";
//import MailModal from './components/MailModal'

function App() {
  //const [count, setCount] = useState(0)
  const images = [
    {
      src: "public/Ten10.jpg",
      description:
        "Ten10 Academy 38. Alongside this group great professionals and people I began my journey into the tech industry.",
    },
    {
      src: "public/donnell_mercedes_f1.jpg",
      description:
        "This is me! A trip to Battersea Power Station where I came into contact with a Lewis Hamilton x Mercedes championship winning car.",
    },
  ];
  return (
    <>
      <div>
        <header>
          <h1>Donnell Ofori</h1>
        </header>
        <section className="about-me">
          <p className="intro">
            Hi there! I'm Donnell, a computer scientist dedicated to creating
            innovative solutions and pushing the boundaries of technology. I
            have skills in a range of areas in development and I am also a ISTQB
            certified Software Tester.
          </p>
          <p className="detail">
            I am also an author who has a deep desire to see new worlds and
            characters come to life. Whether they mirror our own world, or
            create enitrely fantasitcal ones.
          </p>
        </section>
        <div
          style={{ padding: "5px", display: "flex", justifyContent: "center" }}
        >
          <ContactButtons />
        </div>
        <HomeCarousel images={images} />
      </div>
    </>
  );
}

export default App;
