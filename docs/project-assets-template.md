# Template Aset Project

Gunakan folder `website/public/media/projects/<slug-project>/` untuk screenshot atau foto pendukung setiap project. File di dalam `public` bisa dipakai di kode dengan path `/media/projects/<slug-project>/<nama-file>`.

## Struktur yang Disarankan

```text
website/public/media/projects/
  aquanotes/
    cover.png
    dashboard.png
    device.png
    status-kolam.png
  ergoquipt/
    cover.png
    login.png
    home.png
    ready-test.png
  dento-smart/
    cover.png
    dashboard.png
    history.png
    login.png
  airport-project/
    cover.png
    commissioning-checklist.png
    network-rack.png
    qa-documentation.png
  monitoring-platform/
    cover.png
    grafana-dashboard.png
    service-health.png
    server-overview.png
  siwarga/
    cover.png
    report-list.png
    report-detail.png
    admin-dashboard.png
  thermal-camera/
    cover.png
    detection-view.png
    control-panel.png
  fire-fighting-robot/
    cover.png
    robot-body.png
    test-arena.png
  radiolink-iot/
    cover.png
    device-node.png
    telemetry-dashboard.png
```

## Spesifikasi File

- `cover.png`: gambar utama untuk card dan hero detail project. Rasio ideal `16:10`, minimal `1600x1000px`.
- Screenshot dashboard/interface: gunakan `png` atau `webp`, rasio `16:10` atau `16:9`, minimal `1400px` lebar.
- Foto hardware/perangkat: gunakan foto terang, tidak blur, objek memenuhi frame, minimal `1200px` lebar.
- Hindari nama file dengan spasi. Gunakan huruf kecil dan tanda hubung, contoh `service-health.png`.

## Cara Menghubungkan ke Data

Edit `website/lib/content.ts`, lalu isi:

```ts
image: "/media/projects/siwarga/cover.png",
screenshots: [
  "/media/projects/siwarga/report-list.png",
  "/media/projects/siwarga/report-detail.png",
  "/media/projects/siwarga/admin-dashboard.png"
]
```
