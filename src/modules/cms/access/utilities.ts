import { ClientUser } from "payload";

import type { User } from "@/payload-types";

export const checkRole = (
	allRoles: User["roles"] = [],
	user?: User | ClientUser | null
): boolean => {
	if (!user || !allRoles) return false;

	// Check single role field first (new method)
	const userRole = (user as { role?: string | null })?.role;
	if (userRole && allRoles.includes(userRole as "admin" | "editor" | "user")) {
		return true;
	}

	// Fallback to roles array (old method)
	const userRoles = (user as { roles?: User["roles"] | null })?.roles ?? [];
	return allRoles.some((role) => userRoles.includes(role));
};
