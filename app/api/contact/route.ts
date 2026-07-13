import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { sendMail } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
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

    const result = await query(
      `
      INSERT INTO contact_enquiries
      (
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
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10
      )
      RETURNING id;
      `,
      [
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

    const mailResult = await sendMail({
  to: process.env.ADMIN_EMAIL!,
  subject: `🚀 New Website Enquiry - ${fullName}`,
  html: `
    <h2>New Contact Enquiry</h2>

    <table border="1" cellpadding="8" cellspacing="0">
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
        <td>${phoneCode} ${phone}</td>
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
  `,
});

//auto reply to the user
    // Customer Auto Reply

await sendMail({
  to: email,
  subject: "Thank you for contacting Fortuna Global Supply Chain Systems",
  html: `
<!DOCTYPE html>

<html>

<head>
<meta charset="UTF-8">
</head>

<body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">

<tr>

<td align="center">

<table width="700" cellpadding="0" cellspacing="0"
style="
background:#ffffff;
border-radius:12px;
overflow:hidden;
box-shadow:0 10px 35px rgba(0,0,0,.08);
">

<!-- Header -->

<tr>

<td
style="
background:#C8102E;
padding:30px;
text-align:center;
">

<h1 style="margin:0;color:#ffffff;">
Fortuna Global Supply Chain Systems
</h1>

<p style="color:#ffffff;margin-top:8px;">
Enterprise Supply Chain Software Platform
</p>

</td>

</tr>

<!-- Body -->

<tr>

<td style="padding:40px;">

<h2 style="color:#111827;">
Hello ${fullName},
</h2>

<p style="font-size:16px;color:#555;line-height:28px;">

Thank you for contacting
<b>Fortuna Global Supply Chain Systems.</b>

</p>

<p style="font-size:16px;color:#555;line-height:28px;">

We have successfully received your enquiry.

Our Supply Chain experts will review your request and get back to you shortly.

</p>

<hr style="margin:35px 0;">

<h3 style="margin-bottom:20px;">
Your Request Summary
</h3>

<table
width="100%"
cellpadding="10"
style="border-collapse:collapse;">

<tr>
<td><b>Company</b></td>
<td>${company}</td>
</tr>

<tr>
<td><b>Interested Product</b></td>
<td>${product}</td>
</tr>

<tr>
<td><b>Industry</b></td>
<td>${industry}</td>
</tr>

<tr>
<td><b>Country</b></td>
<td>${country}</td>
</tr>

</table>

<br>

<a
href="https://fortunaglobalsupplychain.com"
style="
display:inline-block;
padding:15px 35px;
background:#C8102E;
color:white;
text-decoration:none;
border-radius:8px;
font-weight:bold;
">

Visit Our Website

</a>

<hr style="margin:35px 0;">

<p style="color:#666;line-height:28px;">

Regards,

<br><br>

<b>Fortuna Global Supply Chain Systems</b>

<br>

Enterprise Supply Chain Software

<br>

https://fortunaglobalsupplychain.com

</p>

</td>

</tr>

<!-- Footer -->

<tr>

<td
style="
background:#0f172a;
padding:25px;
text-align:center;
color:white;
font-size:13px;
">

© 2026 Fortuna Global Supply Chain Systems

</td>

</tr>

</table>

</td>

</tr>

</table>

</body>

</html>
`,
});

console.log("MAIL RESULT:", mailResult);

    return NextResponse.json({
      success: true,
      enquiryId: result.rows[0].id,
    });
  } catch (error: any) {
    console.error("DB ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "GET Working",
  });
}