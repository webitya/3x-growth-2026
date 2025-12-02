import nodemailer from "nodemailer"

// Create a transporter using Gmail SMTP
// You'll need to:
// 1. Enable 2-factor authentication on your Gmail account
// 2. Generate an App Password from your Google Account
// 3. Set SMTP_EMAIL and SMTP_PASSWORD environment variables

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request) {
  try {
    const { name, email, phone, company, service, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email to the client
    const clientMailOptions = {
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: "We Received Your Message - 3x Growth Consulting",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: #ffffff; padding: 40px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #0066CC; margin: 0; font-size: 28px;">3x Growth Consulting</h1>
              <p style="color: #666; margin: 5px 0 0 0;">Sales Systems for SME Founders</p>
            </div>
            
            <h2 style="color: #1a1a1a; font-size: 20px; margin-bottom: 20px;">Hi ${name},</h2>
            
            <p style="color: #1a1a1a; font-size: 14px; line-height: 1.6; margin-bottom: 15px;">
              Thank you for reaching out to 3x Growth Consulting. We've received your message and appreciate your interest in working with us.
            </p>
            
            <p style="color: #1a1a1a; font-size: 14px; line-height: 1.6; margin-bottom: 15px;">
              Our team will review your inquiry and get back to you within 24 hours with next steps. If your request is urgent, feel free to call us directly.
            </p>
            
            <div style="background-color: #f0f6ff; padding: 20px; border-left: 4px solid #0066CC; margin: 20px 0; border-radius: 4px;">
              <h3 style="color: #0066CC; margin-top: 0;">Quick Contact Info:</h3>
              <p style="color: #1a1a1a; margin: 5px 0; font-size: 14px;">
                <strong>Phone:</strong> +91 6200207379
              </p>
              <p style="color: #1a1a1a; margin: 5px 0; font-size: 14px;">
                <strong>Email:</strong> contact@salessyllabus.com
              </p>
              <p style="color: #1a1a1a; margin: 5px 0; font-size: 14px;">
                <strong>Website:</strong> www.salessyllabus.com
              </p>
            </div>
            
            <p style="color: #1a1a1a; font-size: 14px; line-height: 1.6; margin-bottom: 15px;">
              In the meantime, you can:
            </p>
            
            <ul style="color: #1a1a1a; font-size: 14px; line-height: 1.8;">
              <li>Explore our services at www.salessyllabus.com/services</li>
              <li>Read our blog for sales insights at www.salessyllabus.com/blog</li>
              <li>Schedule a call at your convenience</li>
            </ul>
            
            <p style="color: #1a1a1a; font-size: 14px; line-height: 1.6; margin-top: 30px;">
              Best regards,<br>
              <strong>The 3x Growth Team</strong>
            </p>
          </div>
          
          <p style="text-align: center; color: #666; font-size: 12px; margin-top: 20px;">
            © 2025 3x Growth Consulting. All rights reserved.
          </p>
        </div>
      `,
    }

    // Email to the admin
    const adminMailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL,
      subject: `New Lead from ${name} - 3x Growth`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: #ffffff; padding: 40px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #0066CC; font-size: 22px; margin-bottom: 25px;">New Lead Received</h2>
            
            <div style="background-color: #f0f6ff; padding: 20px; border-radius: 4px; margin-bottom: 20px;">
              <h3 style="color: #0066CC; margin-top: 0;">Contact Information</h3>
              <p style="color: #1a1a1a; margin: 8px 0; font-size: 14px;">
                <strong>Name:</strong> ${name}
              </p>
              <p style="color: #1a1a1a; margin: 8px 0; font-size: 14px;">
                <strong>Email:</strong> ${email}
              </p>
              <p style="color: #1a1a1a; margin: 8px 0; font-size: 14px;">
                <strong>Phone:</strong> ${phone || "Not provided"}
              </p>
              <p style="color: #1a1a1a; margin: 8px 0; font-size: 14px;">
                <strong>Company:</strong> ${company || "Not provided"}
              </p>
              <p style="color: #1a1a1a; margin: 8px 0; font-size: 14px;">
                <strong>Service Interested In:</strong> ${service || "Not specified"}
              </p>
            </div>
            
            <h3 style="color: #1a1a1a; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #0066CC;">
              <p style="color: #1a1a1a; margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
                ${message}
              </p>
            </div>
            
            <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                This email was sent at ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
    }

    // Send emails
    await Promise.all([transporter.sendMail(clientMailOptions), transporter.sendMail(adminMailOptions)])

    return Response.json(
      {
        success: true,
        message: "Your message has been sent successfully. We will get back to you soon!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Email error:", error)
    return Response.json({ error: "Failed to send email. Please try again." }, { status: 500 })
  }
}
