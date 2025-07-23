import "./globals.css";
import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'overflow-x-hidden'}>
      <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
