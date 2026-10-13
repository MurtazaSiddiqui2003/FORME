import "./globals.css";

export const metadata = {
  title: {
    default: "FORME — The Art of Dressing",
    template: "%s — FORME",
  },
  description:
    "A considered study of modern dressing. Discover the latest luxury editorial lookbook by FORME.",
  applicationName: "FORME Editorial Lookbook",
  openGraph: {
    title: "FORME — The Art of Dressing",
    description:
      "A quieter kind of statement. An independent style journal exploring shape, texture, and considered dressing.",
    siteName: "FORME Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FORME — The Art of Dressing",
    description:
      "A quieter kind of statement. An independent style journal exploring considered dressing.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
