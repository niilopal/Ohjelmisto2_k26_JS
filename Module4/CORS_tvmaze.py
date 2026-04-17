#Must be running for exercises 2-4
from flask import Flask
from flask_cors import CORS
import requests, json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS-Headers'] = 'Content-Type'

@app.route('/shows/<term>')
def shows(term):
    dict = requests.get(f'https://api.tvmaze.com/search/shows?q={term}')
    return dict.json()
app.run(use_reloader = True, host = '127.0.0.1', port = 3000)