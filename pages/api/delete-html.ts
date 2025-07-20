// pages/api/delete-html.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { filename } = req.body;

  if (!filename || typeof filename !== 'string' || !filename.endsWith('.json')) {
    return res.status(400).json({ success: false, message: 'Invalid filename' });
  }

  const jsonPath = path.join(process.cwd(), 'content/products', filename);

  if (!fs.existsSync(jsonPath)) {
    return res.status(404).json({ success: false, message: 'JSON file not found' });
  }

  // Chuyển sang .html và xóa trong raw-html
  const basename = path.basename(filename, '.json'); // bỏ .json
  const htmlFile = basename + '.html';
  const htmlPath = path.join(process.cwd(), 'raw-html', htmlFile);

  try {
    // Xoá file JSON
    fs.unlinkSync(jsonPath);

    // Xoá file HTML nếu tồn tại
    if (fs.existsSync(htmlPath)) {
      fs.unlinkSync(htmlPath);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('❌ Delete failed:', err);
    return res.status(500).json({ success: false, message: 'Failed to delete files' });
  }
}
