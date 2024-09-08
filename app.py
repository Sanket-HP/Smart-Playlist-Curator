from flask import Flask, request, jsonify
import random

app = Flask(__name__)

@app.route('/recommendations', methods=['GET'])
def get_recommendations():
    mood = request.args.get('mood', '')
    # Dummy data for example
    playlists = [
        {'name': 'Happy Song 1', 'artist': 'Artist 1'},
        {'name': 'Happy Song 2', 'artist': 'Artist 2'},
        {'name': 'Relaxing Song 1', 'artist': 'Artist 3'}
    ]
    filtered_playlist = [song for song in playlists if mood.lower() in song['name'].lower()]
    return jsonify(filtered_playlist)

if __name__ == '__main__':
    app.run(debug=True)
