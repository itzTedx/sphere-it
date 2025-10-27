import { Chivo_Mono } from "next/font/google";
import localFont from "next/font/local";

export const inter = localFont({
  variable: "--font-display",
  display: "swap",
  preload: true,
  src: [
    {
      weight: "100",
      path: "./inter-display/InterDisplay-Thin.woff2",
    },
    {
      weight: "200",
      path: "./inter-display/InterDisplay-ExtraLight.woff2",
    },
    {
      weight: "300",
      path: "./inter-display/InterDisplay-Light.woff2",
    },
    {
      weight: "400",
      path: "./inter-display/InterDisplay-Regular.woff2",
    },
    {
      weight: "500",
      path: "./inter-display/InterDisplay-Medium.woff2",
    },
    {
      weight: "600",
      path: "./inter-display/InterDisplay-SemiBold.woff2",
    },
    {
      weight: "700",
      path: "./inter-display/InterDisplay-Bold.woff2",
    },
    {
      weight: "800",
      path: "./inter-display/InterDisplay-ExtraBold.woff2",
    },
    {
      weight: "900",
      path: "./inter-display/InterDisplay-Black.woff2",
    },
  ],
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

export const sans = localFont({
  variable: "--font-sans",
  display: "swap",
  preload: true,
  src: [
    {
      weight: "100",
      path: "./albert-sans/albert-sans-100.woff2",
    },
    {
      weight: "200",
      path: "./albert-sans/albert-sans-200.woff2",
    },
    {
      weight: "300",
      path: "./albert-sans/albert-sans-300.woff2",
    },
    {
      weight: "400",
      path: "./albert-sans/albert-sans-400.woff2",
    },
    {
      weight: "500",
      path: "./albert-sans/albert-sans-500.woff2",
    },
    {
      weight: "600",
      path: "./albert-sans/albert-sans-600.woff2",
    },
    {
      weight: "700",
      path: "./albert-sans/albert-sans-700.woff2",
    },
    {
      weight: "800",
      path: "./albert-sans/albert-sans-800.woff2",
    },
    {
      weight: "900",
      path: "./albert-sans/albert-sans-900.woff2",
    },
  ],
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

export const mono = Chivo_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "500",
  fallback: ["SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
});
