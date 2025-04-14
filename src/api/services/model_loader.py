import tensorflow as tf

model = None

def load_model():
    global model
    if model is None:
        model = tf.keras.models.load_model("model-3-a85-c37.h5")
    return model