import { TSendEmail } from "@/helper/email-handler/email";



const HtmlGmail =({name,company,message,subject,contactNumber,reciverEmail}:TSendEmail) :React.JSX.Element=>{

    return(
        <div >
            <h1>{name}</h1>
            <h3>{subject}</h3>
            <p>{company}</p>
            <p>{message}</p>
            <strong>{contactNumber}{" "}{reciverEmail}</strong>
        </div>
    )
}

export default HtmlGmail;