import { Chivo_Mono } from "next/font/google";
import localFont from "next/font/local";

export const inter = localFont({
	variable: "--font-display",
	display: "swap",
	preload: true,
	src: [
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
	fallback: [
		"SFMono-Regular",
		"Menlo",
		"Monaco",
		"Consolas",
		"Liberation Mono",
		"Courier New",
		"monospace",
	],
});
