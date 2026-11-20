# WebDroid

WebDroid is an experimental browser-based ARM emulator and constrained Android APK/DEX runner using Rust and WebAssembly.

## Current capabilities
- ARMv7 CPU emulation
- Browser-based framebuffer
- APK and DEX loading
- Limited Dalvik bytecode execution through HLE
- Basic HLE logging and text output
- Custom ROM and Linux kernel loading

## APK compatibility

This is NOT a full Android emulator.

Currently supported APK fixtures:
- testdata/hello.apk
- Single-DEX APKs without native libraries, using supported Dalvik instructions and limited HLE APIs.

General Play Store apps, JNI libraries, multidex, Google Play Services and full Android framework functionality are not supported.

See docs/SUPPORTED_APKS.md for details.

## Development

Requirements:
- Rust stable
- wasm32-unknown-unknown target
- wasm-pack
- Node.js and npm

Install dependencies:

npm ci

Build:

npm run build

Run development server:

npm run dev

Run Rust tests:

cargo test --lib

## Credits and license

WebDroid is based on the NekoDroid project:
https://github.com/nishal21/NekoDroid

Original project copyright and MIT license are retained in LICENSE.

WebDroid is an experimental derivative project. It is not affiliated with the Android Open Source Project or Google.
