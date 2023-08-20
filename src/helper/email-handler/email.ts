import HtmlGmail from '@/app/Components/sub-components/GmailFormat';
import Nodemailer from 'nodemailer'


export type TSendEmail ={
    name: string,
    reciverEmail: string,
    contactNumber: string,
    comapany: string,
    subject: string,
    message: string,
  };


const config ={
    port:465,
    host:'smtp.gmail.com',
    secure:true,
    auth:{
        user:process.env.EMAIL!,
        pass:process.env.PW!
    }
}



export const sendEmail = async ({
  name,
reciverEmail,
  subject,
  message,
  comapany,
  contactNumber,

}: TSendEmail) => {


    const mailData = {
        from:reciverEmail,
        to:process.env.EMAIL!,
        subject,
        message,
        html:`<div>${HtmlGmail}</div>`
    }

    const transporter = Nodemailer.createTransport(config);

    transporter.sendMail(mailData,(error,info)=>{
        if(error){
            console.log("error: ",error);
         return;   
        }else{
            console.log("info: ",info);
            return;
            
        }
    })
};
