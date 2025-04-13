import tensorflow as tf

model = None

def load_model():
    global model
    if model is None:
        model = tf.keras.models.load_model("../../ml/models/model-2-a74-c37.h5")
    return model