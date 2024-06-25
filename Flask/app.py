from flask import *
import requests

app = Flask(__name__,
            static_url_path='',
            static_folder='static',
            template_folder='templates')

username = "admin"
password = "admin123"


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    if username == username and password == password:
        print(jsonify({'success': True}))
        return redirect(url_for('prestamos'))
    else:
        print(jsonify({'success': False, 'message': 'Invalid credentials'}))

@app.route('/prestamos')
def prestamos():
    datos = requests.get('http://127.0.0.1:2000/prestamos')
    if datos.status_code == 200:
        prestamos = datos.json()
        return render_template('prestamos.html', prestamos=prestamos)
    else:
        return jsonify({'error':'Error al obtener los datos desde la ruta de la api Node.js'})

if __name__ == '__main__':
    app.run(debug=True)
