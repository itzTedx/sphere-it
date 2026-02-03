import type { Access } from "payload";

import { checkRole } from "./utilities";

export const publicAccess: Access = ({ req }) => checkRole(["admin"], req.user);
