import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Semua field wajib diisi.",
        },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const currentDate = new Date().toLocaleString("id-ID", {
      dateStyle: "full",
      timeStyle: "short",
    });

    await transporter.sendMail({
      from: `"Portfolio Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 New Portfolio Message | ${subject}`,

      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

body{
margin:0;
padding:40px;
background:#f5f7fb;
font-family:Arial,Helvetica,sans-serif;
}

.container{
max-width:700px;
margin:auto;
background:#ffffff;
border-radius:18px;
overflow:hidden;
box-shadow:0 15px 40px rgba(0,0,0,.08);
}

.header{
background:linear-gradient(135deg,#06b6d4,#2563eb);
padding:45px;
text-align:center;
}

.header h1{
margin:0;
font-size:30px;
color:#fff;
}

.header p{
margin-top:10px;
color:#dbeafe;
font-size:15px;
}

.content{
padding:35px;
}

.section-title{
font-size:22px;
font-weight:bold;
color:#111827;
margin-bottom:25px;
}

table{
width:100%;
border-collapse:collapse;
margin-bottom:30px;
}

td{
padding:14px;
border-bottom:1px solid #e5e7eb;
}

.label{
width:140px;
font-weight:bold;
color:#374151;
}

.value{
color:#111827;
}

.message{
background:#f8fafc;
border-left:5px solid #06b6d4;
padding:20px;
border-radius:10px;
line-height:1.8;
white-space:pre-wrap;
color:#374151;
}

.button{
display:inline-block;
margin-top:35px;
padding:14px 28px;
background:#2563eb;
color:#fff !important;
text-decoration:none;
border-radius:10px;
font-weight:bold;
}

.footer{
margin-top:45px;
padding:25px;
text-align:center;
background:#f9fafb;
border-top:1px solid #e5e7eb;
}

.footer h3{
margin:0;
font-size:20px;
color:#111827;
}

.footer p{
color:#6b7280;
margin-top:10px;
font-size:14px;
line-height:1.7;
}

.footer a{
color:#2563eb;
text-decoration:none;
font-weight:bold;
}

</style>

</head>

<body>

<div class="container">

<div class="header">

<h1>💼 Muhammad Fazli Adrianto</h1>

<p>New Contact Form Submission</p>

</div>

<div class="content">

<div class="section-title">

📨 Someone has contacted you from your portfolio website.

</div>

<table>

<tr>

<td class="label">👤 Name</td>

<td class="value">${name}</td>

</tr>

<tr>

<td class="label">📧 Email</td>

<td class="value">${email}</td>

</tr>

<tr>

<td class="label">📝 Subject</td>

<td class="value">${subject}</td>

</tr>

<tr>

<td class="label">🕒 Date</td>

<td class="value">${currentDate}</td>

</tr>

</table>

<div class="section-title">

💬 Message

</div>

<div class="message">

${message}

</div>

<div style="text-align:center;">

<a
class="button"
href="mailto:${email}"
>

Reply to Sender

</a>

</div>

<div class="footer">

<h3>

💼 Muhammad Fazli Adrianto

</h3>

<p>

Full Stack Developer • Laravel • Next.js • Flutter

</p>

<p>

<a href="https://portfolio-fazli.vercel.app">

🌐 Visit Portfolio

</a>

</p>

<p>

This email was automatically generated from your portfolio website.

</p>

</div>

</div>

</div>

</body>

</html>
`,
    });

    return NextResponse.json({
      success: true,
      message: "Pesan berhasil dikirim.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Gagal mengirim pesan.",
      },
      {
        status: 500,
      },
    );
  }
}
