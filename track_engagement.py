# track_engagement.py
import datetime

def is_returning_user(sessions):
    active_weeks = 0
    for week in sessions:
        qualifying_sessions = [s for s in week if s['duration'] >= 8]
        if len(qualifying_sessions) >= 3:
            active_weeks += 1
    return active_weeks >= 3

# Simulated test data
sample = [
    [{'duration': 10}, {'duration': 9}, {'duration': 12}],
    [{'duration': 7}, {'duration': 8}, {'duration': 10}],
    [{'duration': 3}, {'duration': 8}, {'duration': 8}],
]

print("Returning user:", is_returning_user(sample))