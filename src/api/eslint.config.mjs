import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs", // CommonJS (require/export)
      ecmaVersion: "latest",
      globals: { ...globals.browser, ...globals.node }, // Support global variables
    },
    rules: {
      "semi": ["error", "always"], // Wajib pakai titik koma
      "quotes": ["error", "double"], // Pakai kutip ganda
      "no-unused-vars": "warn", // Peringatkan variabel tidak terpakai
      "no-console": "off", // Izinkan console.log
    },
  },
  pluginJs.configs.recommended,
]
