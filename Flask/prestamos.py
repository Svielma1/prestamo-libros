from flask import *
import requests

app = Flask(__name__)

@app.route('/prestamos')
def index():
    datos = requests.get('http://127.0.0.1:2001/prestamos')
    if datos.status_code == 200:
        prestamos = datos.json()
        return render_template('prestamos.html', prestamos=prestamos)
    else:
        return jsonify({'error':'Error al obtener los datos desde la ruta de la api Node.js'})