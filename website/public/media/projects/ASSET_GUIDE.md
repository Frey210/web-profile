# Asset Guide

Upload aset visual project ke folder sesuai slug project.

Struktur tiap project:

```text
cover/        gambar utama untuk card dan hero
screenshots/  screenshot aplikasi, dashboard, output software
diagrams/     diagram arsitektur, data flow, wiring, topologi
photos/       foto alat IoT, robot, panel, instalasi, proses testing
docs/         dokumen visual pendukung yang sudah aman dipublikasikan
```

Panduan lengkap per project ada di:

```text
docs/project-asset-guide.md
```

Contoh path untuk dipakai di `website/lib/content.ts`:

```ts
image: "/media/projects/thermal-camera/cover/cover.png",
screenshots: [
  "/media/projects/thermal-camera/screenshots/thermal-detection.png",
  "/media/projects/thermal-camera/diagrams/system-architecture.png",
  "/media/projects/thermal-camera/photos/thermal-camera-module.jpg"
]
```
