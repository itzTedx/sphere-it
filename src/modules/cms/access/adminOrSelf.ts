import type { Access } from "payload";

import { checkRole } from "./utilities";

/**
 * The ID of the document matches that of the user or the user is an admin.
 *
 * Useful to allow users to manage their own account, but not others.
 */
export const adminOrSelf: Access = ({ req }) => {
	if (!req.user) return false;
	if (checkRole(["admin"], req.user)) return true;
	return { id: { equals: req.user.id } };
};
