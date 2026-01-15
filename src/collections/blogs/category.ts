import type { CollectionConfig } from "payload";

export const BlogCategories: CollectionConfig = {
    slug: "blog-categories",
    admin: {
        useAsTitle: "category",
    },

    fields: [
        {
            name: "category",
            label: "Category",
            type: "text",
            required: true,
            index: true,
        },
    ],
};
