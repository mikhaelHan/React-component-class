import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'React component class',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
