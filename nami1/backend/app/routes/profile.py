from fastapi import APIRouter, Header, HTTPException
from app.utils.auth import verify_firebase_token

router = APIRouter()

@router.get("/")
def get_profile(authorization: str = Header(None)):

    if not authorization:
        raise HTTPException(401, "Missing Token")

    token = authorization.split(" ")[1]

    user = verify_firebase_token(token)

    return {
        "uid": user["uid"],
        "email": user.get("email")
    }