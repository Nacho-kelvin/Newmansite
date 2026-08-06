import { useState } from 'react'

export default function ContactForm(){
  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [note,setNote] = useState('')
  const [status,setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  async function submit(e:any){
    e.preventDefault();
    setStatus('loading')
    try{
      const res = await fetch('/api/contact', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({name,phone,note})})
      if(res.ok) setStatus('success')
      else setStatus('error')
    }catch(err){ setStatus('error') }
  }

  return (
    <form onSubmit={submit} className="space-y-4 max-w-md">
      <div>
        <label className="block text-sm">Name</label>
        <input value={name} onChange={e=>setName(e.target.value)} required className="w-full px-3 py-2 rounded border" />
      </div>
      <div>
        <label className="block text-sm">Phone</label>
        <input value={phone} onChange={e=>setPhone(e.target.value)} required className="w-full px-3 py-2 rounded border" />
      </div>
      <div>
        <label className="block text-sm">Message</label>
        <textarea value={note} onChange={e=>setNote(e.target.value)} className="w-full px-3 py-2 rounded border" />
      </div>
      <div>
        <button type="submit" className="bg-gold text-navy px-4 py-2 rounded" disabled={status==='loading'}>{status==='loading'?'Sending…':'Send Request'}</button>
        {status==='success' && <p className="text-sm text-green-600 mt-2">Thanks — we will be in touch.</p>}
        {status==='error' && <p className="text-sm text-red-600 mt-2">Something went wrong. Please call 0799 337269.</p>}
      </div>
    </form>
  )
}
