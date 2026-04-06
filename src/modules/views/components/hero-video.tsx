"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const POSTER = "/videos/hero-reel-poster.webp";
const VIDEO_SRC = "/videos/hero-reel.webm";

/**
 * Defers attaching the video source until the browser is idle so the poster
 * (and hero copy) are not competing with a large .webm download for LCP.
 */
export const HeroVideo = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [videoSrc, setVideoSrc] = useState<string | null>(null);

	useEffect(() => {
		const win = window;
		let idleId: number | undefined;
		let timeoutId: ReturnType<typeof setTimeout> | undefined;

		const enable = () => setVideoSrc(VIDEO_SRC);

		if ("requestIdleCallback" in win) {
			idleId = win.requestIdleCallback(enable, { timeout: 2000 });
		} else {
			timeoutId = setTimeout(enable, 200);
		}

		return () => {
			if (idleId !== undefined && "cancelIdleCallback" in win) {
				win.cancelIdleCallback(idleId);
			}
			if (timeoutId !== undefined) {
				clearTimeout(timeoutId);
			}
		};
	}, []);

	const tryPlay = useCallback(() => {
		const el = videoRef.current;
		if (!el) return;
		el.play().catch(() => {
			// Autoplay restrictions: poster stays visible.
		});
	}, []);

	return (
		<video
			className="mask-b-to-95% pointer-events-none absolute inset-0 h-full w-full object-cover"
			loop
			muted
			onCanPlay={tryPlay}
			playsInline
			poster={POSTER}
			preload={videoSrc ? "auto" : "none"}
			ref={videoRef}
			slot="media"
		>
			{videoSrc ? <source src={videoSrc} type="video/webm" /> : null}
			Your browser does not support the video tag.
		</video>
	);
};
