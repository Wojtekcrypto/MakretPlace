import { PrimaryActionEmailHtml } from "../components/emails/PrimaryActionEmail";
import { Access, CollectionConfig } from "payload/types";

const adminsAndUser: Access = ({ req: { user } }) => {
  if (user.role === "admin") return true;

  return {
    id: {
      equals: user.id,
    },
  };
};

export const Users: CollectionConfig = {
  slug: "users",
  // auth: false,
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
        return PrimaryActionEmailHtml({
          actionLabel: "Zweryfikuj swój email.",
          buttonText: "Zweryfikuj Konto",
          href: `${process.env.NEXT_PUBLIC_SERVER_URL}/autoryzacja?token=${token}`,
        });
        // return `<a href='${process.env.NEXT_PUBLIC_SERVER_URL}/autoryzacja?token=${token}'>Zweryfikuj swój email.`;
        // return `<a href='${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}'>Verify account`;
      },
    },
  },
  access: {
    read: adminsAndUser,
    create: () => true,
    update: ({ req }) => req.user.role === "admin",
    delete: ({ req }) => req.user.role === "admin",
  },
  admin: {
    hidden: ({ user }) => user.role !== "admin ",
    defaultColumns: ["id"],
  },
  fields: [
    {
      name: "products",
      label: "Produkty",
      admin: {
        condition: () => false,
      },
      type: "relationship",
      relationTo: "products",
      hasMany: true,
    },
    {
      name: "product_files",
      label: "Pliki Produktów",
      admin: {
        condition: () => false,
      },
      type: "relationship",
      relationTo: "product_files",
      hasMany: true,
    },
    // {
    //   name: "role",
    //   defaultValue: "user",
    //   required: true,
    //   //   admin:{},
    //   type: "select",
    //   options: [
    //     { label: "Admin", value: "admin" },
    //     { label: "User", value: "user" },
    //   ],
    // },
    {
      name: "role",
      defaultValue: "user",
      required: true,
      //   admin: {
      //     condition: () => false,
      //   },
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Użytkownik", value: "user" },
      ],
    },
  ],
};
