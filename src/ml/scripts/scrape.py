from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
import time
import os
import requests
import base64

bunga          = "sakura"
folder         = f"prunus_{bunga}" # genus_nama
query          = "bunga sakura dekat"
jumlah_gambar  = 20
jumlah_scroll  = 5
nomor_scraping = 2
selector       = "img.YQ4gaf:not(.zr758c)" # tergantung pada kelas css google saat ini

# inisialisasi drivernya
service = Service('../chromedriver-win64/chromedriver.exe')
driver = webdriver.Chrome(service=service)

# searching
search_url = f"https://www.google.com/search?q={query}&tbm=isch&tbs=sur:fmc&tbs=ift:jpg"
driver.get(search_url)

# scroll
for _ in range(jumlah_scroll):
   driver.find_element("tag name", "body").send_keys(Keys.END)
   time.sleep(2)

# ambil gambar dengan selector
images = driver.find_elements("css selector", selector)
images = [img.get_attribute('src') for img in images if img.get_attribute('src')]

# buat folder jika tidak ada
folder = f"../datasets/{folder}"
os.makedirs(folder, exist_ok=True)

for idx, src in enumerate(images[:jumlah_gambar]):

   nama_file = f"{bunga}-{nomor_scraping}-{idx + 1}.jpg"
   try:

      # menyimpan gambar yang didapat dalam bentuk url ataupun base64
      binary  = base64.b64decode(src.split(',')[1]) if src.startswith('data:image') else requests.get(src).content

      with open(f"{folder}/{nama_file}", 'wb') as img_file:
         img_file.write(binary)

      print(f"✅ {nama_file} tersimpan")

   except Exception as e:
      print(f"❌ {nama_file}.jpg gagal tersimpan: {e}")

driver.quit()
