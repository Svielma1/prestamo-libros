from flask import *
import requests

app = Flask(__name__,
            static_url_path='',
            static_folder='static',
            template_folder='templates')

username_default = "admin"
password_default = "admin123"


@app.route('/')
def index():
    return redirect(url_for('login'))


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        return render_template('index.html')
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username == username_default and password == password_default:
            return redirect(url_for('prestamos'))
        return render_template('index.html')
    


@app.route('/prestamos', methods=['GET'])
def prestamos():
    try:
        datos = requests.get('http://127.0.0.1:2000/prestamos')
        if datos.status_code == 200:
            prestamos = datos.json()
            return render_template('prestamos.html', prestamos=prestamos)
        return render_template('prestamos.html', error='No hay prestamos aún')
    except Exception as e:
        return render_template('prestamos.html', error='Error al obtener prestamos')


if __name__ == '__main__':
    app.run(debug=True)
