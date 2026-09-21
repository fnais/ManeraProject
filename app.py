from flask import Flask, render_template

app = Flask(__name__)


# =====================================================
# HOME
# =====================================================

@app.route('/')
def home():
    return render_template('index.html')


# =====================================================
# PRODUK
# =====================================================

@app.route('/Bihun_Jagung_Pion_Tunggal')
def bihun_jagung_pion_tunggal():
    return render_template('Bihun_Jagung_Pion_Tunggal.html')


@app.route('/Bihun_Jagung_Pion_Tunggal_140gr')
def bihun_jagung_pion_tunggal_140gr():
    return render_template('Bihun_Jagung_Pion_Tunggal_140gr.html')


@app.route('/Bihun_Jagung_Pitung')
def bihun_jagung_pitung():
    return render_template('Bihun_Jagung_Pitung.html')


@app.route('/Sohun_Iyon')
def sohun_iyon():
    return render_template('Sohun_Iyon.html')


@app.route('/Penyedap_Rasa_Sisuka')
def penyedap_rasa_sisuka():
    return render_template('Penyedap_Rasa_Sisuka.html')


# =====================================================
# KATALOG
# =====================================================

@app.route('/Katalog')
def katalog():
    return render_template('Katalog.html')


# =====================================================
# DISTRIBUSI
# =====================================================

@app.route('/Distribusi')
def distribusi():
    return render_template('Distribusi.html')


# =====================================================
# DOMESTIK
# =====================================================

@app.route('/domestik')
def domestik():
    return render_template('Domestik.html')


# =====================================================
# RUN SERVER
# =====================================================

if __name__ == '__main__':
    app.run(debug=True)