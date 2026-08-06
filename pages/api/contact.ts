import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { ok: boolean; message?: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, message: 'Method not allowed' })
  const { name, phone, note } = req.body

  // If SENDGRID_API_KEY is configured in Vercel, send an email. Otherwise just log and return success for preview.
  const apiKey = process.env.SENDGRID_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL || 'nkavehere909@gmail.com'

  console.log('Contact form submission:', { name, phone, note })

  if (!apiKey) {
    // Preview mode: don't fail, return success so the preview works.
    return res.status(200).json({ ok: true, message: 'Preview mode: email not sent (no SENDGRID_API_KEY).' })
  }

  // Build SendGrid request
  const body = {
    personalizations: [{ to: [{ email: toEmail }], subject: `Website contact: ${name || 'No name'}` }],
    from: { email: 'no-reply@newmansite.netlify.app', name: 'Newman Website' },
    content: [
      { type: 'text/plain', value: `Name: ${name}\nPhone: ${phone}\nMessage: ${note}` }
    ]
  }

  try {
    const r = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify(body)
    })

    if (!r.ok) {
      const text = await r.text()
      console.error('SendGrid error:', r.status, text)
      return res.status(500).json({ ok: false, message: 'Failed to send email' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('SendGrid exception:', err)
    return res.status(500).json({ ok: false, message: 'Unexpected error' })
  }
}
