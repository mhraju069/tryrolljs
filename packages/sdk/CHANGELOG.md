# @tryrolljs/sdk

## 1.3.1

### Patch Changes

- [#241](https://github.com/TuringAdvisoryGroup/tryrolljs/pull/241) [`bf6c1fd`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/bf6c1fd5fd5187a660140615f02876e274171ea7) Thanks [@teimurjan](https://github.com/teimurjan)! - Clear sdk when not enough data to refresh

## 1.3.0

### Minor Changes

- [#226](https://github.com/TuringAdvisoryGroup/tryrolljs/pull/226) [`bd99ac0`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/bd99ac011b2824ee66f6fa17bf5c496d53f25bc6) Thanks [@teimurjan](https://github.com/teimurjan)! - Improved error handling, added session status

## 1.2.1

### Patch Changes

- [#216](https://github.com/TuringAdvisoryGroup/tryrolljs/pull/216) [`e5de661`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/e5de661c5ddcc3f657eb72446cc3af2ba5e755ad) Thanks [@diegonzs-roll](https://github.com/diegonzs-roll)! - - Added get user token balance endpoint on api package
  - Created an enum for scope property on sdk packge
  - Included the scope propery when requesting a client token.
  - Unwrap response un api call
  - Get correct error information from the response on the api-client

## 1.2.0

### Minor Changes

- [#215](https://github.com/TuringAdvisoryGroup/tryrolljs/pull/215) [`8382ee9`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/8382ee9229bffddef3c16e13289ed6fcdd11b8c5) Thanks [@teimurjan](https://github.com/teimurjan)! - - Added native session manager
  - Upgraded to react-native 0.71.5

### Patch Changes

- [#213](https://github.com/TuringAdvisoryGroup/tryrolljs/pull/213) [`b9853b6`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/b9853b6145b6b8eee2c4936629e2490c45954778) Thanks [@diegonzs-roll](https://github.com/diegonzs-roll)! - - Fix requestClientToken method

## 1.1.0

### Minor Changes

- [#201](https://github.com/TuringAdvisoryGroup/tryrolljs/pull/201) [`a754219`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/a7542197dc0fc3574d22411091ca5f4ebc32fd5a) Thanks [@teimurjan](https://github.com/teimurjan)! - Change client credentials method to client_secret_post

## 1.0.0

### Major Changes

- [#196](https://github.com/TuringAdvisoryGroup/tryrolljs/pull/196) [`0085b88`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/0085b88bbbe7e36f018db79712920f6ef7f5f68f) Thanks [@teimurjan](https://github.com/teimurjan)! - Added support for client credentials authorization via SDK package

  - Renamed AuthSDK to SDK
  - Introduced ClientSDK
  - Allowed API client to accept both SDK
  - Added an example of usage in Node

## 0.3.0

### Minor Changes

- [#182](https://github.com/TuringAdvisoryGroup/tryrolljs/pull/182) [`289c3a4`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/289c3a4042c7fb5ed8943c6cd49d8d7d5e431cd5) Thanks [@teimurjan](https://github.com/teimurjan)! - Migrate to PKCE flow

## 0.2.1

### Patch Changes

- [#178](https://github.com/TuringAdvisoryGroup/tryrolljs/pull/178) [`e3c3d72`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/e3c3d7245ea459704557da0b3f3efc73859945b2) Thanks [@teimurjan](https://github.com/teimurjan)! - Pass form urlencoded data to refresh tokens request

## 0.2.0

### Minor Changes

- [#174](https://github.com/TuringAdvisoryGroup/tryrolljs/pull/174) [`e054daa`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/e054daa7b9b1df1af1a21ddffb4d40b1f666dcd2) Thanks [@teimurjan](https://github.com/teimurjan)! - - Removed parsers, handlers & all the unnecessary configurable options for sdk
  - Extracted API client to @tryrolljs/api-client package to keep API package for endpoint calls only
  - Added @tryrolljs/session-manager package to handle session-related actions in React web apps

## 0.1.4

### Patch Changes

- [#165](https://github.com/TuringAdvisoryGroup/tryrolljs/pull/165) [`85922ce`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/85922ceedc8671328a82a27a2acbb4a6ffb1cd91) Thanks [@teimurjan](https://github.com/teimurjan)! - Use removeItem instead of setItem to undefined in storage

## 0.1.3

### Patch Changes

- [#163](https://github.com/TuringAdvisoryGroup/tryrolljs/pull/163) [`7ab6792`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/7ab6792f90c0bb450ea95ca0cfd5920cd7dd2058) Thanks [@teimurjan](https://github.com/teimurjan)! - Add missing redirect url to auth sdk getLogOutUrl

## 0.1.2

### Patch Changes

- Updated dependencies [[`943c781`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/943c781028b95ac7b5da3e54fdae365eb252e566)]:
  - @tryrolljs/api@0.1.2

## 0.1.1

### Patch Changes

- Updated dependencies [[`2e0ac35`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/2e0ac356eaacf347dab4cfa8893f60c64986c6a9)]:
  - @tryrolljs/api@0.1.1

## 0.1.0

### Minor Changes

- [#150](https://github.com/TuringAdvisoryGroup/tryrolljs/pull/150) [`459a103`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/459a1031a9794f9300ea5ddd2113a26d68494fcb) Thanks [@teimurjan](https://github.com/teimurjan)! - Update API, add types exports, included login & logout URLs to auth sdk

### Patch Changes

- Updated dependencies [[`459a103`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/459a1031a9794f9300ea5ddd2113a26d68494fcb)]:
  - @tryrolljs/api@0.1.0

## 0.0.11

### Patch Changes

- [#144](https://github.com/TuringAdvisoryGroup/tryrolljs/pull/144) [`125611e`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/125611ef197e3f2368b90885d362da3c5fc8f5f9) Thanks [@teimurjan](https://github.com/teimurjan)! - Fix refresh condition

## 0.0.10

### Patch Changes

- [#141](https://github.com/TuringAdvisoryGroup/tryrolljs/pull/141) [`9f6e363`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/9f6e3637330ac931b08fa1d21ab9d05cb18a6893) Thanks [@teimurjan](https://github.com/teimurjan)! - Update engines to match any 16 node

- Updated dependencies [[`9f6e363`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/9f6e3637330ac931b08fa1d21ab9d05cb18a6893)]:
  - @tryrolljs/api@0.0.10

## 0.0.9

### Patch Changes

- Updated dependencies [[`0236b9c`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/0236b9c45160cdebfcbf8151279e6416b398f8d0)]:
  - @tryrolljs/api@0.0.9

## 0.0.8

### Patch Changes

- Updated dependencies [[`1902a60`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/1902a605bc5337ac1a572aa658a86649c2ca963b)]:
  - @tryrolljs/api@0.0.8

## 0.0.7

### Patch Changes

- Updated dependencies [[`8a5126f`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/8a5126fef714d7bdbc458662689dc31fa46a8cfb)]:
  - @tryrolljs/api@0.0.7

## 0.0.6

### Patch Changes

- [#128](https://github.com/TuringAdvisoryGroup/tryrolljs/pull/128) [`1a0b73f`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/1a0b73f4f02adb19688580f9d0633b3023ed5d2c) Thanks [@teimurjan](https://github.com/teimurjan)! - Fix expiration check

- Updated dependencies [[`1a0b73f`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/1a0b73f4f02adb19688580f9d0633b3023ed5d2c)]:
  - @tryrolljs/api@0.0.6

## 0.0.5

### Patch Changes

- Updated dependencies [[`8c5844e`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/8c5844ee42c97a5243e67952b7a3fe743ba11570)]:
  - @tryrolljs/api@0.0.5

## 0.0.4

### Patch Changes

- [#114](https://github.com/TuringAdvisoryGroup/tryrolljs/pull/114) [`5a81f57`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/5a81f5731e59ef8fe69a141e080f4a7f9717d9f4) Thanks [@teimurjan](https://github.com/teimurjan)! - Update error handling

- Updated dependencies [[`5a81f57`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/5a81f5731e59ef8fe69a141e080f4a7f9717d9f4)]:
  - @tryrolljs/api@0.0.4

## 0.0.3

### Patch Changes

- Updated dependencies [[`a3cf603`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/a3cf603cb3fe83ba6b6800c99ac5186c106619b2)]:
  - @tryrolljs/api@0.0.3

## 0.0.2

### Patch Changes

- [#106](https://github.com/TuringAdvisoryGroup/tryrolljs/pull/106) [`acdbebf`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/acdbebfa9669a894a96c522fab9801aec5e167e9) Thanks [@teimurjan](https://github.com/teimurjan)! - Add API client

- Updated dependencies [[`acdbebf`](https://github.com/TuringAdvisoryGroup/tryrolljs/commit/acdbebfa9669a894a96c522fab9801aec5e167e9)]:
  - @tryrolljs/api@0.0.2
