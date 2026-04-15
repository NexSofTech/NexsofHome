export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout is required by Next.js but actual rendering is in [locale]/layout.tsx
  return children;
}
