import "./globals.css";

export const metadata = {
  title: "FORME — The Art of Dressing",
  description:
    "A considered study of modern dressing. Discover the latest luxury editorial lookbook by FORME.",
  applicationName: "FORME Editorial Lookbook",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
