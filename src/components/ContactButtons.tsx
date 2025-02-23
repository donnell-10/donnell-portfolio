import { MailIcon} from "lucide-react"
import './ContactButtons.css'

function ContactButtons () {
    
    const linkedIn = async () => {
        window.open("https://www.linkedin.com/in/donnell-ofori-632546272/")   
    }

    const github = async () => {
        window.open("https://github.com/donnell-10")
    }

    
    return(
        <div className="buttons">
            <button className="btn" onClick={linkedIn}>
                <img src="/linkedin.svg" alt="linkedin" className="w-8 h-8"/>
            </button>
            <button className="btn" onClick={github}>
                <img src="/github.svg" alt="github " className="w-8 h-8"/>
                {/* <a target="_blank" href="https://icons8.com/icon/62856/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
            </button>               
            <button className="btn">
              <MailIcon className=""/>
            </button>
            
                
        </div>
    )
}

export default ContactButtons;