import './MailModal.css'

function MailModal () {
    return(
        <div className="mail-modal">
            <div>

            
                <h1>
                    Email Me 
                </h1>
                <div style={{display:'flex', justifyContent:'space-between'
                 }}>
                    <button className='mail-btn'>
                        <img src='/outlook.svg' alt='outlook'/>
                    </button>
                    <button className='mail-btn'>
                        <img src='/gmail.svg' alt='gmail'/>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default MailModal;