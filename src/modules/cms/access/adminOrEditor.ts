import type { Access } from "payload";

import { checkRole } from "./utilities";

export const adminOrEditor: Access = ({ req: { user } }) => {
	if (user) return checkRole(["admin", "editor"], user);

	return false;
};
