# Flower Classification with Machine Learning

This project is a web application built with **React.js** and **Express.js**, utilizing **TensorFlow** to classify flowers based on uploaded images. The classification model is developed using **TensorFlow** and stored in **PostgreSQL** as the main database.

## ✨ Features
- 🚀 **Image Classification**: Predicts the type of flower from an uploaded image.
- 🎨 **Modern Frontend**: Built with **React.js**, **Vite**, and **Tailwind CSS** for a fast and responsive UI.
- 🧠 **Machine Learning Model**: Uses **TensorFlow** for accurate classification.
- 🗄️ **Backend API**: Powered by **Express.js** to handle communication between the frontend.
- 📊 **PostgreSQL Database**: Stores flower data.

## 🛠️ Tech Stack
- **Frontend**: React.js, Vite, Tailwind CSS
- **Backend**: Express.js, Flask, PostgreSQL
- **Machine Learning**: TensorFlow

## ⚙️ Requirements
- **Node.js** (>= 20.18.0)
- **npm** (>= 10.8.2)
- **Python** (== 3.12)
- **Pip** (>= 24.2)

## 🚀 How to Run
1. Clone this repository:
   ```bash
   git clone https://github.com/Ar-Syhptra/Flower-Classification-Website.git
   cd Flower-Classification-Website
   ```

2. Install dependencies with npm:
   ```bash
   npm install
   ```

3. Install dependencies with pip:
   ```bash
   cd src/api/services
   pip install -r requirements.txt
   ```

4. Run this project:
   ```bash
   npm run dev
   ```
Before running this project, you need to download the `.h5` model from the following link:

**[Download model-3-a85-c37.h5 (MEGA)](https://mega.nz/folder/5oIA2BzL#7tMxi_Ab0_XtpeXzFKBXtQ/file/8wZnGbQC)**

After downloaded, move the file to the following directory:

```bash
src/api/services/model-3-a85-c37.h5
```