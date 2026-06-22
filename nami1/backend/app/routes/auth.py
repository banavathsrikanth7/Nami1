from fastapi import APIRouter,Header,HTTPException,Depends
from app.utils.auth import verify_firebase_token
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.user import User
router = APIRouter()

@router.post("/sync-user")
def sync_user(
    authorization: str = Header(None),
    db: Session = Depends(get_db)
):
    if not authorization:
        raise HTTPException(status_code = 401, detail = "Missing Token")
    token = authorization.split(" ")[1]
    decoded_token = verify_firebase_token(token)
    firebase_uid = decoded_token["uid"]
    user = db.query(User).filter(User.firebase_uid == firebase_uid).first()
    if user:
        return {
            "message": "User already exists",
            "user_id": user.id
        }
    user = User(
        firebase_uid = firebase_uid,
        email = decoded_token.get("email")
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return {
       "message": "User synced",
       "user_id": user.id
    }