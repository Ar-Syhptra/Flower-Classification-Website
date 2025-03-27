import os
import json

# --------------------------------------------------------------------------------

folder_counts = {}
total_file    = 0
# batas minimum file per folder
target        = 300

# --------------------------------------------------------------------------------

folders = os.listdir("../datasets")
below   = []

for folder in folders:
   folder_path = f"../datasets/{folder}"

   # jika folder bukanlah folder dan tidak memberikan peringatan
   if not os.path.isdir(folder_path):
      continue

   # mendata dataset
   folder_counts[folder] = len(os.listdir(folder_path))
   total_file += folder_counts[folder]
   if folder_counts[folder] < target:
      below.append(folder)

with open("../total-datasets.json", 'w') as file:
   json.dump(folder_counts, file, indent=3)

print(json.dumps(folder_counts, indent=2))
print(f"\n❗dibawah {target}:", below)
print(f"❗ total dataset yang dibawah {target}:", len(below))


print(f"\n🔵 folder: {len(folder_counts)}")
print(f"🔵 file: {total_file}")