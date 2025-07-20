import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const dir = path.join(process.cwd(), 'content/products');

  if (!fs.existsSync(dir)) {
    return res.status(404).json({ files: [] });
  }

  const files = fs.readdirSync(dir)
    .filter(name => name.endsWith('.html'))
    .map(name => {
      const fullPath = path.join(dir, name);
      const stats = fs.statSync(fullPath);
      return {
        filename: name,
        lastModified: new Date(stats.mtime).toLocaleString()
      };
    });

  res.status(200).json({ files });
}
