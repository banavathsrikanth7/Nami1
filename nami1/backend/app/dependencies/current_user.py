from fastapi import (
    Header,
    HTTPException,
    Depends
)

from sqlalchemy.orm import Session

from app.database import get_db

from app.models.user import User

from app.utils.auth import (
    verify_firebase_token
)


def get_current_user(
    authorization: str = Header(None),
    db: Session = Depends(get_db)
):

    if not authorization:

        raise HTTPException(
            status_code=401,
            detail="Missing Token"
        )

    token = authorization.split(" ")[1]

    decoded = verify_firebase_token(
        token
    )

    firebase_uid = decoded["uid"]

    user = (
        db.query(User)
        .filter(
            User.firebase_uid
            == firebase_uid
        )
        .first()
    )

    if not user:

        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    return user