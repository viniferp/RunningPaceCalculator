
def paceCalculator(distance, time):
    try:
        # Calculate pace in minutes per kilometer
        pace = time / distance
        return pace
    except ZeroDivisionError:
        return "Error: Distance cannot be zero."