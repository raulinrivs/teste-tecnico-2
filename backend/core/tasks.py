from config.celery import app


@app.task()
def verify_checkIn():
    print("Verifying check-in...")
    # Add your verification logic here
    return "Check-in verified"