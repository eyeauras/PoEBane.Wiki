# Changelog authoring and provenance

Russian is the source language. English translations mirror `ru/changelogs/<build>.md` at `changelogs/<build>.md` and carry `ai-translated`.

Use the EyeAuras release heading and version-only frontmatter title. A feature introduction is optional. Include it only when there is a substantial user-facing capability worth explaining; do not repeat the fixes list or add filler such as "maintenance release" or "no new features".

When a feature introduction is present, follow it with a horizontal rule and `## Bugfixes/Improvements`. Otherwise, place `## Bugfixes/Improvements` directly after the release heading, without an empty feature section or a horizontal rule. Use `* **[Component]** text` entries in both cases. Apply the same structure in RU and EN. Keep concrete changes in the component entries when removing an introduction.

These historical notes were authored on 2026-09-08. Frontmatter dates record the successful release publication time in UTC. The release feed was checked at https://files.eyeauras.net/poebane/alpha/RELEASES-LIST.

The first entry is 0.2.93, the first traceable successful publication after the requested 0.2.72 starting point. Packages 0.2.72–0.2.75 exist in the feed, but no reliable source revision was established for them, so they are omitted by agreement. There were no Git tags in the inspected source repository. The 0.2.93 entry is an included-capabilities baseline rather than a claim that all listed features first appeared in that release. Later entries use changes since the preceding published release. Unpublished build numbers are omitted.

| Version | Published UTC | Source revision | TeamCity publication |
| --- | --- | --- | --- |
| 0.2.93 | 20260905T005932+0000 | [7bc5ca643a3d9695fd55b1f4c8e50edc6a267188](https://github.com/eyeauras/PoEBane.Rust/commit/7bc5ca643a3d9695fd55b1f4c8e50edc6a267188) | [Build 31322](https://build.eyeauras.net/viewLog.html?buildId=31322) |
| 0.2.102 | 20260905T050505+0000 | [fce0eb084f5141c816daa3def628c8c3ce896119](https://github.com/eyeauras/PoEBane.Rust/commit/fce0eb084f5141c816daa3def628c8c3ce896119) | [Build 31352](https://build.eyeauras.net/viewLog.html?buildId=31352) |
| 0.2.107 | 20260905T102759+0000 | [f1d1d647104967403aa2ad224d0114dcf8afc9cc](https://github.com/eyeauras/PoEBane.Rust/commit/f1d1d647104967403aa2ad224d0114dcf8afc9cc) | [Build 31367](https://build.eyeauras.net/viewLog.html?buildId=31367) |
| 0.2.116 | 20260905T123719+0000 | [29bd6a91ab4442437e60b5d0fc8dd277b1d57586](https://github.com/eyeauras/PoEBane.Rust/commit/29bd6a91ab4442437e60b5d0fc8dd277b1d57586) | [Build 31386](https://build.eyeauras.net/viewLog.html?buildId=31386) |
| 0.2.118 | 20260905T133537+0000 | [1997d8819e9b8410ed11caefe52e006aa666cb10](https://github.com/eyeauras/PoEBane.Rust/commit/1997d8819e9b8410ed11caefe52e006aa666cb10) | [Build 31397](https://build.eyeauras.net/viewLog.html?buildId=31397) |
| 0.2.121 | 20260905T135047+0000 | [dddff3627a0158dcf6a901c2be2c16aa3f115fff](https://github.com/eyeauras/PoEBane.Rust/commit/dddff3627a0158dcf6a901c2be2c16aa3f115fff) | [Build 31400](https://build.eyeauras.net/viewLog.html?buildId=31400) |
| 0.2.130 | 20260905T191412+0000 | [e747d5a05e94d3330e37fd0e1a9366569ccab859](https://github.com/eyeauras/PoEBane.Rust/commit/e747d5a05e94d3330e37fd0e1a9366569ccab859) | [Build 31422](https://build.eyeauras.net/viewLog.html?buildId=31422) |
| 0.2.131 | 20260905T224947+0000 | [9aa62ced58410023e8ffde6e62faeb2c8a3f98df](https://github.com/eyeauras/PoEBane.Rust/commit/9aa62ced58410023e8ffde6e62faeb2c8a3f98df) | [Build 31425](https://build.eyeauras.net/viewLog.html?buildId=31425) |
| 0.2.132 | 20260906T001957+0000 | [c94db3361765bdfdc552ed94246cfe7ef9837e4c](https://github.com/eyeauras/PoEBane.Rust/commit/c94db3361765bdfdc552ed94246cfe7ef9837e4c) | [Build 31430](https://build.eyeauras.net/viewLog.html?buildId=31430) |
| 0.2.133 | 20260906T013838+0000 | [ae3670ba9e1e6b98e20f487789cb97f3a55a3310](https://github.com/eyeauras/PoEBane.Rust/commit/ae3670ba9e1e6b98e20f487789cb97f3a55a3310) | [Build 31437](https://build.eyeauras.net/viewLog.html?buildId=31437) |
| 0.2.135 | 20260906T133332+0000 | [17532d5d113615f6af52e22a92d4a30c8b348b42](https://github.com/eyeauras/PoEBane.Rust/commit/17532d5d113615f6af52e22a92d4a30c8b348b42) | [Build 31467](https://build.eyeauras.net/viewLog.html?buildId=31467) |
| 0.2.136 | 20260906T150534+0000 | [38db841f1ff96bfbd13c42088218a1f5a83ea049](https://github.com/eyeauras/PoEBane.Rust/commit/38db841f1ff96bfbd13c42088218a1f5a83ea049) | [Build 31472](https://build.eyeauras.net/viewLog.html?buildId=31472) |
| 0.2.137 | 20260906T182911+0000 | [3a4325404ad6ee34b3645ad78d7ffa4c62404666](https://github.com/eyeauras/PoEBane.Rust/commit/3a4325404ad6ee34b3645ad78d7ffa4c62404666) | [Build 31475](https://build.eyeauras.net/viewLog.html?buildId=31475) |
| 0.2.138 | 20260907T015351+0000 | [765d4a810fed7709f6fe454d1caa6c14fed5240b](https://github.com/eyeauras/PoEBane.Rust/commit/765d4a810fed7709f6fe454d1caa6c14fed5240b) | [Build 31482](https://build.eyeauras.net/viewLog.html?buildId=31482) |
| 0.2.140 | 20260907T121915+0000 | [0de3d6a53a1e30ba5d3edd3968f924338fd92b0b](https://github.com/eyeauras/PoEBane.Rust/commit/0de3d6a53a1e30ba5d3edd3968f924338fd92b0b) | [Build 31487](https://build.eyeauras.net/viewLog.html?buildId=31487) |
| 0.2.141 | 20260907T145708+0000 | [cc867e3b32e4b523a0379c3f257ebe8f940afa93](https://github.com/eyeauras/PoEBane.Rust/commit/cc867e3b32e4b523a0379c3f257ebe8f940afa93) | [Build 31490](https://build.eyeauras.net/viewLog.html?buildId=31490) |
| 0.2.142 | 20260907T180744+0000 | [2a85a72725cbeaf62f6db2d584fa112fef2bf88c](https://github.com/eyeauras/PoEBane.Rust/commit/2a85a72725cbeaf62f6db2d584fa112fef2bf88c) | [Build 31493](https://build.eyeauras.net/viewLog.html?buildId=31493) |
| 0.2.143 | 20260908T002848+0000 | [76718b0cbaf23739305658b812c9f53821077d87](https://github.com/eyeauras/PoEBane.Rust/commit/76718b0cbaf23739305658b812c9f53821077d87) | [Build 31498](https://build.eyeauras.net/viewLog.html?buildId=31498) |
| 0.2.145 | 20260908T133541+0000 | [77037dacd8c9447de54e42aeca1e4c9435dbf890](https://github.com/eyeauras/PoEBane.Rust/commit/77037dacd8c9447de54e42aeca1e4c9435dbf890) | [Build 31503](https://build.eyeauras.net/viewLog.html?buildId=31503) |
| 0.2.146 | 20260908T145755+0000 | [d5648273965eeca23b79e28c981b424392926568](https://github.com/eyeauras/PoEBane.Rust/commit/d5648273965eeca23b79e28c981b424392926568) | [Build 31506](https://build.eyeauras.net/viewLog.html?buildId=31506) |
| 0.2.147 | 20260908T231224+0000 | [8e39f8fa3d9543e17d1d79da21c1debb53b9de58](https://github.com/eyeauras/PoEBane.Rust/commit/8e39f8fa3d9543e17d1d79da21c1debb53b9de58) | [Build 31509](https://build.eyeauras.net/viewLog.html?buildId=31509) |
| 0.2.149 | 20260909T104004+0000 | [e9b42d7e6d46c26bb666fd9a659933e9a748f82f](https://github.com/eyeauras/PoEBane.Rust/commit/e9b42d7e6d46c26bb666fd9a659933e9a748f82f) | [Build 31517](https://build.eyeauras.net/viewLog.html?buildId=31517) |
