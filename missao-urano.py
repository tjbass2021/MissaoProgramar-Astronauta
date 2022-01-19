'''
Escreva um programa  que recebe um número como entrada e imprime sua tabuada até 10
'''
num = int(input('Insira um número: '))

for i in range(1, 11):
    print(f'{num} x {i} = {num*i}')
