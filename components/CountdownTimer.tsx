'use client'
import { useState, useEffect } from 'react'

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    setMounted(true)
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now()
      if (diff <= 0) return setTimeLeft({ d: 0, h: 0, m: 0, s: 0 })
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  if (!mounted) return null

  return (
    <div className="flex gap-2 items-center">
      {[
        { val: timeLeft.d, label: 'd' },
        { val: timeLeft.h, label: 'h' },
        { val: timeLeft.m, label: 'm' },
        { val: timeLeft.s, label: 's' },
      ].map(({ val, label }) => (
        <div key={label}
          className="bg-gold text-[#0F1240] font-bold rounded px-2 py-1
                     text-sm min-w-[36px] text-center">
          {String(val).padStart(2, '0')}{label}
        </div>
      ))}
    </div>
  )
}
