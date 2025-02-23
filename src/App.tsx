// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ContactButtons from './components/ContactButtons'
//import MailModal from './components/MailModal'

function App() {
  //const [count, setCount] = useState(0)

  return (

    <>
      <div>
        <header>
          <h1>
            Donnell Ofori
          </h1>
        </header>
      <section className='about-me'> 
          <p className="intro">
            Hi there! I'm Donnell, a computer scientist dedicated to creating 
            innovative solutions and pushing the boundaries of technology.
          </p>
          <p className='detail'>
            I am also an author who has a deep desire to see new worlds and characters
            come to life. Whether they mirror our own world, or create enitrely fantasitcal ones.
          </p>
        </section>
        <div style={{padding:'5px', display:'flex', justifyContent:'center'}}>
           <ContactButtons/>
        </div>
        {/* <MailModal/> */}
       

      </div>
    </>
  )
}

export default App

