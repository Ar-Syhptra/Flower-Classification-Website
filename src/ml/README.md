# Dokumentasi Folder Machine Learning

Ini adalah dokumentasi yang menjelaskan tentang fungsi setiap folder yang ada di sini. Mari kita mulai.

> [!IMPORTANT]
> Untuk dokumentasi file pada folder `scripts` bisa ditemukan [disini](scripts/README.md).

## `augmentation-area`

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

## `chromedriver-win64`

Folder yang berisi program chrome driver yang digunakan untuk mengumpulkan data melalui browser chrome. Program chrome driver ini digunakan oleh script `scrape-dataset.py`.

> Program chromedriver memiliki versi 134.0.6998.165 untuk sistem operasi windows.

## `datasets`

Folder yang berisi dataset yang telah didapatkan dari pengumpulan data yang dikelompokkan berdasarkan kategori. Folder ini juga menyimpan semua dataset dalam bentuk zip. Folder ini digunakan oleh script `scrape-dataset.py`, `reduce-dataset.py`, dan `remove-duplicated-dataset.py`.

```
datasets/
└── {kategori}/
    └── {dataset}
```

## `model-datasets` (?)

Folder yang digunakan untuk tempat dataset untuk keperluan pembuatan model machine learning.

```
model-datasets/
├── train/
|   └── {kategori}/
|       └── {dataset}
└── test/
    └── {kategori}/
        └── {dataset}
```

- `train/`: Folder yang berisi dataset untuk melatih model.
- `test/`: Folder yang berisi dataset untuk menguji model.

## `models`

Folder yang berisi model machine learning yang sudah dilatih dan disimpan dalam bentuk binary dengan ekstensi `h5`.

## `notebooks` (?)

Folder yang berisi notebook yang digunakan untuk analisa data dan pelatihan model.

## `scripts`

Folder yang berisi script yang berkaitan dengan semua hal yang ada disini mulai dari mengumpulkan data, mengolah data, dan sebagainya.

> Dokumentasi file pada folder `scripts` bisa ditemukan [disini](scripts/README.md).