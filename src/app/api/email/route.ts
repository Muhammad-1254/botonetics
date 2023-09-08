import { sendEmail } from '@/helper/email-handler/email';
import { NextResponse, NextRequest } from 'next/server';
import { FormEvent } from 'react';

type TFormData = {
  name: string;
  email: string;
  contactNumber: string;
  company: string;
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
      company,
      subject,
    }: TFormData = user;

    await sendEmail({name,subject,company,contactNumber,message,reciverEmail:email});
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
