from flask import Flask, send_from_directory, request, jsonify
from flask_cors import CORS
from routes import register_routes

# Criação correta do app com pasta estática e templates
app = Flask(__name__, static_folder="static", template_folder="templates")

# Ativa o CORS antes de registrar rotas
CORS(app)

# Registra rotas do sistema (ex: /api/sistema)
register_routes(app)

# Rota extra de exemplo
@app.route("/api/quadrado", methods=["POST"])
def calcular_quadrado():
    data = request.get_json()
    numero = data.get("numero", 0)
    resultado = numero ** 2
    return jsonify({"resultado": resultado})

# Rota padrão: serve index.html
@app.route("/")
def index():
    return send_from_directory("static", "index.html")

# Serve arquivos da pasta static (ex: JS, CSS, etc)
@app.route("/<path:path>")
def static_files(path):
    return send_from_directory("static", path)

if __name__ == "__main__":
    app.run(debug=True)
