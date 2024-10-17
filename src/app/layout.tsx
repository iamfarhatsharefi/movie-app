// src/app/layout.tsx

import './globals.css';

export const metadata = {
  title: 'Movie App',
  description: 'Explore your favorite movies with real-time data!',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-primary text-text transition-colors duration-500">
        <header className="p-6 bg-gray-900 text-accent shadow-md">
          <h1 className="text-4xl font-bold animate-fadeIn">🎬 Movie App</h1>
        </header>
        <main className="container mx-auto py-6 animate-slideIn">{children}</main>
        <footer className="p-4 bg-gray-900 text-gray-300">
          &copy; {new Date().getFullYear()} Movie App. All rights reserved.
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
