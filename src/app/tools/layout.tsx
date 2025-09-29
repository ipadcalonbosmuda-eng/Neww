'use client';

import { Sidebar } from '@/components/Sidebar';
import { ConnectWallet } from '@/components/ConnectWallet';

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f9fafb'}}>
      <Sidebar />
      
      {/* Main Content */}
      <div className="lg:ml-80">
        {/* Header */}
        <header className="sticky top-0 z-30 backdrop-blur-sm border-b" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: 'rgba(229, 231, 235, 0.5)'}}>
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex-1" />
            <ConnectWallet />
          </div>
        </header>

        {/* Page Content */}
        <main className="min-h-[calc(100vh-80px)]">
          {children}
        </main>
      </div>
    </div>
  );
}
