import { dirname } from "path"

import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url),
__dirname = dirname(__filename),

compat = new FlatCompat({baseDirectory:__dirname}), 
eslintConfig = [...compat.extends("next/core-web-vitals", "next/typescript")]

export default eslintConfig
