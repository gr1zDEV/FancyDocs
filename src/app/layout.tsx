import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
export default function Layout({ children }: LayoutProps<'/'>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <link rel="icon" type="image/x-icon" href="/favicon.png"/>

      <body className="flex flex-col min-h-screen">
        <script defer src="https://umami.fancyinnovations.com/script.js" data-website-id="07d9fec7-f5e5-408c-94d6-f7adff4e04dc"></script>
        <RootProvider>{children}</RootProvider>
      </body>
      </html>
  );
}
