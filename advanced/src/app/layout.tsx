'use client'
import "../styles/bootstrap-grid.css"
import "../styles/bootstrap-reboot.min.css"
import "../styles/bootstrap.css"
import "./globals.css";
import { Open_Sans } from '@next/font/google';
import { PersistedStoreProvider } from "@/lib/persistedStoreProvider";
import Script from "next/script";
import Navigation from "@/components/navigation";
import MobileSearch from "@/components/mobilesearch";
import Footer from "@/components/footer";

const font = Open_Sans({ weight: ["300", "400", "600", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" className={font.className}>
      <head>
        <meta charSet="UTF-8" />
        <title>Carved Rock Fitness</title>

        <Script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></Script>
        <Script src="https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/carved-rock-fitness/js/bootstrap.min.js"></Script>
      </head>
      <body>
        <PersistedStoreProvider>
          <div className="crf">
            <Navigation />
            <MobileSearch />
            {children}
            <Footer/>
          </div>
        </PersistedStoreProvider>
      </body>
    </html>
  );
}

export const dynamic = 'force-dynamic'