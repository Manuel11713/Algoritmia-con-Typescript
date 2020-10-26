##### We say that an algorithm is O(f(n)) if the number of simple operations the computer has to to is eventually less than a constant times f(n), as n increases.

* fn(n) could be linear: f(n) = n
* fn(n) could be quadratic: f(n) = n^2
* fn(n) could be constant: f(n) = 4
* fn(n) could be something entirele different

#### Rules for time complexity.
* Contants does't matter: O(2n) = O(n), O(300) = O(1)
* Lower arguements does't matter O(3n^3+8n+2 = O(n^3).

#### Space Complexity.
* O(1) = booleans, contanst, null, undifined.
* O(n) = strings, arrays or objects.