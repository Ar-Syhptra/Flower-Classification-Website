import os
import hashlib
import json
import shutil
from PIL import Image

folders = os.listdir('../datasets/')

hash_dict = {}

# Loop melalui semua gambar dalam folder
for folder in folders:


   folder_path = f"../datasets/{folder}"
   print(f"🔵 {folder}")

   # jika folder bukanlah folder
   if (not os.path.isdir(folder_path)):
      print(f"❗ {folder} bukanlah sebuah folder")
      continue

   for image_path in os.listdir(folder_path):
      try:

         with Image.open(f"{folder_path}/{image_path}") as image:
            image = image.convert("RGB")

         hash = hashlib.md5(image.tobytes()).hexdigest()

         # jika file tidak duplikat
         if hash not in hash_dict:
            hash_dict[hash] = image_path
            continue

         # jika file duplikat
         print(f"🔴 {image_path} == {hash_dict[hash]}")
         print(f"❌ menghapus {image_path}")
         os.remove(f"{folder_path}/{image_path}")

      except Exception as e:
         print(f"❗ gambar error {image_path}")