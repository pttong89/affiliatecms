import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

export async function POST(req: NextRequest) {
  try {
    const html = await req.text();
    const filename = `post-${Date.now()}.html`;
    const rawHtmlPath = path.join(process.cwd(), 'raw-html', filename);

    // Đảm bảo thư mục tồn tại
    fs.mkdirSync(path.dirname(rawHtmlPath), { recursive: true });

    // Ghi file HTML vào thư mục raw-html
    fs.writeFileSync(rawHtmlPath, html, 'utf8');

    // Chạy lệnh chuyển html → json
    const cmd = `node html-to-json.js ${filename}`;
    exec(cmd, { cwd: process.cwd() }, (error, stdout, stderr) => {
      if (error) {
        console.error('❌ Lỗi chạy html-to-json:', error.message);
        return;
      }
      if (stderr) {
        console.error('⚠️ stderr:', stderr);
      }
      console.log('✅ stdout:', stdout);
    });

    return NextResponse.json({ success: true, filename });
  } catch (err) {
    console.error('❌ Lỗi khi upload:', err);
    return NextResponse.json({ success: false, error: err });
  }
}
