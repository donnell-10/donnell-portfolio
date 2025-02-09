import { MailIcon, Salad, CableCar } from "lucide-react"
import './ContactButtons.css'

function ContactButtons () {
    return(
        <div className="buttons">
            <button className="btn">
                <MailIcon className="w-8 h-8"/>
 
            </button>
            <button className="btn">
                <Salad/>
            </button>               
            <button className="btn">
              <CableCar/>  
            </button>
            
                
        </div>
    )
}

export default ContactButtons;