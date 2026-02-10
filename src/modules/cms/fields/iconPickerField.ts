import type { Field, TextField } from "payload";

import deepMerge from "../utils/deepMerge";

export function iconPickerField(
	options?: Partial<TextField> & {
		name?: string;
		label?: string;
	}
): Field {
	const { ...rest } = options ?? {};

	return deepMerge(
		{
			...rest,
			name: rest?.name ?? "icon",
			type: "text",
			label: rest?.label ?? "Icon",
			admin: {
				...rest?.admin,
				components: {
					...rest?.admin?.components,
					Field: {
						path: "/modules/cms/fields/IconSelectField#IconPickerFieldComponent",
					},
				},
			},
		},
		rest
	) as TextField;
}
