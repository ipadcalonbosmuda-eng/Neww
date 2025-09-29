'use client';

import { Sidebar } from '@/components/Sidebar';
import { ConnectWallet } from '@/components/ConnectWallet';

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      {/* Main Content */}
      <div className="lg:ml-80">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white backdrop-blur-sm border-b border-gray-200 shadow-sm">
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
