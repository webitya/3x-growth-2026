import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, phone, company, service, description } = await request.json();

        // Validate required fields
        if (!name || !email || !phone || !service) {
            return Response.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.APP_PASSWORD,
            },
        });

        // Email to admin (lead notification)
        const adminMailOptions = {
            from: process.env.USER_EMAIL,
            to: process.env.USER_EMAIL,
            subject: `New Lead from ${name} - ${service}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Lead Received! 🎯</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #1e40af; margin-top: 0;">Lead Details</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #3b82f6;">Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #3b82f6;">Email:</strong> <a href="mailto:${email}" style="color: #60a5fa;">${email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #3b82f6;">Phone:</strong> <a href="tel:${phone}" style="color: #60a5fa;">${phone}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #3b82f6;">Company:</strong> ${company || 'Not provided'}</p>
              <p style="margin: 10px 0;"><strong style="color: #3b82f6;">Service:</strong> <span style="background: #dbeafe; padding: 4px 12px; border-radius: 20px; color: #1e40af;">${service}</span></p>
            </div>
            
            ${description ? `
              <div style="margin: 20px 0; padding: 15px; background: #f1f5f9; border-left: 4px solid #3b82f6; border-radius: 4px;">
                <strong style="color: #3b82f6;">Description:</strong>
                <p style="margin: 10px 0 0 0; color: #475569;">${description}</p>
              </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e2e8f0; text-align: center; color: #64748b; font-size: 14px;">
              <p>Received on ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
            </div>
          </div>
        </div>
      `,
        };

        // Email to user (thank you message)
        const userMailOptions = {
            from: process.env.USER_EMAIL,
            to: email,
            subject: 'Thank You for Your Inquiry - 3x Growth',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${name}! 🙏</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <p style="font-size: 16px; color: #475569; line-height: 1.6;">
              We've received your inquiry about <strong style="color: #3b82f6;">${service}</strong> and appreciate you reaching out to us.
            </p>
            
            <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <p style="margin: 0; color: #1e40af; font-size: 15px;">
                <strong>What's Next?</strong><br/>
                Our team will review your inquiry and get back to you within 24 hours. We're excited to help you achieve 3x growth!
              </p>
            </div>
            
            <div style="margin: 25px 0;">
              <h3 style="color: #1e40af; margin-bottom: 15px;">Your Inquiry Summary:</h3>
              <p style="margin: 8px 0; color: #64748b;"><strong>Service:</strong> ${service}</p>
              <p style="margin: 8px 0; color: #64748b;"><strong>Company:</strong> ${company || 'Not provided'}</p>
              ${description ? `<p style="margin: 8px 0; color: #64748b;"><strong>Description:</strong> ${description}</p>` : ''}
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="tel:+916200207379" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);">
                📞 Call Us: +91 6200207379
              </a>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e2e8f0; text-align: center; color: #64748b; font-size: 14px;">
              <p style="margin: 5px 0;">Best regards,<br/><strong style="color: #3b82f6;">3x Growth Team</strong></p>
            </div>
          </div>
        </div>
      `,
        };

        // Send both emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);

        return Response.json(
            { message: 'Emails sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Email error:', error);
        return Response.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
