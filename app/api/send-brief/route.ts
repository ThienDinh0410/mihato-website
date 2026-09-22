import { NextResponse } from 'next/server';
import { briefs } from '../../briefs';
export async function POST(req: Request){
  const {email,slug}=await req.json(); const b=briefs[slug];
  if(!email || !b) return NextResponse.json({error:'Email hoặc tài liệu không hợp lệ.'},{status:400});
  const key=process.env.RESEND_API_KEY; const from=process.env.BRIEF_FROM_EMAIL;
  if(!key || !from) return NextResponse.json({error:'Chức năng gửi email đang chờ cấu hình RESEND_API_KEY và BRIEF_FROM_EMAIL.'},{status:503});
  const origin=new URL(req.url).origin; const pdfUrl=origin+b.pdf;
  const rr=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({from,to:[email],subject:`MiHaTo | ${b.label}`,html:`<div style="font-family:Arial,sans-serif"><h2>${b.title}</h2><p>${b.subtitle}</p><p><a href="${pdfUrl}">Tải bản A4 PDF</a></p><p>MiHaTo JSC · 31 Nơ Trang Long, P. Gia Định, TP.HCM</p></div>`})});
  if(!rr.ok) return NextResponse.json({error:'Dịch vụ email chưa gửi được. Vui lòng kiểm tra cấu hình.'},{status:502});
  return NextResponse.json({ok:true});
}
