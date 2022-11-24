import redis
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["http://localhost:3000", "localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

Items = []


@app.post('/take')
async def take(Item: dict) -> dict:
    if (Item["done"] == False):
        Items.append(Item)
    else:
        print(Items)
        # Items.clear()

    return {"Items": "added"}


@app.get("/show")
async def show() -> list:
    return Items

# r = redis.Redis(
#     host='redis-14586.c305.ap-south-1-1.ec2.cloud.redislabs.com',
#     port=14586,
#     password='M0lhdj5E8AvFYYMfWaSaN4lTMLvVZEdR')

# r.mset({"items": "a"})
# li = r.get("items").decode("utf-8")

# for item in li:
#     print(item)


@app.get('/axi')
async def axi():
    return ["Axios", "Connected"]
