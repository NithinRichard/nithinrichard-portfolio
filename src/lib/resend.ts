import { env } from '@/t3-env';
import { Resend } from 'resend';

function getResend() {
  if (!env.RESEND_API_KEY) {
    return null;
  }

  return new Resend(env.RESEND_API_KEY);
}

export { getResend };
