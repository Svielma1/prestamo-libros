from flask import *

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
        return render_template('/prestamos.html')
    else:
        print(jsonify({'success': False, 'message': 'Invalid credentials'}))


if __name__ == '__main__':
    app.run(debug=True)
