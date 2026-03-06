"use client";

import { useTransition } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { IconSocialLinkedin } from "@/assets/icons";

import { signIn, useSession } from "@/lib/auth/client";

interface LinkedInAuthButtonProps {
	compact?: boolean;
	/**
	 * Called after a successful LinkedIn auth.
	 * Receives the Better Auth client success context so callers
	 * can access any returned data (session, user, etc.).
	 */
	onSuccess?: (ctx: unknown) => void;
}

export const LinkedInAuthButton = ({
	compact,
	onSuccess,
}: LinkedInAuthButtonProps) => {
	const [isPending, startTransition] = useTransition();

	const { data: session } = useSession();

	function connectLinkedin() {
		startTransition(async () => {
			const res = await signIn.social({
				provider: "linkedin",
				callbackURL: window.location.href, // Return to current page after auth
				fetchOptions: {
					onSuccess(ctx) {
						// Show success message
						toast.success("Successfully connected with LinkedIn!", {
							description: "You can now access premium content.",
						});

						// If a custom success handler is provided, let the caller
						// handle any follow-up actions (like triggering downloads
						// or sending enquiry emails using LinkedIn profile data).
						// Otherwise, reload the page to update authentication state.
						if (onSuccess) {
							onSuccess(ctx);
						} else {
							window.location.reload();
						}
					},
					onError(ctx) {
						console.error("[DEBUG] LinkedIn auth failed:", {
							error: ctx.error,
							status: ctx.response?.status,
						});
						toast.error("LinkedIn authentication failed", {
							description: "Please try again or contact support.",
						});
					},
				},
			});

			if (res.error) {
				console.error("[DEBUG] LinkedIn auth error:", res.error);
				toast.error("Something went wrong", {
					description: res.error.message || "Please try again later.",
				});
			}
		});
	}

	// If user is already authenticated, show a different state
	if (session?.user) {
		return (
			<div className="flex items-center gap-2 text-muted-foreground text-sm">
				<IconSocialLinkedin className="size-4 text-[#0077B7]" />
				<span>Connected as {session.user.name}</span>
			</div>
		);
	}

	if (!session)
		return (
			<>
				{!compact && (
					<div className="flex items-center gap-3">
						<div className="-space-x-1 flex flex-1 items-center justify-center">
							<div className="h-0.5 w-full bg-linear-to-r from-stone-200 to-primary-600" />
							<div className="size-1.5 rounded-full bg-primary-600" />
						</div>
						<span className="font-display text-muted-foreground">
							or continue with
						</span>
						<div className="-space-x-1 flex flex-1 items-center justify-center">
							<div className="size-1.5 rounded-full bg-primary-600" />
							<div className="h-0.5 w-full bg-linear-to-l from-stone-200 to-primary-600" />
						</div>
					</div>
				)}
				<Button
					className="group"
					disabled={isPending}
					onClick={connectLinkedin}
					type="button"
					variant="outline"
				>
					<IconSocialLinkedin className="size-6 text-[#0077B7] transition-colors" />{" "}
					Sign up with Linkedin
				</Button>
			</>
		);
};
