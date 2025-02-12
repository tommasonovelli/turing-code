/* Dato come input due insiemi andiamo ad effettuarne l'unione
[1, 2] U [2, 3] ==> {1, 2 , 3}

* Codice per la macchina di turing

;starting function
0 * * r 0
0 _ { * starting_point
starting_point * * l starting_point
starting_point _ _ r 0a

0a * * r 0a
0a 0 r r w0
0a 1 r r w1 
0a 2 r r w2
0a 3 r r w3
0a 4 r r w4
0a 5 r r w5
0a 6 r r w6
0a 7 r r w7
0a 8 r r w8
0a 9 r r w9

;coming back function
cb * * l cb
cb { * l check
cb _ _ r 0a

;check no number function
check ] * l check
check r * l check
check , * l check
check [ * l check
check _ * r end

;check if number
check 1 * l cb
check 2 * l cb
check 3 * l cb
check 4 * l cb
check 5 * l cb
check 6 * l cb
check 7 * l cb
check 8 * l cb
check 9 * l cb

;end function
end * * r end
end _ _ l end1
end1 , } * halt

;write-0 state
w0 * * r w0
w0 0 r r w0
w0 _ _ * w0a
w0a _ 0 r w0b
w0b _ , l cb

;write-1 state
w1 * * r w1
w1 1 r r w1
w1 _ _ * w1a
w1a _ 1 r w1b
w1b _ , l cb

;write-2 state
w2 * * r w2
w2 2 r r w2
w2 _ _ * w2a
w2a _ 2 r w2b
w2b _ , l cb

;write-3 state
w3 * * r w3
w3 3 r r w3
w3 _ _ * w3a
w3a _ 3 r w3b
w3b _ , l cb

;write-4 state
w4 * * r w4
w4 4 r r w4
w4 _ _ * w4a
w4a _ 4 r w4b
w4b _ , l cb

;write-5 state
w5 * * r w5
w5 5 r r w5
w5 _ _ * w5a
w5a _ 5 r w5b
w5b _ , l cb

;write-6 state
w6 * * r w6
w6 6 r r w6
w6 _ _ * w6a
w6a _ 6 r w6b
w6b _ , l cb

;write-7 state
w7 * * r w7
w7 7 r r w7
w7 _ _ * w7a
w7a _ 7 r w7b
w7b _ , l cb

;write-8 state
w8 * * r w8
w8 8 r r w8
w8 _ _ * w8a
w8a _ 8 r w8b
w8b _ , l cb

;write-9 state
w9 * * r w9
w9 9 r r w9
w9 _ _ * w9a
w9a _ 9 r w9b
w9b _ , l cb



* Fine codice
*/