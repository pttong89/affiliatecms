// app/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
//import { getServerSession } from 'next-auth';
//import { authOptions  } from '@/pages/api/auth/[...nextauth]'; // import auth config
import { logAction } from '@/lib/logger'; // helper tự viết
export async function POST(req: NextRequest) {
    try {
        const { filename, html } = await req.json();

        const ext = path.extname(filename) || '.html';
        const base = path.basename(filename, ext).replace(/\s+/g, '-');
        const finalName = `${base}-${Date.now()}${ext}`;
        const filePath = path.join(process.cwd(), 'raw-html', finalName);

        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, html, 'utf8');
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
        //const session = await getServerSession(authOptions);
        const email = ''; //session?.user?.email || 'unknown';
        logAction('📤 Upload', {
            user: email,
            ip: req.headers.get('x-forwarded-for') || 'unknown',
            details: `file="${filename}"`
        });
        return NextResponse.json({ success: true, filename: finalName });
    } catch (err) {
        if (err instanceof Error) {
            console.error('❌ Upload failed:', err.message);
            return NextResponse.json({ success: false, error: err.message });
        } else {
            console.error('❌ Unknown error:', err);
            return NextResponse.json({ success: false, error: 'Unknown error' });
        }
    }
}
