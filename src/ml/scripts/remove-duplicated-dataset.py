import os
import hashlib
from PIL import Image

# --------------------------------------------------------------------------------

folders = os.listdir("../datasets")

# --------------------------------------------------------------------------------

# loop melalui semua gambar dalam folder
for folder in folders:
   print(f"\n🔵 {folder}")

   hash_dict = {}

   folder_path = f"../datasets/{folder}"

   # jika folder bukanlah folder
   if not os.path.isdir(folder_path):
      print(f"❗ {folder} bukanlah sebuah folder")
      continue

   for image_path in os.listdir(folder_path):

      try:
         # load gambar dan mengubahnya ke rgb
         with Image.open(f"{folder_path}/{image_path}") as image:
            image = image.convert("RGB")

         # menyimpan hasil hashing
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