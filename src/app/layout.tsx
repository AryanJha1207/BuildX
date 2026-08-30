import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/lib/store';
import { Navbar } from '@/components/layout/Navbar';
import { Sidebar } from '@/components/layout/Sidebar';

export const metadata: Metadata = {
  title: 'BuildX - Intelligent Single Window Approval & Compliance Platform',
  description: 'Smart India Hackathon 26130 Prototype for Maharashtra Industrial Clearances',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <div className="app-container" style={{ flexDirection: 'column' }}>
            <Navbar />
            <div style={{ display: 'flex', flex: 1, minHeight: 'calc(100vh - 85px)' }}>
              <Sidebar />
              <main className="main-content">
                {children}
              </main>
            </div>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
