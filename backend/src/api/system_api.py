# backend/api/system_api.py
from flask import Blueprint, jsonify
import platform
import psutil
import shutil

system_api = Blueprint('system_api', __name__)

@system_api.route("/api/sistema")
def sistema():
    info = {
        "sistema_operacional": f"{platform.system()} {platform.release()}",
        "arquitetura": platform.architecture()[0],
        "processador": platform.processor(),
        "nucleos_fisicos": psutil.cpu_count(logical=False),
        "nucleos_logicos": psutil.cpu_count(logical=True),
        "ram_total_gb": round(psutil.virtual_memory().total / (1024 ** 3), 2),
        "disco_total_gb": round(shutil.disk_usage('/').total / (1024 ** 3), 2)
    }
    return jsonify(info)
