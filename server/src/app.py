import os
from flask import Flask, request, jsonify
from model.sequence import NextInLineSequence
app = Flask(__name__)

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', "http://nil.learningaxies.com")
  response.headers.add('Access-Control-Allow-Headers', "*")
  return response

@app.route("/nil", methods=["POST"])
def next_in_line():
  payload = request.get_json()

  num1 = payload["num1"]
  num2 = payload["num2"]
  num3 = payload["num3"]

  data = { "success": False, "message": None }

  if not num1.isnumeric():
    data["message"] = "Value for first value must be numeric."
    return jsonify(data)

  if not num2.isnumeric():
    data["message"] = "Value for second must be numeric."
    return jsonify(data)

  if not num3.isnumeric():
    data["message"] = "Value for third value must be numeric."
    return jsonify(data)
  
  nil = NextInLineSequence()
  result = nil.nextOf(int(num1), int(num2), int(num3))

  data = { 
    "success": True, 
    "message": "Success", 
    "result": "%.3f"%result
  }

  return jsonify(data)

if __name__ == "__main__":
  app.run(debug=True, port=6001)