from flask import Flask
from routes import main
from config import Config
from models import db

app = Flask(__name__)
app.config.from_object(Config)

# Initialize the database
db.init_app(app)

# Register blueprints
app.register_blueprint(main)

if __name__ == '__main__':
    app.run(debug=True)
