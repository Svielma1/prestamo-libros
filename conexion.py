from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

#Agreguen si string de conexion
url = "mongodb+srv://sebastianvielma03:Inacap123@serverinacap.aw3r9qk.mongodb.net/?retryWrites=true&w=majority&appName=ServerInacap"

#sample_restaurants.restaurants

def conexion():
    cliente = MongoClient(url, server_api = ServerApi('1'))
    try:
        cliente.admin.command('ping')
        db = cliente.bibliotecap
        return db
    except Exception as e:
        print(e)