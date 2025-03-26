import os
import random

# --------------------------------------------------------------------------------

folders  = os.listdir("../datasets")
max_item = 400

# --------------------------------------------------------------------------------

# iterasi folder yang dipilih
for folder in folders:
   print(f"\n🔵 {folder}")

   folder_path = f"../datasets/{folder}"

   # jika folder bukanlah folder
   if not os.path.isdir(folder_path):
      print(f"❗ {folder} bukanlah sebuah folder")
      continue

   image_paths = os.listdir(folder_path)

   # jika gambar sudah lebih dikit dari max_item
   if len(image_paths) <= max_item:
      continue

   # memilih gambar secara acak
   for image_path in random.sample(image_paths, (len(image_paths) - max_item)):
      image_path = f'{folder_path}/{image_path}'
      os.remove(image_path)
      print(f"❌ menghapus: {image_path}")