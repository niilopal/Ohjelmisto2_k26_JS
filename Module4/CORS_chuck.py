#Must be running for exercises 5 and 6
from flask import Flask
from flask_cors import CORS
import requests, json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS-Headers'] = 'Content-Type'

@app.route('/chuck/<term>')
def chuck(term):
    dict = requests.get(f'https://api.chucknorris.io/jokes/{term}')
    return dict.json()
@app.route('/search/<term>')
def search(term):
    dict = requests.get(f'https://api.chucknorris.io/jokes/search?query={term}')
    return dict.json()
app.run(use_reloader = True, host = '127.0.0.1', port = 3000)