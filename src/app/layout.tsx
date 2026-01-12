import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageSquareShare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hi Folk',
  description: 'A place to let go of your anger.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const referralText = encodeURIComponent("Feeling angry? This app helps you let it go. Check it out!");
  const whatsappLink = `https://wa.me/?text=${referralText}`;
  
  const backgroundStyle = { paddingTop: '75px'};

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Image          
		  src="/images/backgroundimage.png"
          alt="Calm background"
          className="object-cover -z-10"	
			fill
          data-ai-hint="calm abstract"
		  style={backgroundStyle}
        />
        <div className="min-h-screen flex flex-col bg-background/80 backdrop-blur-sm">
          <Header />
          <main className="flex-1">
            {children}
          </main>
        </div>
        <Toaster />
        <div className="fixed bottom-4 right-4 z-50">
          <Button asChild className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageSquareShare className="mr-2 h-4 w-4" />
                Refer a Friend
            </Link>
          </Button>
        </div>
      </body>
    </html>
  );
}
