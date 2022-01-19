'''
Escreva um programa  para aceitar um número e verifique se o número é par ou não. Imprime 1 se o número for par ou 0 se o número for ímpar. 
'''

num = input('Insira um número: ')
num = int(num)

if num % 2 == 0:
    print('1')
else:
    print('0') 