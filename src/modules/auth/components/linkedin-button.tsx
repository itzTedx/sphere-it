"use client";

import { useTransition } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { IconSocialLinkedin } from "@/assets/icons";

import { signIn, signOut, useSession } from "@/lib/auth/client";

export const LinkedInAuthButton = () => {
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

	function logout() {
		startTransition(async () => {
			await signOut();
		});
	}

	if (session)
		return (
			<Button
				disabled={isPending}
				onClick={logout}
				type="button"
				variant="outline"
			>
				Logout
			</Button>
		);

	return (
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
	);
};
