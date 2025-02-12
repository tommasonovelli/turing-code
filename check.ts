/*

* Inizio Codice

0 _ * r 0
0 [ * r 0
0 ] * r 2
0 0 * r 2
0 1 * r 1
0 2 * r 1
0 3 * r 1
0 4 * r 1
0 5 * r 1
0 6 * r 1
0 7 * r 1
0 8 * r 1
0 9 * r 1

; controllo della virgola dopo numero
1 , * r 0
1 ] * r 2
1 * * l error
1 _ * l error

2 [ * r 0
2 0 * r 1
2 1 * r 1
2 2 * r 1
2 3 * r 1
2 4 * r 1
2 5 * r 1
2 6 * r 1
2 7 * r 1
2 8 * r 1
2 9 * r 1
2 _ * r 3
2 * * l error

3 _ * l halt
3 * * l error

; error state
error * * l error
error _ _ r error1

error1 * I r error2
error1 _ I r error2
error2 * n r error3
error2 _ n r error3
error3 * p r error4
error3 _ p r error4
error4 * u r error5
error4 _ u r error5
error5 * t r error6
error5 _ t r error6
error6 * _ r error7
error6 _ _ r error7
error7 * s r error8
error7 _ s r error8
error8 * y r error9
error8 _ y r error9
error9 * n r error10
error9 _ n r error10
error10 * t r error11
error10 _ t r error11
error11 * a r error12
error11 _ a r error12
error12 * x r error13
error12 _ x r error13
error13 * _ r error14
error13 _ _ r error14
error14 * e r error15
error14 _ e r error15
error15 * r r error16
error15 _ r r error16
error16 * r r error17
error16 _ r r error17
error17 * o r error18
error17 _ o r error18
error18 * r r halt
error18 _ r r halt

* Fine Codice

*/ 
