import nodemailer from "nodemailer"

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes("@")) {
      return Response.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Email to the subscriber
    const subscriberMailOptions = {
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: "Welcome to 3x Growth Newsletter! 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background: linear-gradient(135deg, #0066CC 0%, #0052A3 100%); padding: 40px; border-radius: 12px; text-align: center; color: white; margin-bottom: 20px;">
            <h1 style="margin: 0; font-size: 32px; font-weight: bold;">Welcome! 🎉</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">You're now part of the 3x Growth community</p>
          </div>

          <div style="background-color: #ffffff; padding: 40px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <p style="color: #1a1a1a; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Hi there,
            </p>

            <p style="color: #1a1a1a; font-size: 15px; line-height: 1.6; margin-bottom: 20px;">
              Thanks for subscribing to the 3x Growth newsletter! You'll now receive:
            </p>

            <div style="background-color: #f0f6ff; padding: 25px; border-radius: 8px; border-left: 4px solid #0066CC; margin-bottom: 25px;">
              <ul style="margin: 0; padding-left: 20px; color: #1a1a1a;">
                <li style="margin-bottom: 10px; font-size: 14px;">
                  <strong>Weekly Sales Insights</strong> - Actionable strategies to grow your revenue
                </li>
                <li style="margin-bottom: 10px; font-size: 14px;">
                  <strong>Case Studies</strong> - Real results from SME founders like you
                </li>
                <li style="margin-bottom: 10px; font-size: 14px;">
                  <strong>Growth Tips</strong> - Proven tactics to fix your sales system
                </li>
                <li style="font-size: 14px;">
                  <strong>Exclusive Offers</strong> - Special rates for subscribers only
                </li>
              </ul>
            </div>

            <p style="color: #1a1a1a; font-size: 15px; line-height: 1.6; margin-bottom: 20px;">
              Our first newsletter goes out this week. Keep an eye on your inbox (and spam folder, just in case).
            </p>

            <p style="color: #1a1a1a; font-size: 15px; line-height: 1.6; margin-bottom: 25px;">
              If you have any questions, feel free to reach out anytime at <strong>contact@salessyllabus.com</strong>
            </p>

            <p style="color: #1a1a1a; font-size: 15px; line-height: 1.6;">
              Best regards,<br>
              <strong style="color: #0066CC;">The 3x Growth Team</strong>
            </p>
          </div>

          <p style="text-align: center; color: #666; font-size: 12px; margin-top: 30px;">
            © 2025 3x Growth Consulting. All rights reserved. | <a href="/privacy" style="color: #0066CC; text-decoration: none;">Privacy Policy</a>
          </p>
        </div>
      `,
    }

    // Email to admin with confirmation
    const adminMailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL,
      subject: `New Newsletter Subscriber: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; border-left: 4px solid #0066CC;">
            <h2 style="color: #0066CC; margin-top: 0;">New Newsletter Subscriber</h2>
            <p style="color: #1a1a1a; font-size: 14px;">
              <strong>Email:</strong> ${email}
            </p>
            <p style="color: #1a1a1a; font-size: 14px;">
              <strong>Subscribed at:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([transporter.sendMail(subscriberMailOptions), transporter.sendMail(adminMailOptions)])

    return Response.json(
      {
        success: true,
        message: "Successfully subscribed! Check your email to confirm.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Subscribe error:", error)
    return Response.json({ error: "Failed to subscribe. Please try again." }, { status: 500 })
  }
}
