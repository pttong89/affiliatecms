// lib/log.ts hoặc chèn tạm ở đầu trang component
import fs from 'fs';
import path from 'path';
type LogInfo = {
  ip?: string;
  user?: string;
  details?: string;
};
export function logAction(action: string, info: LogInfo) {
  const logDir = path.join(process.cwd(), 'logs');
  const logFile = path.join(logDir, 'activity.log');

  // Đảm bảo thư mục logs tồn tại
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  const timestamp = new Date().toISOString();
  const ip = info.ip || '-';
  const user = info.user || 'anonymous';
  const details = info.details || '';

  const line = `[${timestamp}] ${action}: user=${user} ip=${ip} ${details}\n`;
  fs.appendFileSync(logFile, line, 'utf8');
}
