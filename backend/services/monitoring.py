from fastapi import APIRouter

router = APIRouter()

@router.get("/monitoring/health")
def health():
    return {
        "cpu": 72,
        "memory": 68
    }

@router.get("/monitoring/database")
def database():
    return {
        "status": "healthy"
    }

@router.get("/monitoring/api")
def api():
    return {
        "status": "healthy"
    }