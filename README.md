# Issue

Cannot build a SvelteKit app with a web worker using the adapter static anymore.

> rendering chunks (8)...The emitted file "vite-manifest.json" overwrites a previously emitted file of the same name.
> [vite-plugin-sveltekit-compile] Cannot read properties of undefined (reading 'file')
> ✓ built in 259ms
> error during build:
> TypeError: Cannot read properties of undefined (reading 'file')
> at file:///Users/daviddalbusco/projects/lab/my-project-webworker/node_modules/@sveltejs/kit/src/exports/vite/build/build_server.js:74:83
> at Array.forEach (<anonymous>)
> at build_server_nodes (file:///Users/daviddalbusco/projects/lab/my-project-webworker/node_modules/@sveltejs/kit/src/exports/vite/build/build_server.js:32:22)
> at Object.handler (file:///Users/daviddalbusco/projects/lab/my-project-webworker/node_modules/@sveltejs/kit/src/exports/vite/index.js:683:5)
> at file:///Users/daviddalbusco/projects/lab/my-project-webworker/node_modules/rollup/dist/es/shared/node-entry.js:24395:40
> at async PluginDriver.hookParallel (file:///Users/daviddalbusco/projects/lab/my-project-webworker/node_modules/rollup/dist/es/shared/node-entry.js:24317:17)
> at async file:///Users/daviddalbusco/projects/lab/my-project-webworker/node_modules/rollup/dist/es/shared/node-entry.js:25678:13
> at async catchUnfinishedHookActions (file:///Users/daviddalbusco/projects/lab/my-project-webworker/node_modules/rollup/dist/es/shared/node-entry.js:24758:20)
> at async build (file:///Users/daviddalbusco/projects/lab/my-project-webworker/node_modules/vite/dist/node/chunks/dep-79892de8.js:46246:22)
> at async CAC.<anonymous> (file:///Users/daviddalbusco/projects/lab/my-project-webworker/node_modules/vite/dist/node/cli.js:813:9)