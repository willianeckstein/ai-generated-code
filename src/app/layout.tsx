import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ai Generated code',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='pt-br'>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

