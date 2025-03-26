from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.preprocessing import image
import numpy as np
import os

# --------------------------------------------------------------------------------

# inisialisasi generator augmentasi
datagen = ImageDataGenerator(
   width_shift_range=0.2,
   height_shift_range=0.2,
   shear_range=1,
   zoom_range=0.25,
   horizontal_flip=True,
   fill_mode='nearest'
)
# total gambar yang akan dihasilkan
amount = 7

# --------------------------------------------------------------------------------

input_path  = "../augmentation-area/input/"
output_path = "../augmentation-area/output/"
folders     = os.listdir(input_path)

for folder in folders:
   print(f"\n🔵 {folder}")

   input_folder_path = f"{input_path}/{folder}"
   if not os.path.isdir(input_folder_path):
      print(f"❗ {folder} bukanlah sebuah folder")
      continue

   # membuat folder output
   output_folder_path = f"{output_path}/{folder}"
   os.makedirs(output_folder_path, exist_ok=True)

   image_paths = os.listdir(input_folder_path)

   for image_path in image_paths:
      # load gambar dan ubah ke np.array
      img   = image.load_img(f"{input_folder_path}/{image_path}", target_size=(255, 255))
      array = image.img_to_array(img)
      array = np.expand_dims(array, axis=0)

      i = 0
      # simpan gambar
      for batch in datagen.flow(array, batch_size=1, save_to_dir=output_folder_path, save_prefix=image_path.split(".")[0] + "aug", save_format="jpg"):
         i += 1
         if i >= amount:
            break

      print(f"✅ {image_path}")