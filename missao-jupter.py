'''
Escreva um programa para converter segundos em horas, minutos e segundos.
'''

segundos = int(input())

s = 0
m = 0
h = 0

while segundos > 0:
    if segundos >= 3600:
        segundos = segundos - 3600
        h = h + 1
    elif segundos <= 3599 and segundos >= 60:
        segundos = segundos - 60
        m = m + 1
    elif segundos > 0 and segundos <= 59:
        s = segundos
        break

print(f'{h}:{m}:{s}')