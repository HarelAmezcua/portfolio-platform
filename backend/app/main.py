from fastapi import FastAPI

app = FastAPI()

@app.get("/hi")
def greet():
    return "Hola Mundo"