import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const {
      type, // 'Event Inquiry' or undefined
      name,
      email,
      phone,
      message,
      // Purchase form fields
      quantity,
      // Event form fields
      eventDate,
      eventLocation
    } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Wymagane pola: imię, email, treść zapytania' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Nieprawidłowy format adresu email' },
        { status: 400 }
      );
    }

    let emailHtml: string;

    if (type === 'Event Inquiry') {
      // Build email for Event Inquiry
      emailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: linear-gradient(135deg, #017da0, #0299bb); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                    <h1 style="margin: 0; font-size: 24px;">Nowe zapytanie o Wypożyczenie - Aimora</h1>
                    <p style="margin: 10px 0 0 0; opacity: 0.9;">Formularz z podstrony /wypozyczenie</p>
                </div>
                <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
                    <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h2 style="color: #017da0; margin-top: 0;">Dane kontaktowe:</h2>
                        <div style="margin: 15px 0;"><strong style="color: #333;">Imię/Firma:</strong> <span style="margin-left: 10px; color: #666;">${name}</span></div>
                        <div style="margin: 15px 0;"><strong style="color: #333;">Email:</strong> <span style="margin-left: 10px; color: #666;">${email}</span></div>
                        ${phone ? `<div style="margin: 15px 0;"><strong style="color: #333;">Telefon:</strong> <span style="margin-left: 10px; color: #666;">${phone}</span></div>` : ''}
                        
                        <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;">
                        
                        <h2 style="color: #017da0; margin-top: 0;">Szczegóły wydarzenia:</h2>
                        <div style="margin: 15px 0;"><strong style="color: #333;">Data wydarzenia:</strong> <span style="margin-left: 10px; color: #666;">${eventDate || 'Nie podano'}</span></div>
                        <div style="margin: 15px 0;"><strong style="color: #333;">Miejsce wydarzenia:</strong> <span style="margin-left: 10px; color: #666;">${eventLocation || 'Nie podano'}</span></div>

                        <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;">

                        <h3 style="color: #017da0; margin-bottom: 15px;">Treść zapytania:</h3>
                        <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #017da0;">
                            <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
                        </div>
                    </div>
                    <div style="text-align: center; margin-top: 25px; color: #666; font-size: 12px;">
                        <p>Data: ${new Date().toLocaleString('pl-PL')}</p>
                    </div>
                </div>
            </div>
        `;
    } else {
      // Build email for Purchase Inquiry (original logic)
      const qty = Number.isFinite(Number(quantity)) ? Math.max(1, Number(quantity)) : 1;
      const unitPrice = 150; // PLN
      const total = unitPrice * qty;

      emailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: linear-gradient(135deg, #017da0, #0299bb); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                    <h1 style="margin: 0; font-size: 24px;">Nowe zapytanie - Aimora</h1>
                    <p style="margin: 10px 0 0 0; opacity: 0.9;">Formularz kontaktowy ze strony internetowej</p>
                </div>
                <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
                    <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h2 style="color: #017da0; margin-top: 0;">Dane kontaktowe:</h2>
                        <div style="margin: 15px 0;"><strong style="color: #333;">Imię:</strong> <span style="margin-left: 10px; color: #666;">${name}</span></div>
                        <div style="margin: 15px 0;"><strong style="color: #333;">Email:</strong> <span style="margin-left: 10px; color: #666;">${email}</span></div>
                        ${phone ? `<div style="margin: 15px 0;"><strong style="color: #333;">Telefon:</strong> <span style="margin-left: 10px; color: #666;">${phone}</span></div>` : ''}
                        <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;">
                        <h3 style="color: #017da0; margin-bottom: 15px;">Treść zapytania:</h3>
                        <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #017da0;">
                            <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
                        </div>
                    </div>
                    <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.06); margin-top: 16px;">
                        <h2 style="color: #017da0; margin-top: 0;">Szczegóły zamówienia:</h2>
                        <div style="margin: 15px 0; color: #333;">
                            <div><strong>Ilość kompletów:</strong> <span style="margin-left: 8px; color: #666;">${qty}</span></div>
                            <div><strong>Cena promocyjna:</strong> <span style="margin-left: 8px; color: #666;">${unitPrice} zł / komplet</span></div>
                            <div><strong>Suma:</strong> <span style="margin-left: 8px; color: #666; font-weight: 700;">${total} zł</span></div>
                        </div>
                    </div>
                    <div style="text-align: center; margin-top: 25px; color: #666; font-size: 12px;">
                        <p>Email wysłany automatycznie z formularza kontaktowego Aimora</p>
                        <p style="margin-top: 5px;">Data: ${new Date().toLocaleString('pl-PL')}</p>
                    </div>
                </div>
            </div>
        `;
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Aimora Website <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'your-email@example.com'],
      subject: `Nowe zapytanie Aimora - ${name}`,
      html: emailHtml,
      replyTo: email,
    });

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      { message: 'Email wysłany pomyślnie', id: (data as any).id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);

    return NextResponse.json(
      { error: 'Błąd podczas wysyłania emaila' },
      { status: 500 }
    );
  }
} 