[33mcommit 4b9173884a3dbba76bb7792b1ef4e748981d6292[m[33m ([m[1;36mHEAD -> [m[1;32mmain[m[33m, [m[1;31morigin/main[m[33m)[m
Author: MiguelRen <migueleduardorengel@gmail.com>
Date:   Fri Nov 4 22:12:49 2022 -0400

    primer commit de la tesis

[1mdiff --git a/.gitignore b/.gitignore[m
[1mnew file mode 100644[m
[1mindex 0000000..a547bf3[m
[1m--- /dev/null[m
[1m+++ b/.gitignore[m
[36m@@ -0,0 +1,24 @@[m
[32m+[m[32m# Logs[m
[32m+[m[32mlogs[m
[32m+[m[32m*.log[m
[32m+[m[32mnpm-debug.log*[m
[32m+[m[32myarn-debug.log*[m
[32m+[m[32myarn-error.log*[m
[32m+[m[32mpnpm-debug.log*[m
[32m+[m[32mlerna-debug.log*[m
[32m+[m
[32m+[m[32mnode_modules[m
[32m+[m[32mdist[m
[32m+[m[32mdist-ssr[m
[32m+[m[32m*.local[m
[32m+[m
[32m+[m[32m# Editor directories and files[m
[32m+[m[32m.vscode/*[m
[32m+[m[32m!.vscode/extensions.json[m
[32m+[m[32m.idea[m
[32m+[m[32m.DS_Store[m
[32m+[m[32m*.suo[m
[32m+[m[32m*.ntvs*[m
[32m+[m[32m*.njsproj[m
[32m+[m[32m*.sln[m
[32m+[m[32m*.sw?[m
[1mdiff --git a/.vscode/extensions.json b/.vscode/extensions.json[m
[1mnew file mode 100644[m
[1mindex 0000000..a7cea0b[m
[1m--- /dev/null[m
[1m+++ b/.vscode/extensions.json[m
[36m@@ -0,0 +1,3 @@[m
[32m+[m[32m{[m
[32m+[m[32m  "recommendations": ["Vue.volar"][m
[32m+[m[32m}[m
[1mdiff --git a/README.md b/README.md[m
[1mnew file mode 100644[m
[1mindex 0000000..02124a7[m
[1m--- /dev/null[m
[1m+++ b/README.md[m
[36m@@ -0,0 +1,7 @@[m
[32m+[m[32m# Vue 3 + Vite[m
[32m+[m
[32m+[m[32mThis template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.[m
[32m+[m
[32m+[m[32m## Recommended IDE Setup[m
[32m+[m
[32m+[m[32m- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)[m
[1mdiff --git a/index.html b/index.html[m
[1mnew file mode 100644[m
[1mindex 0000000..4276347[m
[1m--- /dev/null[m
[1m+++ b/index.html[m
[36m@@ -0,0 +1,16 @@[m
[32m+[m[32m<!DOCTYPE html>[m
[32m+[m[32m<html lang="en">[m
[32m+[m[32m  <head>[m
[32m+[m[32m    <meta charset="UTF-8" />[m
[32m+[m[32m    <link rel="icon" type="image/svg+xml" href="/src/assets/logoMusical.png" />[m
[32m+[m[41m    [m
[32m+[m
[32m+[m[41m    [m
[32m+[m[32m    <meta name="viewport" content="width=device-width, initial-scale=1.0" />[m
[32m+[m[32m    <title>Nuñez Romberg</title>[m
[32m+[m[32m  </head>[m
[32m+[m[32m  <body>[m
[32m+[m[32m    <div id="app"></div>[m
[32m+[m[32m    <script type="module" src="/src/main.js"></script>[m
[32m+[m[32m  </body>[m
[32m+[m[32m</html>[m
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mnew file mode 100644[m
[1mindex 0000000..4977549[m
[1m--- /dev/null[m
[1m+++ b/package-lock.json[m
[36m@@ -0,0 +1,2108 @@[m
[32m+[m[32m{[m
[32m+[m[32m  "name": "vite-tesis-project",[m
[32m+[m[32m  "version": "0.0.0",[m
[32m+[m[32m  "lockfileVersion": 2,[m
[32m+[m[32m  "requires": true,[m
[32m+[m[32m  "packages": {[m
[32m+[m[32m    "": {[m
[32m+[m[32m      "name": "vite-tesis-project",[m
[32m+[m[32m      "version": "0.0.0",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@popperjs/core": "^2.11.6",[m
[32m+[m[32m        "axios": "^1.1.3",[m
[32m+[m[32m        "bootstrap": "^5.2.2",[m
[32m+[m[32m        "bootstrap-vue": "^2.23.1",[m
[32m+[m[32m        "vue": "^3.2.41",[m
[32m+[m[32m        "vue-axios": "^3.5.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "devDependencies": {[m
[32m+[m[32m        "@vitejs/plugin-vue": "^3.2.0",[m
[32m+[m[32m        "sass": "^1.55.0",[m
[32m+[m[32m        "vite": "^3.2.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/parser": {[m
[32m+[m[32m      "version": "7.20.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.20.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-hp0AYxaZJhxULfM1zyp7Wgr+pSUKBcP3M+PHnSzWGdXOzg/kHWIgiUWARvubhUKGOEw3xqY4x+lyZ9ytBVcELw==",[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "parser": "bin/babel-parser.js"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@esbuild/android-arm": {[m
[32m+[m[32m      "version": "0.15.12",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.15.12.tgz",[m
[32m+[m[32m      "integrity": "sha512-IC7TqIqiyE0MmvAhWkl/8AEzpOtbhRNDo7aph47We1NbE5w2bt/Q+giAhe0YYeVpYnIhGMcuZY92qDK6dQauvA==",[m
[32m+[m[32m      "cpu": [[m
[32m+[m[32m        "arm"[m
[32m+[m[32m      ],[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "optional": true,[m
[32m+[m[32m      "os": [[m
[32m+[m[32m        "android"[m
[32m+[m[32m      ],[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=12"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@esbuild/linux-loong64": {[m
[32m+[m[32m      "version": "0.15.12",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.15.12.tgz",[m
[32m+[m[32m      "integrity": "sha512-tZEowDjvU7O7I04GYvWQOS4yyP9E/7YlsB0jjw1Ycukgr2ycEzKyIk5tms5WnLBymaewc6VmRKnn5IJWgK4eFw==",[m
[32m+[m[32m      "cpu": [[m
[32m+[m[32m        "loong64"[m
[32m+[m[32m      ],[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "optional": true,[m
[32m+[m[32m      "os": [[m
[32m+[m[32m        "linux"[m
[32m+[m[32m      ],[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=12"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@nuxt/opencollective": {[m
[32m+[m[32m      "version": "0.3.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@nuxt/opencollective/-/opencollective-0.3.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-6IKCd+gP0HliixqZT/p8nW3tucD6Sv/u/eR2A9X4rxT/6hXlMzA4GZQzq4d2qnBAwSwGpmKyzkyTjNjrhaA25A==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "chalk": "^4.1.0",[m
[32m+[m[32m        "consola": "^2.15.0",[m
[32m+[m[32m        "node-fetch": "^2.6.7"[m
[32m+[m[32m      },[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "opencollective": "bin/opencollective.js"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=8.0.0",[m
[32m+[m[32m        "npm": ">=5.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@popperjs/core": {[m
[32m+[m[32m      "version": "2.11.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@popperjs/core/-/core-2.11.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-50/17A98tWUfQ176raKiOGXuYpLyyVMkxxG6oylzL3BPOlA6ADGdK7EYunSa4I064xerltq9TGXs8HmOk5E+vw==",[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "type": "opencollective",[m
[32m+[m[32m        "url": "https://opencollective.com/popperjs"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@vitejs/plugin-vue": {[m
[32m+[m[32m      "version": "3.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@vitejs/plugin-vue/-/plugin-vue-3.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-E0tnaL4fr+qkdCNxJ+Xd0yM31UwMkQje76fsDVBBUCoGOUPexu2VDUYHL8P4CwV+zMvWw6nlRw19OnRKmYAJpw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": "^14.18.0 || >=16.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "vite": "^3.0.0",[m
[32m+[m[32m        "vue": "^3.2.25"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@vue/compiler-core": {[m
[32m+[m[32m      "version": "3.2.41",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@vue/compiler-core/-/compiler-core-3.2.41.tgz",[m
[32m+[m[32m      "integrity": "sha512-oA4mH6SA78DT+96/nsi4p9DX97PHcNROxs51lYk7gb9Z4BPKQ3Mh+BLn6CQZBw857Iuhu28BfMSRHAlPvD4vlw==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/parser": "^7.16.4",[m
[32m+[m[32m        "@vue/shared": "3.2.41",[m
[32m+[m[32m        "estree-walker": "^2.0.2",[m
[32m+[m[32m        "source-map": "^0.6.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@vue/compiler-dom": {[m
[32m+[m[32m      "version": "3.2.41",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@vue/compiler-dom/-/compiler-dom-3.2.41.tgz",[m
[32m+[m[32m      "integrity": "sha512-xe5TbbIsonjENxJsYRbDJvthzqxLNk+tb3d/c47zgREDa/PCp6/Y4gC/skM4H6PIuX5DAxm7fFJdbjjUH2QTMw==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@vue/compiler-core": "3.2.41",[m
[32m+[m[32m        "@vue/shared": "3.2.41"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@vue/compiler-sfc": {[m
[32m+[m[32m      "version": "3.2.41",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@vue/compiler-sfc/-/compiler-sfc-3.2.41.tgz",[m
[32m+[m[32m      "integrity": "sha512-+1P2m5kxOeaxVmJNXnBskAn3BenbTmbxBxWOtBq3mQTCokIreuMULFantBUclP0+KnzNCMOvcnKinqQZmiOF8w==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/parser": "^7.16.4",[m
[32m+[m[32m        "@vue/compiler-core": "3.2.41",[m
[32m+[m[32m        "@vue/compiler-dom": "3.2.41",[m
[32m+[m[32m        "@vue/compiler-ssr": "3.2.41",[m
[32m+[m[32m        "@vue/reactivity-transform": "3.2.41",[m
[32m+[m[32m        "@vue/shared": "3.2.41",[m
[32m+[m[32m        "estree-walker": "^2.0.2",[m
[32m+[m[32m        "magic-string": "^0.25.7",[m
[32m+[m[32m        "postcss": "^8.1.10",[m
[32m+[m[32m        "source-map": "^0.6.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@vue/compiler-ssr": {[m
[32m+[m[32m      "version": "3.2.41",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@vue/compiler-ssr/-/compiler-ssr-3.2.41.tgz",[m
[32m+[m[32m      "integrity": "sha512-Y5wPiNIiaMz/sps8+DmhaKfDm1xgj6GrH99z4gq2LQenfVQcYXmHIOBcs5qPwl7jaW3SUQWjkAPKMfQemEQZwQ==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@vue/compiler-dom": "3.2.41",[m
[32m+[m[32m        "@vue/shared": "3.2.41"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@vue/reactivity": {[m
[32m+[m[32m      "version": "3.2.41",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@vue/reactivity/-/reactivity-3.2.41.tgz",[m
[32m+[m[32m      "integrity": "sha512-9JvCnlj8uc5xRiQGZ28MKGjuCoPhhTwcoAdv3o31+cfGgonwdPNuvqAXLhlzu4zwqavFEG5tvaoINQEfxz+l6g==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@vue/shared": "3.2.41"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@vue/reactivity-transform": {[m
[32m+[m[32m      "version": "3.2.41",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@vue/reactivity-transform/-/reactivity-transform-3.2.41.tgz",[m
[32m+[m[32m      "integrity": "sha512-mK5+BNMsL4hHi+IR3Ft/ho6Za+L3FA5j8WvreJ7XzHrqkPq8jtF/SMo7tuc9gHjLDwKZX1nP1JQOKo9IEAn54A==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/parser": "^7.16.4",[m
[32m+[m[32m        "@vue/compiler-core": "3.2.41",[m
[32m+[m[32m        "@vue/shared": "3.2.41",[m
[32m+[m[32m        "estree-walker": "^2.0.2",[m
[32m+[m[32m        "magic-string": "^0.25.7"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@vue/runtime-core": {[m
[32m+[m[32m      "version": "3.2.41",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@vue/runtime-core/-/runtime-core-3.2.41.tgz",[m
[32m+[m[32m      "integrity": "sha512-0LBBRwqnI0p4FgIkO9q2aJBBTKDSjzhnxrxHYengkAF6dMOjeAIZFDADAlcf2h3GDALWnblbeprYYpItiulSVQ==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@vue/reactivity": "3.2.41",[m
[32m+[m[32m        "@vue/shared": "3.2.41"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@vue/runtime-dom": {[m
[32m+[m[32m      "version": "3.2.41",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@vue/runtime-dom/-/runtime-dom-3.2.41.tgz",[m
[32m+[m[32m      "integrity": "sha512-U7zYuR1NVIP8BL6jmOqmapRAHovEFp7CSw4pR2FacqewXNGqZaRfHoNLQsqQvVQ8yuZNZtxSZy0FFyC70YXPpA==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@vue/runtime-core": "3.2.41",[m
[32m+[m[32m        "@vue/shared": "3.2.41",[m
[32m+[m[32m        "csstype": "^2.6.8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@vue/server-renderer": {[m
[32m+[m[32m      "version": "3.2.41",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@vue/server-renderer/-/server-renderer-3.2.41.tgz",[m
[32m+[m[32m      "integrity": "sha512-7YHLkfJdTlsZTV0ae5sPwl9Gn/EGr2hrlbcS/8naXm2CDpnKUwC68i1wGlrYAfIgYWL7vUZwk2GkYLQH5CvFig==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@vue/compiler-ssr": "3.2.41",[m
[32m+[m[32m        "@vue/shared": "3.2.41"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "vue": "3.2.41"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@vue/shared": {[m
[32m+[m[32m      "version": "3.2.41",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@vue/shared/-/shared-3.2.41.tgz",[m
[32m+[m[32m      "integrity": "sha512-W9mfWLHmJhkfAmV+7gDjcHeAWALQtgGT3JErxULl0oz6R6+3ug91I7IErs93eCFhPCZPHBs4QJS7YWEV7A3sxw=="[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/ansi-styles": {[m
[32m+[m[32m      "version": "4.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "color-convert": "^2.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=8"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://github.com/chalk/ansi-styles?sponsor=1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/anymatch": {[m
[32m+[m[32m      "version": "3.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "normalize-path": "^3.0.0",[m
[32m+[m[32m        "picomatch": "^2.0.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/asynckit": {[m
[32m+[m[32m      "version": "0.4.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q=="[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/axios": {[m
[32m+[m[32m      "version": "1.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/axios/-/axios-1.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-00tXVRwKx/FZr/IDVFt4C+f9FYairX517WoGCL6dpOntqLkZofjhu43F/Xl44UOpqa+9sLFDrG/XAnFsUYgkDA==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "follow-redirects": "^1.15.0",[m
[32m+[m[32m        "form-data": "^4.0.0",[m
[32m+[m[32m        "proxy-from-env": "^1.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m