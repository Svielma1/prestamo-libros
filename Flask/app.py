from flask import *

app = Flask(__name__, static_folder="templates")

username = "admin"
password = "admin123"


@app.route('/')
def index():
    print('Welcome')
    return render_template('index.html')


@app.route('/login', methods=['POST'])
def login():
    print(request.form)
    username = request.form['username']
    password = request.form['password']
    print(username, password)
    if username == username and password == password:
        print(jsonify({'success': True}))
        return render_template('inicio.html')
    else:
        print(jsonify({'success': False, 'message': 'Invalid credentials'}))


if __name__ == '__main__':
    app.run(debug=True)
