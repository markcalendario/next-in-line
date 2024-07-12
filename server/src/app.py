from flask import Flask
from api.sequence.sequence_routes import sequence
app = Flask(__name__)

# Blueprints
app.register_blueprint(sequence)