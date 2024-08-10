import type { Metadata } from 'next';

import '../styles/globals.scss';
import LayoutComponent from '@/components/Layout.component/Layout.component';

export const metadata: Metadata = {
  title: 'React component class',
  description: 'Used file-based routing provided by next.js (App Router)',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <LayoutComponent>{children}</LayoutComponent>
      </body>
    </html>
  );
};

export default RootLayout;
