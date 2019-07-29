# find the 'path' to your battery
# upower -e --enumerate

upower -i /org/freedesktop/UPower/devices/battery_BAT1 | grep -e 'percentage' -e 'time to empty'
