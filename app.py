from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/minuman_bubuk')
def minuman_bubuk():
    return render_template('minuman_bubuk.html')


@app.route('/granola')
def granola():
    return render_template('granola.html')


@app.route('/saus')
def saus():
    return render_template('saus.html')


@app.route('/mre')
def mre():
    return render_template('mre.html')

if __name__ == '__main__':
    # app.run(debug=True)
    
    app.run(host="0.0.0.0", port=5000)