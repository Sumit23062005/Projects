# # a=100 
# # print("The type of variable having value", a, " is ", type(a))
 
# a="hello everyone  "
# print(a[5:])
# print(a.upper())
# print(a.strip())
# print(a.replace("e","r"))
# string1="viit college"
# print("initial string is:")
# print(string1)
# c=55
# txt="the given number is {}"
# print(txt.format(c))
# quantity=6
# itemno=63
# price=36.44
# # txt="i want {} quantity , itemno {}, of price{}"
# myorder=" i want to pay {2} dollars for {0} peices of item{1}."
# print(myorder.format(quantity,itemno,price))
# sample="my name is \"sumit\" jadhav "
# print(sample)
# list1=[1,2,"Python","Program",15.9]
# print(list1)
# print(type(list1))
# my_list=["p","q","r","m","o","e"]
# print(my_list[0:4])
# listt=[2,3,4,5,6,7]
# listt.append(34)
# print("after append ;", listt)
# number=[344,434,566,232,55]
# listt.extend(number)
# print(listt)
# listt.insert(1,33)
# print(listt)
# languages=['java','python','c++']
# languages[2]='c'
# print(languages)
# languages = ['Python', 'Swift', 'C++', 'C', 'Java', 'Rust', 'R']
# del languages[2]
# print(languages)
# languages.remove('Python')
# print(languages)
# List = [2.3, 4.445, 3, 5.33, 1.054, 2.5] 
# print(List.pop(3))   
list1=[12,14,16,39,40]
# for i in list1:
#    print(i)
# print(16 in list1)
# print(min(list1))
# print(max(list1))
# list1.reverse()
# print(list1)
# for i in range (1,9,2):
#     print(i)
# for i in range(1, 4): 
# 	for j in range(1, 4): 
# 		print(i, j) 
# adj = ["red", "big", "tasty"]
# fruits = ["apple", "banana", "cherry"]

# for x in adj:
#   for y in fruits:
#     print(x, y)
# t = ((1, 2), (3, 4), (5, 6)) 
# for a, b in t: 
# 	print(a, b) 

# count = 0 
# while (count <9):
# 	 print('The count is:', count) 
# 	 count = count + 1 
# print("Good bye!") 
# age = 32
# while age > 18:
#     print('You can vote')

# list = [1, 3, 5, 7, 9, 10]
# i = 0
# while i < len(list):
#     print(list[i])
#     i += 1
# a = [10, 20, 30, 40, 50]
# i=0
# while i < len(a):
#        print(a.pop())
# else:
#      print("There are no elements are left in the list")
# tup = (5, 3, 2, 8, 4, 4, 6, 2) 
# sum = 0 
# index = 0 
# while index < len(tup): 
# 	sum = sum + tup [index]
# 	index = index+1 
# print(sum) 
# i=1
# while i<=10:
#  print(i,end= "")
#  i+=1
# x=5
# while(x<15):    
#        print(x**2)    
#        x=x+3

# num = int(input("Enter any number"))       
# counter = 1      
      
# while counter <= 10:
#     ans = num * counter      
#     print (num, '*', counter, '=', ans)      
#     counter += 1
# n = int(input("Enter a Number of rows "))
# i=1
# while(i<=n):
#             j=1
#             while(j<=i):
#                      print("*", end = " ")
#                      j=j+1
#             print()
#             i=i+1
for i in range(1,5):
    print('*'*i)




