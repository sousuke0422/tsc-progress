import { aiou } from '@aiou/eslint-config'
import { fixupConfigRules } from '@eslint/compat'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // @ts-ignore
  ...fixupConfigRules(aiou()),

  globalIgnores([
    'node_modules',
    'jest',
    'lib',
    'test/fixtures',
  ]),
])
