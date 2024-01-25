"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
exports.Users = {
    slug: "users",
    // auth: false,
    auth: {
        verify: {
            generateEmailHTML: function (_a) {
                var token = _a.token;
                return "<a href='".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/autoryzacja?token=").concat(token, "'>Zweryfikuj sw\u00F3j email.");
                // return `<a href='${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}'>Verify account`;
            },
        },
    },
    access: {
        read: function () { return true; },
        create: function () { return true; },
    },
    fields: [
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
