import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lakshmi Ayurveda',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        {/* <Head>
            
            
        </Head> */}
      <body className={inter.className}>{children}
        
     
      </body>
    </div>
  )
}
