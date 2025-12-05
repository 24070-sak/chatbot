import google.generativeai as genai
import os

CLE_API = "AIzaSyBfnJ5-P2os_EfHhK3VUKGndK0XEeotz6E"
genai.configure(api_key=CLE_API)

try:
    for modele in genai.list_models():
        if 'generateContent' in modele.supported_generation_methods:
            print(modele.name)
except Exception as e:
    print(e)
