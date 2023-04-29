# Part 2 Answers
1. 3 is printed: i is declared as a "var", meaning it is of function scope. Thus, since the size of the array is 3, it increments 3 times while the code is run and finally is printed to the console.
2. 150 is printed: discountedPrice is a function scope variable. The last value it contains is 300 * (1-0.5) = 150. This is the last iteration of the loop, so this value is then printed.
3. 150 is printed: finalPrice is declared as a function scope variable. On the last iteration of the loop, it is assigned the value of round(150 * 100) / 100 = 15000 / 100 = 150, and thus this value is printed.
4. The function returns [50, 100, 150]: Each rounded discounted price is calculated from the original array of prices provided through iteration during the for loop, which is then stored and returned as an array that is printed.
5. Error: i is limited to the scope of the for loop since it is defined with "let". Line 12 tries to use it outside this scope, causing the error.
6. Error: discountedPrice is limited to the scope of the for loop, and trying to use it outside the loop causes an error.
7. 150 is printed: finalScope is defined at the start of the function with the "let" keyword, and it is accessible to the rest of the function as a result. The last iteration of the for loop causes finalPrice to be assigned the value of 150, which is then printed.
8. The function returns [50, 100, 150]: The code works just like as explained in 4, and the changes to variable scope do not cause any issues.
9. Error: Same reason as question 5, as i is used outside of the scope its declared in.
10. 3 is printed: length is a constant initialized with the length of the input array of prices, which in this case is 3. This is then printed.
11. The function returns [50, 100, 150]: The discounts are calculated and stored within a constant variable declared in the for loop, which is then stored in the array. A constant array's contents can be modified with no issue. The array is then returned.
12. 
    1.  student.name
    2.  student['Grad Year']
    3.  student.greeting()
    4.  student['Favorite Teacher'].name
    5.  student.courseLoad[0]
13. 
    1. '32': 2 is converted to a string and is concatenated with '3', resulting in '32'
    2. 1: 3 is converted to a number and then subtraction occurs, resulting in 1.
    3. 3: null is treated like a 0, so 3 is returned
    4. '3null': null is treated like the string 'null', so by string concatenation we get '3null'
    5. 4: true is treated like a 1, so addition leads to 4.
    6. 0: Both null and false are converted to 0, which adds to 0.
    7. '3undefined': undefined is converted to a string, and through string concatenation the result is '3undefined'
    8. NaN: undefined maps to NaN, which in substraction will result in NaN as the result.
 14. 
     1.  true: '2' is converted to the number 2, which is greater than 1, so true is returned.
     2.  false: in lexographical order, '1' comes before '2', so false is returned.
     3.  true: '2' is converted to the number 2, which is equal to 2, so true is returned.
     4.  false: The integer 2 is not strictly equal to the string '2', so false is returned.
     5.  false: true is converted to the number 1 which is not equal to 2, so false is returned.
     6.  true: Boolean(2) is true, which is strictly equal to 2.
 15. === is strict equals, meaning different types are always different, and if they are the same type, it checks equality as per normal. However, == will convert both operands to numbers if they are different (or will check equality normally otherwise), and will then check equality, leading to different results in certain cases.
 16. [see part2-question16.js](expose\javascript\part2-question16.js)
 17. The result will be [2, 4, 6]. An empty array is first initialized when the modifyArray function is called, at which point the result of the "callback" function being called with the argument being each element in the array originally passed in is pushed to the new array. In this case, for the elements 1, 2, and 3, doSomething is called, and the result for each case is pushed. Thus, the result will be each element from the original array doubled.
 18. [see part2-question18.js](expose\javascript\part2-question18.js)
 19. The output will be 1, 4, 3, 2 printed on separate lines to the console in that order.