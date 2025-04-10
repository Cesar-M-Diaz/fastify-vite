import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  root: dirname(fileURLToPath(new URL(import.meta.url))),
  base: dirname(fileURLToPath(new URL(import.meta.url))),
  test: {
    testTimeout: 20000,
    threads: false,
  },
})
