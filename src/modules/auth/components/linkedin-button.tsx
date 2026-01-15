"use client";

import { useTransition } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { IconSocialLinkedin } from "@/assets/icons";

import { signIn, useSession } from "@/lib/auth/client";

export const LinkedInAuthButton = ({ compact }: { compact?: boolean }) => {
	const [isPending, startTransition] = useTransition();

	const { data: session } = useSession();

	function connectLinkedin() {
		startTransition(async () => {
			const res = await signIn.social({
				provider: "linkedin",

				fetchOptions: {
					onSuccess(ctx) {
						const account = ctx.data.account;
						console.log("account", account);
					},
				},
			});

			if (res.error)
				toast.error("Something went wrong", { description: res.error.message });
		});
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
