/*

* Inizio codice

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
end1 { * r end2
end2 _ } * halt




;write0 state
w0 * * r w0a

w0a * * r w0a
w0a 0 r r w0a
w0a [ * r w0b
w0a { * r w0f

w0b 0 r r w0d ; trovato lo zero ora andiamo a scriverlo nell'insieme finale
w0b * * r w0b
w0b { * r w0f

w0f _ * l cb
w0f * * l cb

w0d * * r w0d
w0d 0 r r w0d
w0d _ 0 r w0e
w0e _ , l cb



;write1 state
w1 * * r w1a

w1a * * r w1a
w1a 1 r r w1a
w1a [ * r w1b
w1a { * r w1f

w1b 1 r r w1d ; trovato lo zero ora andiamo a scriverlo nell'insieme finale
w1b * * r w1b
w1b { * r w1f

w1f _ * l cb
w1f * * l cb

w1d * * r w1d
w1d 1 r r w1d
w1d _ 1 r w1e
w1e _ , l cb



;write2 state
w2 * * r w2a

w2a * * r w2a
w2a 2 r r w2a
w2a [ * r w2b
w2a { * r w2f

w2b 2 r r w2d ; trovato lo zero ora andiamo a scriverlo nell'insieme finale
w2b * * r w2b
w2b { * r w2f

w2f _ * l cb
w2f * * l cb

w2d * * r w2d
w2d 2 r r w2d
w2d _ 2 r w2e
w2e _ , l cb



;write3 state
w3 * * r w3a

w3a * * r w3a
w3a 3 r r w3a
w3a [ * r w3b
w3a { * r w3f

w3b 3 r r w3d ; trovato lo zero ora andiamo a scriverlo nell'insieme finale
w3b * * r w3b
w3b { * r w3f

w3f _ * l cb
w3f * * l cb

w3d * * r w3d
w3d 3 r r w3d
w3d _ 3 r w3e
w3e _ , l cb



;write4 state
w4 * * r w4a

w4a * * r w4a
w4a 4 r r w4a
w4a [ * r w4b
w4a { * r w4f

w4b 4 r r w4d ; trovato lo zero ora andiamo a scriverlo nell'insieme finale
w4b * * r w4b
w4b { * r w4f

w4f _ * l cb
w4f * * l cb

w4d * * r w4d
w4d 4 r r w4d
w4d _ 4 r w4e
w4e _ , l cb



;write5 state
w5 * * r w5a

w5a * * r w5a
w5a 5 r r w5a
w5a [ * r w5b
w5a { * r w5f

w5b 5 r r w5d ; trovato lo zero ora andiamo a scriverlo nell'insieme finale
w5b * * r w5b
w5b { * r w5f

w5f _ * l cb
w5f * * l cb

w5d * * r w5d
w5d 5 r r w5d
w5d _ 5 r w5e
w5e _ , l cb



;write6 state
w6 * * r w6a

w6a * * r w6a
w6a 6 r r w6a
w6a [ * r w6b
w6a { * r w6f

w6b 6 r r w6d ; trovato lo zero ora andiamo a scriverlo nell'insieme finale
w6b * * r w6b
w6b { * r w6f

w6f _ * l cb
w6f * * l cb

w6d * * r w6d
w6d 6 r r w6d
w6d _ 6 r w6e
w6e _ , l cb



;write7 state
w7 * * r w7a

w7a * * r w7a
w7a 7 r r w7a
w7a [ * r w7b
w7a { * r w7f

w7b 7 r r w7d ; trovato lo zero ora andiamo a scriverlo nell'insieme finale
w7b * * r w7b
w7b { * r w7f

w7f _ * l cb
w7f * * l cb

w7d * * r w7d
w7d 7 r r w7d
w7d _ 7 r w7e
w7e _ , l cb



;write8 state
w8 * * r w8a

w8a * * r w8a
w8a 8 r r w8a
w8a [ * r w8b
w8a { * r w8f

w8b 8 r r w8d ; trovato lo zero ora andiamo a scriverlo nell'insieme finale
w8b * * r w8b
w8b { * r w8f

w8f _ * l cb
w8f * * l cb

w8d * * r w8d
w8d 8 r r w8d
w8d _ 8 r w8e
w8e _ , l cb



;write9 state
w9 * * r w9a

w9a * * r w9a
w9a 9 r r w9a
w9a [ * r w9b
w9a { * r w9f

w9b 9 r r w9d ; trovato lo zero ora andiamo a scriverlo nell'insieme finale
w9b * * r w9b
w9b { * r w9f

w9f _ * l cb
w9f * * l cb

w9d * * r w9d
w9d 9 r r w9d
w9d _ 9 r w9e
w9e _ , l cb

* Fine codice

*/ 