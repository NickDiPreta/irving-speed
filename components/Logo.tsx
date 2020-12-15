import React from 'react'
import Image from 'next/image'

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <div>
      <img />
      <Image src="/static/perchlogo.svg" alt="Perch Logo" />

      <style jsx>{`
        img {
          height: 24px;
          width: 87px;
        }
      `}</style>
    </div>
  )
}
