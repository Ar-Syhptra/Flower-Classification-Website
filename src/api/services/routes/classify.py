from flask import Blueprint, request, jsonify
import numpy as np
import base64
import cv2
from io import BytesIO
from PIL import Image
from model_loader import load_model

classify_bp = Blueprint("classify", __name__)

def preprocess_image(image_data):
    image = Image.open(BytesIO(image_data)).convert("RGB")
    image = image.resize((224, 224))
    image_np = np.array(image) / 255.0
    return np.expand_dims(image_np, axis=0)

@classify_bp.route("/classify", methods=["POST"])
def classify():
    try:
        data = request.get_json()
        base64_str = data["image"].split(",")[1]
        image_data = base64.b64decode(base64_str)

        model = load_model()
        processed = preprocess_image(image_data)
        prediction = model.predict(processed)
        predicted_class = int(np.argmax(prediction))

        return jsonify({
            "prediction": prediction.tolist(),
            "predicted_class": predicted_class
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500