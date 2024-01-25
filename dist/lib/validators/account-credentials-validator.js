"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthCredentialsValidator = void 0;
var zod_1 = require("zod");
exports.AuthCredentialsValidator = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z
        .string()
        // .min(8, { message: "Passwiord must be at least 8 character long." }),
        .min(8, { message: "Hasło musi zawierać co najmniej 8 znaków." }),
});
