import { ClientUser } from "payload";

import type { User } from "@/payload-types";

export const checkRole = (
	allRoles: User["roles"] = [],
	user?: User | ClientUser | null
): boolean => {
	if (user && allRoles) {
		const userRoles = (user as { roles?: User["roles"] | null })?.roles ?? [];
		return allRoles.some((role) => userRoles.includes(role));
	}

	return false;
};
