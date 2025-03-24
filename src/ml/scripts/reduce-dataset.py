import os
import random

folders = os.listdir('../datasets/')

max_item = 350

# iterasi folder yang dipilih
for folder in folders:

   folder_path = f"../datasets/{folder}"
   print(f"🔵 {folder}")

   # jika folder bukanlah folder
   if (not os.path.isdir(folder_path)):
      print(f"❗ {folder} bukanlah sebuah folder")
      continue

   image_paths = os.listdir(folder_path)

   # memilih gambar secara acak
   for image_path in random.sample(image_paths, len(image_paths) - max_item):
      path = f'{folder_path}/{image_path}'
      os.remove(path)
      print(f"❌ menghapus: {path}")