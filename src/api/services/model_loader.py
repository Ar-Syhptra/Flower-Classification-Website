import os
import tensorflow as tf

model = None

def load_model():
    global model
    if model is None:
        model_path = os.path.join(os.path.dirname(__file__), "model-3-a85-c37.h5")
        model = tf.keras.models.load_model(model_path)
    return model