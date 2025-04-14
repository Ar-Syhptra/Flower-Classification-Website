# Dokumentasi Folder Machine Learning

Ini adalah dokumentasi yang menjelaskan tentang semua yang berhubungan dengan pengembangan model deep learning, mulai dari tempat penyimpanan serta fungsi setiap folder. Mari kita mulai.

## Penyimpanan Awan (Cloud Storage)

Penyimpanan awan digunakan untuk membagikan dataset dan model yang bersifat binary dan memiliki ukuran besar. Hal ini dilakukan untuk mengoptimalkan repository ini supaya tidak berat, memudahkan tracking, dan menghindari pembengkakan riwayat git. Penyimpanan dibagikan di cloud MEGA yang bisa diakses di [Flower-Classification-Website](https://mega.nz/folder/MlgGRL4K#hikilKZ0F1gXoWCzvKkxcA).

### `models`

Model disimpan dalam format `h5` yang mana daftar model bisa diakses di [Flower-Classification-Website/models](https://mega.nz/folder/MlgGRL4K#hikilKZ0F1gXoWCzvKkxcA/folder/MsYCAZjI). Setiap model memiliki format penamaan `model-{version}-a{accuracy}-c{category}` yang memiliki arti:

- `version`: Versi dari model (model ke berapa yang dibuat).
- `accuracy`: Akurasi dari model.
- `category`: Jumlah kategori yang digunakan.

Model dibuat menggunakan notebook yang disimpan di folder `notebook/` yang memiliki dokumentasi yang jelas untuk setiap model. Untuk lebih jelasnya bisa lihat di bagian [notebooks](#notebooks).

### `datasets`

Dataset disimpan dalam format zip untuk memudahkan pembagian dataset yang bisa diakses di [Flower-Classification-Website/datasets](https://mega.nz/folder/MlgGRL4K#hikilKZ0F1gXoWCzvKkxcA/folder/plAz2ZjR). Total dataset yang telah terkumpul bisa dilihat di [total-datasets.json](total-datasets.json).

## Penyimpanan Lokal (Repository)

Penyimpanan lokal digunakan jika file yang bukan bersifat binary dan memiliki ukuran kecil.

### `augmentation-area`

Folder yang digunakan untuk tempat augmentasi dataset. Folder ini digunakan oleh script `augmentation-dataset.py`.

```
augmentation-area/
├── input/
|   └── {kategori}/
|       └── {dataset}
└── output/
    └── {kategori}/
        └── {dataset}
```

- `input/`: Folder yang berisi dataset yang akan di-augmentasikan. Folder ini haruslah berisi folder lagi yang dikelompokkan sesuai kategori.
- `output/`: Folder yang berisi dataset yang disimpan. Hasil disimpan berdasarkan nama folder yang ada di folder `input`.

### `chromedriver-win64`

Folder yang berisi program chrome driver yang digunakan untuk mengumpulkan data melalui browser chrome. Program chrome driver ini digunakan oleh script `scrape-dataset.py`.

> Program chromedriver memiliki versi 134.0.6998.165 untuk sistem operasi windows.

### `datasets`

Folder yang berisi dataset yang telah didapatkan dari pengumpulan data yang dikelompokkan berdasarkan kategori. Folder ini digunakan oleh script `scrape-dataset.py`, `reduce-dataset.py`, dan `remove-duplicated-dataset.py`.

> Dataset dibagikan di cloud MEGA untuk mengoptimalkan repository ini yang bisa diakses di [Flower-Classification-Website/datasets](https://mega.nz/folder/MlgGRL4K#hikilKZ0F1gXoWCzvKkxcA/folder/plAz2ZjR).

```
datasets/
└── {kategori}/
    └── {dataset}
```

### `model-datasets`

Folder yang digunakan untuk tempat dataset yang telah dipisah menjadi 3 bagian untuk keperluan pembuatan model deep learning. Folder ini digunakan oleh script `split-dataset.py`.

```
model-datasets/
├── train/
|   └── {kategori}/
|       └── {dataset}
├── validation/
|   └── {kategori}/
|       └── {dataset}
└── test/
    └── {kategori}/
        └── {dataset}
```

- `train/`: Folder yang berisi dataset untuk melatih model.
- `train/`: Folder yang berisi dataset untuk validasi model.
- `test/`: Folder yang berisi dataset untuk menguji model.

### `notebooks`

Folder yang berisi notebook yang digunakan untuk analisa data dan pelatihan model. Setiap notebook memiliki format penamaan `notebook-{subject}-{version}-{model_name}` yang memiliki arti:

- `subject`: Tujuan dari notebook tersebut.
- `version` (Opsional): Versi notebook.
- `model_name` (Opsional): Model yang dibahas.

### `scripts`

Folder yang berisi script yang berkaitan dengan semua hal yang ada disini mulai dari mengumpulkan data, mengolah data, dan sebagainya.

> Dokumentasi file pada folder `scripts` bisa ditemukan [scripts/README.md](scripts/README.md).