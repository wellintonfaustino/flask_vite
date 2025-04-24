import webview
import threading
from app import app

def start_flask():
    app.run(port=5000)

if __name__ == '__main__':
    threading.Thread(target=start_flask, daemon=True).start()
    webview.create_window("Vite + Flask App", "http://localhost:5173/", width=1024, height=768)
    webview.start()
