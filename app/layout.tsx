import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Ashok Kumar | Physician & Internal Medicine",
  description: "Compassionate, evidence-led internal medicine care from Dr. Ashok Kumar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
