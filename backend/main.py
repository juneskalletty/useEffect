from flask import Flask
from flask_restx import Api
from flask_cors import CORS
from models import Receitas
from exts import db
from receita import receita_ns
from config import DevConfig


def create_app(config): 
    app = Flask(__name__)

    app.config.from_object(config)
    CORS(app)

    db.init_app(app)


    api = Api(app,doc='/')

    api.add_namespace(receita_ns)


            
            
        
    @app.shell_context_processor
    def make_shell_context():
        return {
            "db":db,
            "receitas":Receitas
            
        }
    
    return app