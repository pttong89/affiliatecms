// pages/api/upload.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { filename, html } = req.body;

    const rawHtmlPath = path.join(process.cwd(), 'raw-html', filename);

    fs.mkdirSync(path.dirname(rawHtmlPath), { recursive: true });
    fs.writeFileSync(rawHtmlPath, html, 'utf8');

    const cmd = `node html-to-json.js ${filename}`;
    exec(cmd, { cwd: process.cwd() }, (error, stdout, stderr) => {
      if (error) {
        console.error('❌ Lỗi chạy html-to-json:', error.message);
        return res.status(500).json({ success: false, error: error.message });
      }

      if (stderr) {
        console.error('⚠️ stderr:', stderr);
      }

      console.log('✅ stdout:', stdout);
      return res.status(200).json({ success: true, filename });
    });

  } catch (err) {
    console.error('❌ Lỗi khi upload:', err);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
}
