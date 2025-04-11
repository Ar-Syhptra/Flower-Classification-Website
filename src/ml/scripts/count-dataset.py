import os
import json

# --------------------------------------------------------------------------------

total_file = 0
# batas minimum file per folder
target     = 350

# --------------------------------------------------------------------------------

folders       = os.listdir('../datasets')
folder_counts = {}
below         = []

for folder in folders:
   folder_path = f'../datasets/{folder}'

   if not os.path.isdir(folder_path):
      continue

   folder_counts[folder] = len(os.listdir(folder_path))
   total_file += folder_counts[folder]

   if folder_counts[folder] < target:
      below.append(folder)

result = json.dumps(folder_counts, indent=3)

with open('../total-datasets.json', 'w') as file:
   file.write(result)

print(result)
print(f'\n❗ dibawah {target}:', below)
print(f'❗ total dataset yang dibawah {target}:', len(below))

print(f'\n🔵 folder: {len(folder_counts)}')
print(f'🔵 file: {total_file}')