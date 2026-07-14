# Panduan Aset Visual Project

Panduan ini menjelaskan gambar, screenshot, diagram, foto alat, dan dokumen visual yang perlu disiapkan untuk melengkapi halaman project di web profile.

Lokasi upload utama:

```text
website/public/media/projects/<slug-project>/
```

File di dalam `website/public` dapat dipanggil dari kode menggunakan path:

```text
/media/projects/<slug-project>/<subfolder>/<nama-file>
```

## Struktur Folder

Setiap project sekarang punya struktur berikut:

```text
cover/        gambar utama untuk card dan hero project
screenshots/  tampilan aplikasi, dashboard, mobile app, Grafana, atau hasil software
diagrams/     diagram arsitektur, data flow, wiring, blok sistem, topologi
photos/       foto alat, perangkat IoT, robot, panel, instalasi, proses testing
docs/         dokumen visual pendukung seperti sertifikat, publikasi, test sheet, poster
```

## Standar Umum

- `cover/cover.png`: gambar utama. Rasio ideal `16:10`, minimal `1600x1000px`.
- Screenshot aplikasi: `png` atau `webp`, minimal `1400px` lebar, jangan blur.
- Diagram: `png`, `svg`, atau `webp`, latar gelap/terang boleh, pastikan teks terbaca.
- Foto alat: `jpg` atau `webp`, minimal `1200px` lebar, objek jelas dan tidak terlalu gelap.
- Nama file gunakan huruf kecil dan tanda hubung, contoh `dashboard-overview.png`.
- Hindari foto yang memuat data rahasia, kredensial, wajah orang tanpa izin, nomor tiket internal, IP publik, atau dokumen kontrak sensitif.

## Checklist Per Project

### Airport Electronic QA (`airport-project`)

Jenis project: critical infrastructure / QA commissioning.

Aset yang paling penting:

- `cover/cover.png`: foto terminal, ruang kontrol, panel jaringan, atau visual airport electronics yang aman dipublikasikan.
- `diagrams/system-scope.png`: diagram cakupan sistem Cisco, BHS PLC/SCADA, Fire Alarm, PA, dan HBS.
- `diagrams/qa-workflow.png`: alur Document Review -> FAT/SAT -> Inspection -> NCR -> Acceptance.
- `photos/network-rack.jpg`: foto rack/network cabinet yang tidak memperlihatkan informasi sensitif.
- `photos/scada-panel.jpg`: foto HMI/SCADA atau panel BHS jika boleh dipublikasikan.
- `photos/fire-alarm-panel.jpg`: foto panel FAS/Notifier jika aman.
- `docs/commissioning-checklist-redacted.png`: contoh checklist yang sudah disensor.
- `docs/test-evidence-redacted.png`: bukti FAT/SAT yang sudah disensor.

Catatan: untuk project airport, prioritaskan foto yang sudah disensor. Jangan upload layout keamanan bandara, IP address, nomor kontrak, atau dokumen internal yang tidak boleh publik.

### Aquanotes (`aquanotes`)

Jenis project: IoT aquaculture production platform.

Aset yang paling penting:

- `cover/cover.png`: gabungan dashboard + device sensor di tambak, atau screenshot dashboard utama.
- `screenshots/dashboard-overview.png`: dashboard status kolam.
- `screenshots/pond-detail.png`: halaman detail kolam dengan grafik sensor.
- `screenshots/device-management.png`: halaman perangkat atau daftar sensor node.
- `screenshots/mobile-home.png`: tampilan mobile app jika ada.
- `diagrams/iot-architecture.png`: ESP32 -> MQTT -> Backend -> Database -> Web/Mobile.
- `diagrams/data-flow.png`: alur pembacaan sensor sampai alert.
- `photos/sensor-node.jpg`: foto box ESP32/sensor node.
- `photos/pond-installation.jpg`: foto pemasangan sensor di tambak.
- `photos/sensor-probes.jpg`: foto probe pH/DO/TDS/amonia.

Sudah ada aset lama:

- `/media/projects/aquanotes.png`
- `/media/projects/aquanotes/status-kolam.png`
- `/media/projects/aquanotes/dashboard.png`
- `/media/projects/aquanotes/device.png`

Kamu bisa tetap pakai yang lama, atau pindahkan bertahap ke folder baru.

### Ergoquipt (`ergoquipt`)

Jenis project: health tech / ergonomics measurement.

Aset yang paling penting:

- `cover/cover.png`: dashboard/admin atau foto perangkat ukur ergonomi.
- `screenshots/admin-dashboard.png`: dashboard admin.
- `screenshots/test-session.png`: halaman sesi pengujian.
- `screenshots/ready-test.png`: tampilan sebelum test.
- `screenshots/mobile-test.png`: tampilan mobile app jika ada.
- `diagrams/system-architecture.png`: ESP32 devices -> API -> Database -> Web/Mobile.
- `diagrams/measurement-flow.png`: reaction time, tympanic temperature, heart rate -> session result.
- `photos/reaction-device.jpg`: foto alat reaction time.
- `photos/tympanic-hr-device.jpg`: foto alat tympanic/heart-rate.
- `photos/testing-setup.jpg`: foto setup pengujian tanpa menampilkan wajah/subjek secara jelas.
- `docs/report-sample-redacted.png`: contoh output laporan yang sudah disensor.

Sudah ada aset lama:

- `/media/projects/ergoquipt.png`
- `/media/projects/ergoquipt/login.png`
- `/media/projects/ergoquipt/home.png`
- `/media/projects/ergoquipt/ready-test.png`

### Dento Smart (`dento-smart`)

Jenis project: healthcare IoT / dental equipment monitoring.

Aset yang paling penting:

- `cover/cover.png`: dashboard monitoring atau foto perangkat monitoring dental equipment.
- `screenshots/dashboard-overview.png`: dashboard utama.
- `screenshots/history-log.png`: histori pemakaian/status.
- `screenshots/login.png`: login jika ingin menunjukkan UI dasar.
- `screenshots/equipment-detail.png`: detail equipment atau sensor reading.
- `diagrams/system-architecture.png`: dental equipment -> ESP32 -> API -> DB -> dashboard.
- `diagrams/device-wiring.png`: diagram sensor dan ESP32 jika aman dipublikasikan.
- `photos/monitoring-module.jpg`: foto modul ESP32/sensor.
- `photos/clinic-installation.jpg`: foto instalasi di equipment, tanpa data pasien.
- `docs/api-docs.png`: screenshot Swagger/OpenAPI.

Sudah ada aset lama:

- `/media/projects/dento.png`
- `/media/projects/dento-smart/dashboard.png`
- `/media/projects/dento-smart/history.png`
- `/media/projects/dento-smart/login.png`

### Y-BOT Kinect SLAM (`ybot`)

Jenis project: robotics / research.

Aset yang paling penting:

- `cover/cover.png`: foto robot Y-BOT atau visual robot + map SLAM.
- `screenshots/rviz-map.png`: screenshot RViz/SLAM map.
- `screenshots/navigation-demo.png`: tampilan navigation stack atau terminal ROS jika rapi.
- `diagrams/robot-architecture.png`: Kinect -> Raspberry Pi ROS -> Arduino -> motor driver.
- `diagrams/slam-data-flow.png`: depth frame -> point cloud -> laser scan -> SLAM -> map.
- `photos/robot-front.jpg`: foto robot tampak depan.
- `photos/robot-electronics.jpg`: foto wiring/electronics.
- `photos/kinect-mount.jpg`: foto mounting Kinect.
- `docs/paper-preview.png`: screenshot judul paper/publikasi.
- `docs/thesis-poster.png`: poster atau slide ringkasan jika ada.

Sudah ada aset lama:

- `/media/projects/ybot.png`

### Monitoring Platform (`monitoring-platform`)

Jenis project: DevOps / observability.

Aset yang paling penting:

- `cover/cover.png`: screenshot Grafana/status page.
- `screenshots/grafana-overview.png`: dashboard utama Grafana.
- `screenshots/server-health.png`: CPU, RAM, disk, network metrics.
- `screenshots/docker-containers.png`: cAdvisor/container metrics.
- `screenshots/public-status-page.png`: public status page jika ada.
- `screenshots/alert-example-redacted.png`: contoh alert Telegram/Discord yang disensor.
- `diagrams/monitoring-architecture.png`: exporters -> Prometheus -> Grafana -> alerting.
- `diagrams/deployment-topology.png`: server, Docker, Nginx, Cloudflare Tunnel.
- `docs/prometheus-rule-redacted.png`: contoh alert rule yang aman.

Catatan: sensor informasi sensitif seperti hostname internal, IP public, token, nama client, dan URL private.

### SiWarga (`siwarga`)

Jenis project: civic technology web application.

Aset yang paling penting:

- `cover/cover.png`: dashboard admin atau tampilan daftar laporan.
- `screenshots/report-form.png`: form laporan warga.
- `screenshots/report-list.png`: daftar laporan.
- `screenshots/report-detail.png`: detail laporan dan status.
- `screenshots/admin-dashboard.png`: dashboard admin pemerintah.
- `screenshots/mobile-responsive.png`: tampilan mobile.
- `diagrams/app-architecture.png`: frontend -> backend API -> PostgreSQL -> admin dashboard.
- `diagrams/report-workflow.png`: citizen report -> validation -> assignment -> response -> resolved.
- `photos/user-testing.jpg`: foto testing/demo jika ada dan aman.
- `docs/demo-poster.png`: poster/demo slide jika ada.

### Bioassay Color Mapping (`bioassay`)

Jenis project: computer vision / aquaculture bioassay.

Aset yang paling penting:

- `cover/cover.png`: foto sampel air + visual hasil klasifikasi.
- `screenshots/classification-result.png`: output program/KNN classification.
- `screenshots/dataset-preview.png`: contoh dataset RGB atau plot.
- `screenshots/opencv-processing.png`: tampilan OpenCV/camera capture.
- `diagrams/processing-pipeline.png`: water sample -> RGB capture -> feature extraction -> KNN -> density class.
- `diagrams/model-workflow.png`: training dataset -> KNN model -> prediction.
- `photos/water-samples.jpg`: foto sampel air/plankton.
- `photos/rgb-sensor-setup.jpg`: foto TCS34725/camera setup.
- `docs/result-table.png`: tabel hasil pengujian atau akurasi.

Sudah ada aset lama:

- `/media/projects/bioassay.png`

### Thermal Camera AC Control (`thermal-camera`)

Jenis project: building automation / computer vision prototype.

Aset yang paling penting:

- `cover/cover.png`: visual thermal camera atau hasil heatmap occupancy.
- `screenshots/thermal-detection.png`: tampilan heatmap dengan deteksi manusia.
- `screenshots/opencv-mask.png`: threshold/blob detection.
- `screenshots/control-output.png`: log/control panel pengiriman perintah AC.
- `diagrams/system-architecture.png`: thermal camera -> Python/OpenCV -> detection -> AC control.
- `diagrams/control-logic.png`: occupied/vacant -> setpoint/control action.
- `photos/thermal-camera-module.jpg`: foto kamera thermal.
- `photos/raspberry-pi-setup.jpg`: foto compute setup.
- `photos/ac-control-hardware.jpg`: foto IR blaster/relay jika ada.
- `docs/demo-result.png`: hasil demo atau ringkasan penghematan energi.

### Fire Fighting Robot (`fire-fighting-robot`)

Jenis project: robotics competition / embedded system.

Aset yang paling penting:

- `cover/cover.png`: foto robot hexapod.
- `screenshots/code-or-debug.png`: screenshot firmware/debugger jika rapi.
- `diagrams/system-block.png`: flame sensors + ultrasonic + STM32 -> servo/fan/pump.
- `diagrams/gait-control.png`: diagram tripod gait atau state machine.
- `photos/robot-body.jpg`: foto robot tampak penuh.
- `photos/electronics-board.jpg`: foto board STM32/wiring.
- `photos/test-arena.jpg`: foto arena lomba/testing.
- `photos/flame-test.jpg`: foto pengujian deteksi api.
- `docs/competition-poster.png`: poster/sertifikat/slide jika ada.

### RadioLink IoT (`radiolink-iot`)

Jenis project: aviation IoT / wireless sensor prototype.

Aset yang paling penting:

- `cover/cover.png`: foto TX/RX node atau dashboard temperature monitoring.
- `screenshots/temperature-dashboard.png`: dashboard/log pembacaan suhu.
- `screenshots/serial-monitor.png`: serial monitor TX/RX jika belum ada dashboard.
- `diagrams/radio-link-architecture.png`: sensor -> MCU -> TX radio -> RX radio -> dashboard/logger.
- `diagrams/node-wiring.png`: wiring DS18B20/NTC + LoRa/RF + MCU.
- `photos/transmitter-node.jpg`: foto node transmitter.
- `photos/receiver-node.jpg`: foto node receiver.
- `photos/instrument-cabinet-demo.jpg`: foto demo di cabinet/lingkungan testing yang aman.
- `docs/range-test-result.png`: hasil uji jarak atau tabel stabilitas link.

## Cara Menghubungkan Aset ke Halaman

Setelah file tersedia, edit `website/lib/content.ts`.

Contoh:

```ts
{
  slug: "thermal-camera",
  image: "/media/projects/thermal-camera/cover/cover.png",
  screenshots: [
    "/media/projects/thermal-camera/screenshots/thermal-detection.png",
    "/media/projects/thermal-camera/diagrams/system-architecture.png",
    "/media/projects/thermal-camera/photos/thermal-camera-module.jpg"
  ]
}
```

Untuk saat ini halaman detail hanya punya area `Screenshots`, tapi area itu bisa diisi screenshot, diagram, atau foto. Jika nanti ingin lebih rapi, bisa dikembangkan menjadi tab/section terpisah: Screenshots, Diagrams, Photos, dan Documents.
