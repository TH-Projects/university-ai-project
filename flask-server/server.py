from flask import Flask
from flask_cors import CORS, cross_origin  #pip install -U flask-cors#

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

####API-Route####
####Find data on localhost:5000####

@app.route("/example")
@cross_origin()
def example_data():
    return {"set":["dataset1","dataset2","dataset_n"]}

#################

if __name__ == "__main__":
    
    app.run()