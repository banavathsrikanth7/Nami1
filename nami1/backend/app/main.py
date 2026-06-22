from fastapi import FastAPI
from app.database import engine, Base
from app.models.user import User
from app.routes.user import router as user_router
from app.routes.profile import router as profile_router
from app.routes.auth import router as auth_router
from app.routes.conversation import router as conversation_router
from app.routes.message import router as message_router
import app.firebase_config
from fastapi.middleware.cors import CORSMiddleware
from app.models.conversation import Conversation
from app.models.message import Message

from app.routes.message import (
router as message_router
)
Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173","http://nami1.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(user_router,prefix="/users",tags=["Users"])
app.include_router(profile_router,prefix="/profile",tags=["Profile"])
app.include_router(auth_router,prefix="/auth",tags=["Auth"])
app.include_router(conversation_router,prefix="/conversation",tags=["Conversation"])
app.include_router(message_router,prefix="/message",tags=["Message"])
app.include_router(message_router,prefix="/messages",tags=["Messages"])
@app.get("/")
def root():
    return {"message": "NAMI Backend Running"}