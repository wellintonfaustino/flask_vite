# backend/routes.py
from flask import Flask
from .api.system_api import system_api

def register_routes(app: Flask):
    app.register_blueprint(system_api)
