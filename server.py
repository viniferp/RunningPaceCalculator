from flask import Flask, render_template, request, jsonify
# Importing Maths package here
from Maths.mathematics import paceCalculator

app = Flask("Running Pace Calculator")

@app.route('/calcPace')
def calculate_pace():
    distance = float(request.args.get('distance'))
    time = float(request.args.get('time'))
    try:
        result = paceCalculator(distance, time)
        return jsonify(result=result)  # Return JSON response with the result
    except TypeError:
        return jsonify(error="Error: Non-numerical input detected. Please enter numerical values for distance and time.")


@app.route('/')
def render_index_page():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)


