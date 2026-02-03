import type { Access } from "payload";

import { checkRole } from "./utilities";

export const adminOnlyBoolean: Access = ({ req }) =>
	checkRole(["admin"], req.user);

export const adminOnly: Access = adminOnlyBoolean;
