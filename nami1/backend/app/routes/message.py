from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.message import Message
from app.schemas.message import MessageCreate

from app.services.nami import get_ai_response

router = APIRouter()

@router.post("/send")
def send_message(
    data: MessageCreate,
    db: Session = Depends(get_db)
):

    # Save User Message
    user_message = Message(
        conversation_id=data.conversation_id,
        role="user",
        content=data.content
    )

    db.add(user_message)
    db.commit()
    db.refresh(user_message)

    # Get Gemini Response
    ai_response = get_ai_response(
        data.content
    )

    # Save AI Message
    bot_message = Message(
        conversation_id=data.conversation_id,
        role="assistant",
        content=ai_response
    )

    db.add(bot_message)
    db.commit()
    db.refresh(bot_message)

    return {
        "reply": ai_response
    }