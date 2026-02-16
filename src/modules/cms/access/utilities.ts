import { ClientUser } from "payload";

import type { User } from "@/payload-types";

type RoleValue = NonNullable<User["role"]>;

export const checkRole = (
	allRoles: RoleValue[] = [],
	user?: User | ClientUser | null
): boolean => {
	if (!user || !allRoles) return false;

	// Check single role field first (new method)
	const userRole = (user as { role?: string | null })?.role;
	if (userRole && allRoles.includes(userRole as RoleValue)) {
		return true;
	}

	// Fallback to roles array (old method)
	const userRoles = (user as { roles?: RoleValue[] | null })?.roles ?? [];
	return allRoles.some((role) => userRoles.includes(role));
};
