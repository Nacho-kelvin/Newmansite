import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { ok: boolean }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') return res.status(405).end()
  const { name, phone, note } = req.body

  // Simple serverless handler: send email via SMTP provider or store in DB.
  // You must configure SMTP env vars in Vercel (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS)
  // For now, we just log and return success in preview.

  console.log('Contact form submission:', { name, phone, note })

  // TODO: implement actual email sending (SendGrid / SMTP)

  res.status(200).json({ ok: true })
}
