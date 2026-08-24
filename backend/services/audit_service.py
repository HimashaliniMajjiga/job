from fastapi import APIRouter

router = APIRouter()

@router.get("/audit/logs")
def audit_logs():
    return [
        {"event": "JOB_CREATED"},
        {"event": "JOB_DELETED"},
        {"event": "DEPLOYMENT_EXECUTED"},
        {"event": "EMERGENCY_ROLLBACK"}
    ]