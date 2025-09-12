# main.py
from flask import Flask

# Criando a aplicação Flask
app = Flask(__name__)
@app.route('/')
def hemepage():
    return 'Minha primeira pagina'

if __name__ == "__main__":
    app.run(debug=True)