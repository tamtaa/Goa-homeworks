def calc(x):
  s=""
  for i in x:
    s+=str(ord(i))
  return int(s.count("7"))*6