from fastapi import APIRouter

router = APIRouter()

@router.get("/users")
def get_users():
    return []

@router.post("/users")
def create_user(user: dict):
    return user

@router.delete("/users/{user_id}")
def delete_user(user_id: int):
    return {
        "deleted": user_id
    }