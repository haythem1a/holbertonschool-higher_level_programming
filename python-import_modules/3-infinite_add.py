#!/usr/bin/python3
if __name__ == "__main__":
    import sys

    e = sys.argv
    sum = 0
    for i in range(1, len(e)):
        sum += int(e[i])
    print("{}".format(sum))
