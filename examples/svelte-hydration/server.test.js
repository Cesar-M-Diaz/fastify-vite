import { join, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { beforeAll, afterAll, assert, expect, test } from 'vitest'
import { makeSSRBuildTest, makeIndexTest } from '../test-factories.js'
import { main } from './server.js'

const cwd = dirname(fileURLToPath(import.meta.url))

test('build production bundle', makeSSRBuildTest({ cwd, clientModules: 25, serverModules: 23 }))

// These tests are currently failing due to an issue integrating
// @sveltejs/vite-plugin-svelte and Vitest.
//
// test('render index page in production', makeIndexTest({ main }))
// test('render index page in development', makeIndexTest({ main, dev: true }))
