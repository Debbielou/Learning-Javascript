const result = 1 + 2 * 3 - 4 / 2;
console.log(result); // Output: 6
// Explanation:
// 1 + (2 * 3) - (4 / 2)
// 1 + 6 - 2
// 7 - 2
// 5
// The order of operations is:
// 1. Multiplication (*) and Division (/) from left to right
// 2. Addition (+) and Subtraction (-) from left to right
// 3. Parentheses () are evaluated first
// 4. Exponentiation (**) is evaluated before multiplication and division
// 5. Unary operators (like + and -) are evaluated before binary operators
// 6. The order of operations is also known as BODMAS/BIDMAS/PEDMAS
// 7. BODMAS: Brackets, Orders, Division and Multiplication, Addition and Subtraction
// 8. BIDMAS: Brackets, Indices, Division and Multiplication, Addition and Subtraction
// 9. PEDMAS: Parentheses, Exponents, Division and Multiplication, Addition and Subtraction
// 10. The order of operations is important to understand to avoid errors in calculations
// 11. In JavaScript, the order of operations is similar to that in mathematics
// 12. The order of operations is also known as operator precedence
// 13. Operator precedence determines the order in which operators are evaluated
// 14. Operators with higher precedence are evaluated before operators with lower precedence
// 15. For example, multiplication (*) has higher precedence than addition (+)
// 16. This means that multiplication is evaluated before addition
// 17. In the example above, multiplication is evaluated before addition and subtraction
// 18. This is why the result is 6 and not 5
// 19. If you want to change the order of operations, you can use parentheses
// 20. For example, (1 + 2) * (3 - 4) / 2

const result2 = (1 + 2) * (3 - 4) / 2;
console.log(result2); // Output: -1.5
// Explanation:

const result3 = 24/(2 * 3) + 4 - 5;
console.log(result3); // Output: 2
// Explanation:
// 24 / (2 * 3) + 4 - 5
// 24 / 6 + 4 - 5
// 4 + 4 - 5
// 8 - 5
// 3
// The order of operations is:


