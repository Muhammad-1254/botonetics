import { sendEmail } from '@/helper/email-handler/email';
import { NextResponse, NextRequest } from 'next/server';
import { FormEvent } from 'react';

type TFormData = {
  name: string;
  email: string;
  contactNumber: string;
  comapany: string;
  subject: string;
  message: string;
};

export const POST = async (request: NextRequest, response: NextResponse) => {
  try {
    const user = await request.json();
    const {
      name,
      email,
      contactNumber,
      message,
      comapany,
      subject,
    }: TFormData = user;

    await sendEmail({name,subject,comapany,contactNumber,message,reciverEmail:email});
    return NextResponse.json(
      {
        message: 'email sent successfully',
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: 'error happened',
        error,
      },
      {
        status: 500,
      }
    );
  }
};
