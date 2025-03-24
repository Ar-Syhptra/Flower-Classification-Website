from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
import time
import os
import requests
import base64

flower    = "lavender"
folder    = f"lavendula_{flower}"
query     = "contoh bunga lavender"
count     = 20
scroll    = 5
scrape_id = 2

selector  = "img.YQ4gaf:not(.zr758c)" # tergantung pada kelas css google saat ini

# inisialisasi driver
service = Service('../chromedriver-win64/chromedriver.exe')
driver = webdriver.Chrome(service=service)

# searching
search_url = f"https://www.google.com/search?q={query}&tbm=isch&tbs=sur:fmc&tbs=ift:jpg"
driver.get(search_url)

# scroll
for _ in range(scroll):
   driver.find_element("tag name", "body").send_keys(Keys.END)
   time.sleep(2)

# ambil gambar dengan selector
images = driver.find_elements("css selector", selector)
images = [img.get_attribute('src') for img in images if img.get_attribute('src')]

# buat folder jika tidak ada
folder = f"../datasets/{folder}"
os.makedirs(folder, exist_ok=True)

for idx, src in enumerate(images[:count]):

   nama_file = f"{flower}-{scrape_id}-{idx + 1}.jpg"
   try:

      # menyimpan gambar yang didapat dalam bentuk url ataupun base64
      binary  = base64.b64decode(src.split(',')[1]) if src.startswith('data:image') else requests.get(src).content

      with open(f"{folder}/{nama_file}", 'wb') as file:
         file.write(binary)

      print(f"✅ {nama_file} tersimpan")

   except Exception as e:
      print(f"❗ {nama_file} gagal tersimpan: {e}")

driver.quit()
