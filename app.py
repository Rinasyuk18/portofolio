from flask import Flask, send_from_directory

app = Flask(__name__)

# ===========================
# HALAMAN HTML
# ===========================
@app.route("/")
def home():
    return send_from_directory(".", "index.html")

@app.route("/kontak")
def kontak():
    return send_from_directory(".", "kontak.html")

@app.route("/media")
def media():
    return send_from_directory(".", "media.html")


# ===========================
# FILE CSS
# ===========================
@app.route("/css/<path:filename>")
def css(filename):
    return send_from_directory("css", filename)


# ===========================
# FILE JS
# ===========================
@app.route("/js/<path:filename>")
def js(filename):
    return send_from_directory("js", filename)


# ===========================
# FILE GAMBAR
# ===========================
@app.route("/images/<path:filename>")
def images(filename):
    return send_from_directory("images", filename)

@app.route("/images/profil/<path:filename>")
def images_profil(filename):
    return send_from_directory("images/profil", filename)


# ===========================
# RUN SERVER
# ===========================
if __name__ == "__main__":
    app.run(debug=True)