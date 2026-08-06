import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { ok: true } | { error: string }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, phone, note } = req.body ?? {}

    if (!name || !phone) {
      return res.status(400).json({ error: 'Missing required fields: name and phone' })
    }

    // TODO: Replace this block with real email/DB/webhook integration.
    // For now we just log and return success.
    // eslint-disable-next-line no-console
    console.log('Contact request received:', { name, phone, note })

    return res.status(200).json({ ok: true })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Contact API error', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
