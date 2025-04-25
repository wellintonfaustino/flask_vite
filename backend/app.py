import sys, os
sys.path.append(os.path.abspath(os.path.dirname(__file__)))
from src.routes import register_routes

from flask import Flask, send_from_directory, request, jsonify
from flask_cors import CORS
from src.routes import register_routes

# Criação correta do app com pasta estática e templates
app = Flask(__name__, static_folder="static", template_folder="templates")

# Ativa o CORS antes de registrar rotas
CORS(app)

# Registra rotas do sistema
register_routes(app)

# Rota extra
@app.route("/api/quadrado", methods=["POST"])
def calcular_quadrado():
    data = request.get_json()
    numero = data.get("numero", 0)
    resultado = numero ** 2
    return jsonify({"resultado": resultado})

# Rota padrão
@app.route("/")
def index():
    return send_from_directory("static", "index.html")

@app.route("/<path:path>")
def static_files(path):
    return send_from_directory("static", path)

if __name__ == "__main__":
    app.run(debug=True)
