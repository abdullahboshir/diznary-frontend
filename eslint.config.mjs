import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // ✅ TypeScript strictness
      "@typescript-eslint/no-explicit-any": "error", // disallow "any"
      "@typescript-eslint/explicit-function-return-type": "warn", // functions must declare return type
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // avoid unused vars
      "@typescript-eslint/consistent-type-imports": "error", // enforce import type { ... }
      "@typescript-eslint/no-inferrable-types": "warn", // avoid redundant type annotations
      "@typescript-eslint/no-non-null-assertion": "warn", // discourage !
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }], // enforce simple array type: string[]
      "@typescript-eslint/ban-types": [
        "error",
        {
          types: {
            Object: { message: "Use {} or Record<string, unknown> instead" },
            String: { message: "Use string instead" },
            Number: { message: "Use number instead" },
            Boolean: { message: "Use boolean instead" },
          },
        },
      ],

      // ✅ General JS/TS best practices
      "eqeqeq": ["error", "always"], // enforce ===
      "no-console": ["warn", { allow: ["warn", "error"] }], // discourage console.log
      "prefer-const": "error", // use const when possible
      "no-var": "error", // disallow var
    },
  },
];

export default eslintConfig;
