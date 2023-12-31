import Nodemailer from 'nodemailer'


export type TSendEmail ={
    name: string,
    reciverEmail: string,
    contactNumber: string,
    company: string,
    subject: string,
    message: string,
  };


const config ={
    port:465,
    host:'smtp.gmail.com',
    secure:true,
    auth:{
        user:process.env.NODEMAILER_EMAIL!,
        pass:process.env.NODEMAILER_PW!
    }
}



export const sendEmail = async ({
  name,
reciverEmail,
  subject,
  message,
  company,
  contactNumber,

}: TSendEmail) => {


    const mailData = {
        from:reciverEmail,
        to:process.env.NODEMAILER_EMAIL!,
        subject,
        message,
        html:` <div>
            <h1>name: ${name}</h1>
            <h3>subject: ${subject}</h3>
            <p>company: ${company}</p>
            <p>message: ${message}</p>
            <strong>Contact: ${contactNumber}<br/>${reciverEmail}</strong>
        </div>`
    }



    const transporter =await Nodemailer.createTransport(config);

     await transporter.sendMail(mailData,(error,info)=>{
        if(error){
            // console.log("error: ",error);
         return;   
        }else{
            // console.log("info: ",info);
            return;
            
        }
    })
};
