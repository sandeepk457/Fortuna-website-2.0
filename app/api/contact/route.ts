import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { sendMail } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // ============================================================
    // DEBUG
    // ============================================================

    console.log("========== CONTACT API DEBUG ==========");
    console.log(
      "DATABASE SOURCE:",
      process.env.DATABASE_URL ? "DATABASE_URL" : "LOCAL DB"
    );
    console.log("ENQUIRY TYPE:", body.enquiryType);
    console.log("FULL NAME:", body.fullName);
    console.log("EMAIL:", body.email);
    console.log("=======================================");

    // ============================================================
    // FORM DATA
    // ============================================================

    const {
      enquiryType = "CONTACT",
      fullName,
      email,
      company,
      phoneCode,
      phone,
      industry,
      product,
      country,
      companySize,
      message,
    } = body;

    // ============================================================
    // DATABASE INSERT
    // ============================================================

    const result = await query(
      `
      INSERT INTO contact_enquiries
      (
        enquiry_type,
        full_name,
        email,
        company,
        phone_code,
        phone,
        industry,
        product,
        country,
        company_size,
        message
      )
      VALUES
      (
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8,
        $9,
        $10,
        $11
      )
      RETURNING id;
      `,
      [
        enquiryType,
        fullName,
        email,
        company,
        phoneCode,
        phone,
        industry,
        product,
        country,
        companySize,
        message,
      ]
    );

    const enquiryId = result.rows[0].id;

    console.log("DATABASE INSERT SUCCESS");
    console.log("ENQUIRY ID:", enquiryId);
    console.log("ENQUIRY TYPE:", enquiryType);

    // ============================================================
    // REQUEST TYPE
    // ============================================================

    const isDemoRequest = enquiryType === "DEMO_REQUEST";

    // ============================================================
    // ADMIN EMAIL
    // ============================================================

    const adminSubject = isDemoRequest
      ? `🎯 New Fortuna Demo Request - ${fullName}`
      : `🚀 New Website Enquiry - ${fullName}`;

    const adminHeading = isDemoRequest
      ? "New Fortuna Demo Request"
      : "New Contact Enquiry";

    const mailResult = await sendMail({
      to: process.env.ADMIN_EMAIL!,
      subject: adminSubject,
      html: `
        <div style="font-family: Arial, sans-serif; color: #1e293b;">

          <h2 style="color: #005F99;">
            ${adminHeading}
          </h2>

          <p>
            <b>Enquiry ID:</b> ${enquiryId}
          </p>

          <table
            border="1"
            cellpadding="8"
            cellspacing="0"
            style="
              border-collapse: collapse;
              width: 100%;
              max-width: 700px;
              font-family: Arial, sans-serif;
            "
          >

            <tr>
              <td><b>Enquiry Type</b></td>
              <td>${enquiryType}</td>
            </tr>

            <tr>
              <td><b>Name</b></td>
              <td>${fullName}</td>
            </tr>

            <tr>
              <td><b>Email</b></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><b>Company</b></td>
              <td>${company}</td>
            </tr>

            <tr>
              <td><b>Phone</b></td>
              <td>${phoneCode || ""} ${phone || ""}</td>
            </tr>

            <tr>
              <td><b>Industry</b></td>
              <td>${industry}</td>
            </tr>

            <tr>
              <td><b>Product</b></td>
              <td>${product}</td>
            </tr>

            <tr>
              <td><b>Country</b></td>
              <td>${country}</td>
            </tr>

            <tr>
              <td><b>Company Size</b></td>
              <td>${companySize}</td>
            </tr>

            <tr>
              <td><b>Message</b></td>
              <td>${message}</td>
            </tr>

          </table>

          <p style="margin-top: 24px; color: #64748b;">
            Fortuna Global Supply Chain Systems
          </p>

        </div>
      `,
    });

    console.log("ADMIN MAIL RESULT:", mailResult);

    // ============================================================
    // CUSTOMER AUTO REPLY
    // ============================================================

    const customerSubject = isDemoRequest
      ? "Thank you for requesting a Fortuna Demo"
      : "Thank you for contacting Fortuna Global Supply Chain Systems";

    const customerContent = isDemoRequest
      ? `
          <p>
            Thank you for requesting a demo of
            <b>Fortuna Global Supply Chain Systems</b>.
          </p>

          <p>
            We have successfully received your demo request.
            Our Supply Chain experts will review your requirements
            and get back to you shortly to arrange a personalized
            demonstration.
          </p>
        `
      : `
          <p>
            Thank you for contacting
            <b>Fortuna Global Supply Chain Systems</b>.
          </p>

          <p>
            We have successfully received your enquiry.
            Our Supply Chain experts will review your request
            and get back to you shortly.
          </p>
        `;

    await sendMail({
      to: email,
      subject: customerSubject,
      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            color: #334155;
            line-height: 1.7;
          "
        >

          <p>
            Dear ${fullName},
          </p>

          ${customerContent}

          <p style="margin-top: 28px;">
            <b>Visit Our Website</b>
          </p>

          <p>
            <a
              href="https://www.fortunaglobalsupplychain.com"
              style="color: #005F99;"
            >
              www.fortunaglobalsupplychain.com
            </a>
          </p>

          <p style="margin-top: 28px;">
            Regards,
          </p>

          <p>
            <b>Fortuna Global Supply Chain Systems</b><br />
            Enterprise Supply Chain Software
          </p>

          <p style="color: #94a3b8; font-size: 12px;">
            © 2026 Fortuna Global Supply Chain Systems
          </p>

        </div>
      `,
    });

    console.log("CUSTOMER AUTO REPLY SENT:", email);

    // ============================================================
    // SUCCESS RESPONSE
    // ============================================================

    return NextResponse.json({
      success: true,
      enquiryId,
      enquiryType,
    });

  } catch (error: any) {

    console.error("=================================");
    console.error("CONTACT API ERROR");
    console.error(error);
    console.error("=================================");

    return NextResponse.json(
      {
        success: false,
        message:
          error?.message ||
          "Something went wrong while processing your enquiry.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "GET Working",
  });
}