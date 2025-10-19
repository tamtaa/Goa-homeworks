def zero_fuel(distance_to_pump, mpg, fuel_left):
    if mpg * fuel_left - distance_to_pump == 0:
        return True
    elif distance_to_pump < (mpg * fuel_left):
        return True
    else: 
        return False