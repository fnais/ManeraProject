from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/Bihun_Jagung_Pion_Tunggal')
def Bihun_Jagung_Pion_Tunggal():
    return render_template('Bihun_Jagung_Pion_Tunggal.html')


@app.route('/Bihun_Jagung_Pitung')
def granola():
    return render_template('Bihun_Jagung_Pitung.html')


@app.route('/Sohun_Iyon')
def saus():
    return render_template('Sohun_Iyon.html')


@app.route('/Penyedap_Rasa_Sisuka')
def mre():
    return render_template('Penyedap_Rasa_Sisuka.html')


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
