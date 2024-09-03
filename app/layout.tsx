import type { Metadata } from 'next'

import "./globals.css";


export const metadata: Metadata = {
  title: 'cyparta web',
  description: 'it is syster for companys',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{

   
  return (
    <html lang="en">
      <body>
        <div className="">
          {children}
        </div>
        </body>
    </html>
  );
}
