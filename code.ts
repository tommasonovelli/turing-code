/*

8. Operazioni su insiemi cifre decimali, Unione Differenza
Intersezione
Input: {1,2}U{2,3}
Output: {1,2,3}

* Inizio codice

; ---------------------------- 
;     Funzione di inizio       
; ---------------------------- 

; andiamo ad aggiungere alla fine una parentesi grafa dove
; poi inseriremo i valori dell'insieme di output
0 * * r 0
0 _ { * start


; torno all'inizio dell'input per cominciare ad effettuare
; le operazioni necessarie a risolvere il problema

start * * l start
start _ _ r opType


; in base alla lettera che andremo ad inserire tra le seguenti 
; (U, I, D) andrà ad eseguire rispettivamente unione,
; intersezione o differenza (type of operation)

opType U * r u0     ; stato iniziale unione u0
opType I * r i0     ; stato iniziale intersezione i0
opType D * r d



; ---------------------------- 
;     Funzione di inizio       
; ---------------------------- 

; andiamo a definire la funzione di terminazione direttamente
; qua come globale in quanto condivisa da tutti e tre gli algoritmi
; di unione, intersezione e differenza

; andiamo a chiudere l'insieme di output

end * * r end
end _ _ l end1
end1 , } * halt
end1 { * r end2
end2 _ } * halt



; ---------------------------- 
;            Unione      
; ---------------------------- 

; N.B. tutti gli stati dell'unione avranno prefisso u, almeno uno 
; dei due insiemi deve contentere un valore.
; andiamo a definire uno stato iniziale per l'unione dove poi
; andremo ad eseguire i relativi stati in base al numero letto

u0 * * r u0
u0 0 r r uRead0
u0 1 r r uRead1
u0 2 r r uRead2
u0 3 r r uRead3
u0 4 r r uRead4
u0 5 r r uRead5
u0 6 r r uRead6
u0 7 r r uRead7
u0 8 r r uRead8
u0 9 r r uRead9


; definiamo una funzione di ritorno al primo valore del primo 
; insieme (coming back function), inseriamo anche una funzione
; di controllo spiegata sotto (check function)

uCb * * l uCb
uCb { * l uCheck
uCb _ _ r u0


; in fase di ritorno dall'insieme di output voglio verificare che  
; tutti i numeri nei due insiemi siano stati letti così da poter 
; definire conclusa l'operazione svolta dal programma

; andiamo a scorrere verso sinistra fino a trovare il prossimo
; spazio vuoto (_), se non incontriamo numeri andiamo a concludere
; il programma con la funzione di ending

uCheck U * l uCheck
uCheck ] * l uCheck
uCheck r * l uCheck
uCheck , * l uCheck
uCheck [ * l uCheck
uCheck _ * r end 


; se invece incontriamo numeri vuol dire che dobbiamo ripetere 
; ancora almeno una volta l'operazione di unione poiché il 
; programma non avrà ancora inserito tutti i valori nell'output

; quindi ritorniamo nella coming back function

uCheck 1 * l uCb
uCheck 2 * l uCb
uCheck 3 * l uCb
uCheck 4 * l uCb
uCheck 5 * l uCb
uCheck 6 * l uCb
uCheck 7 * l uCb
uCheck 8 * l uCb
uCheck 9 * l uCb


; andiamo a definire tutte le operazioni necessarie qualora 
; incontrassimo un numero decimale (0-9) nel primo insieme o nel
; secondo

; la funzione una volta letto e identificato il numero lo sostituisce
; (es. uRead0 --> 0 numero/valore identificativo della funzione)
; con una r (read: letto), scorre fino a raggiungere la prima 
; posizione libera nell'insieme di output e lo aggiunge seguito da
; una virgola per separare i valori

; uRead0 function
uRead0 * * r uRead0     ; scorro il nastro
uRead0 0 r r uRead0     ; se incontro altri valori identificativi li sostituisce con r
uRead0 _ 0 r uWritten   ; sostituisco lo spazio vuoto con il numero

; uRead1 function
uRead1 * * r uRead1
uRead1 1 r r uRead1
uRead1 _ 1 r uWritten

; uRead2 function
uRead2 * * r uRead2
uRead2 2 r r uRead2
uRead2 _ 2 r uWritten

; uRead3 function
uRead3 * * r uRead3
uRead3 3 r r uRead3
uRead3 _ 3 r uWritten

; uRead4 function
uRead4 * * r uRead4
uRead4 4 r r uRead4
uRead4 _ 4 r uWritten

; uRead4 function
uRead4 * * r uRead4
uRead4 4 r r uRead4
uRead4 _ 4 r uWritten

; uRead6 function
uRead6 * * r uRead6
uRead6 6 r r uRead6
uRead6 _ 6 r uWritten

; uRead7 function
uRead7 * * r uRead7
uRead7 7 r r uRead7
uRead7 _ 7 r uWritten

; uRead8 function
uRead8 * * r uRead8
uRead8 8 r r uRead8
uRead8 _ 8 r uWritten

; uRead9 function
uRead9 * * r uRead9
uRead9 9 r r uRead9
uRead9 _ 9 r uWritten

; (written function) una volta scritto il valore aggiungo la virgola dopo
; di esso e tornando allo stato iniziale usando uCb
uWritten _ , l uCb        



; ---------------------------- 
;        Intersezione      
; ---------------------------- 

; N.B. tutti gli stati dell'unione avranno prefisso i, almeno uno 
; dei due insiemi deve contentere un valore.
; andiamo a definire uno stato iniziale per l'unione dove poi
; andremo ad eseguire i relativi stati in base al numero letto

i0 * * r i0
i0 0 r r iRead0
i0 1 r r iRead1
i0 2 r r iRead2
i0 3 r r iRead3
i0 4 r r iRead4
i0 5 r r iRead5
i0 6 r r iRead6
i0 7 r r iRead7
i0 8 r r iRead8
i0 9 r r iRead9


; definiamo una funzione di ritorno al primo valore del primo 
; insieme (coming back function), inseriamo anche una funzione
; di controllo spiegata sotto (check function)

iCb * * l iCb
iCb { * l iCheck
iCb _ _ r i0


; in fase di ritorno dall'insieme di output voglio verificare che  
; tutti i numeri nei due insiemi siano stati letti così da poter 
; definire conclusa l'operazione svolta dal programma

; andiamo a scorrere verso sinistra fino a trovare il prossimo
; spazio vuoto (_), se non incontriamo numeri andiamo a concludere
; il programma con la funzione di ending

iCheck I * l iCheck
iCheck ] * l iCheck
iCheck r * l iCheck
iCheck , * l iCheck
iCheck [ * l iCheck
iCheck _ * r end 


; se invece incontriamo numeri vuol dire che dobbiamo ripetere 
; ancora almeno una volta l'operazione di unione poiché il 
; programma non avrà ancora inserito tutti i valori nell'output

; quindi ritorniamo nella coming back function

iCheck 1 * l iCb
iCheck 2 * l iCb
iCheck 3 * l iCb
iCheck 4 * l iCb
iCheck 5 * l iCb
iCheck 6 * l iCb
iCheck 7 * l iCb
iCheck 8 * l iCb
iCheck 9 * l iCb


; andiamo a definire tutte le operazioni necessarie qualora 
; incontrassimo un numero decimale (0-9) nel primo insieme o nel
; secondo

; la funzione una volta letto e identificato il numero lo sostituisce
; (es. iRead0 --> 0 numero/valore identificativo della funzione)
; con una r (read: letto), scorre fino a raggiungere la prima 
; posizione libera nell'insieme di output e lo aggiunge seguito da
; una virgola per separare i valori


; iRead0 function
iRead0 * * r iRead0     ; scorro il nastro
iRead0 0 r r iRead0     ; se incontro altri valori identificativi li sostituisce con r

iRead0 [ * r iRead0_checkCouple
iRead0 { * r iRead0_unchecked   ; nel caso in cui non legga niente nel primo insieme

iRead0_unchecked _ * l iCb      ; condizione di esistenza in entrambi gli insiemi non
iRead0_unchecked * * l iCb      ; verificata, torna allo stato iniziale i0

iRead0_checkCouple 0 r r iRead0_checked         ; controllare che il numero identificativo sia 
iRead0_checkCouple * * r iRead0_checkCouple     ; presente nel secondo insieme

iRead0_checkCouple { * r iRead0_unchecked       ; non legge niente nel secondo insieme

iRead0_checked * * r iRead0_checked     ; scorre il nastro e sostituisce eventualmente
iRead0_checked 0 * r iRead0_checked     ; altri numeri identificativi della funzione
iRead0_checked _ 0 r iWritten           ; aggiunge il valore all'output


; iRead1 function
iRead1 * * r iRead1     
iRead1 1 r r iRead1     

iRead1 [ * r iRead1_checkCouple
iRead1 { * r iRead1_unchecked  

iRead1_unchecked _ * l iCb     
iRead1_unchecked * * l iCb    

iRead1_checkCouple 1 r r iRead1_checked      
iRead1_checkCouple * * r iRead1_checkCouple

iRead1_checkCouple { * r iRead1_unchecked

iRead1_checked * * r iRead1_checked
iRead1_checked 1 * r iRead1_checked
iRead1_checked _ 1 r iWritten


; iRead2 function
iRead2 * * r iRead2     
iRead2 2 r r iRead2     

iRead2 [ * r iRead2_checkCouple
iRead2 { * r iRead2_unchecked  

iRead2_unchecked _ * l iCb     
iRead2_unchecked * * l iCb    

iRead2_checkCouple 2 r r iRead2_checked      
iRead2_checkCouple * * r iRead2_checkCouple

iRead2_checkCouple { * r iRead2_unchecked

iRead2_checked * * r iRead2_checked
iRead2_checked 2 * r iRead2_checked
iRead2_checked _ 2 r iWritten


; iRead3 function
iRead3 * * r iRead3     
iRead3 3 r r iRead3     

iRead3 [ * r iRead3_checkCouple
iRead3 { * r iRead3_unchecked  

iRead3_unchecked _ * l iCb     
iRead3_unchecked * * l iCb    

iRead3_checkCouple 3 r r iRead3_checked      
iRead3_checkCouple * * r iRead3_checkCouple

iRead3_checkCouple { * r iRead3_unchecked

iRead3_checked * * r iRead3_checked
iRead3_checked 3 * r iRead3_checked
iRead3_checked _ 3 r iWritten


; iRead4 function
iRead4 * * r iRead4     
iRead4 4 r r iRead4     

iRead4 [ * r iRead4_checkCouple
iRead4 { * r iRead4_unchecked  

iRead4_unchecked _ * l iCb     
iRead4_unchecked * * l iCb    

iRead4_checkCouple 4 r r iRead4_checked      
iRead4_checkCouple * * r iRead4_checkCouple

iRead4_checkCouple { * r iRead4_unchecked

iRead4_checked * * r iRead4_checked
iRead4_checked 4 * r iRead4_checked
iRead4_checked _ 4 r iWritten


; iRead5 function
iRead5 * * r iRead5     
iRead5 5 r r iRead5     

iRead5 [ * r iRead5_checkCouple
iRead5 { * r iRead5_unchecked  

iRead5_unchecked _ * l iCb     
iRead5_unchecked * * l iCb    

iRead5_checkCouple 5 r r iRead5_checked      
iRead5_checkCouple * * r iRead5_checkCouple

iRead5_checkCouple { * r iRead5_unchecked

iRead5_checked * * r iRead5_checked
iRead5_checked 5 * r iRead5_checked
iRead5_checked _ 5 r iWritten


; iRead6 function
iRead6 * * r iRead6     
iRead6 6 r r iRead6     

iRead6 [ * r iRead6_checkCouple
iRead6 { * r iRead6_unchecked  

iRead6_unchecked _ * l iCb     
iRead6_unchecked * * l iCb    

iRead6_checkCouple 6 r r iRead6_checked      
iRead6_checkCouple * * r iRead6_checkCouple

iRead6_checkCouple { * r iRead6_unchecked

iRead6_checked * * r iRead6_checked
iRead6_checked 6 * r iRead6_checked
iRead6_checked _ 6 r iWritten


; iRead7 function
iRead7 * * r iRead7     
iRead7 7 r r iRead7     

iRead7 [ * r iRead7_checkCouple
iRead7 { * r iRead7_unchecked  

iRead7_unchecked _ * l iCb     
iRead7_unchecked * * l iCb    

iRead7_checkCouple 7 r r iRead7_checked      
iRead7_checkCouple * * r iRead7_checkCouple

iRead7_checkCouple { * r iRead7_unchecked

iRead7_checked * * r iRead7_checked
iRead7_checked 7 * r iRead7_checked
iRead7_checked _ 7 r iWritten


; iRead8 function
iRead8 * * r iRead8     
iRead8 8 r r iRead8     

iRead8 [ * r iRead8_checkCouple
iRead8 { * r iRead8_unchecked  

iRead8_unchecked _ * l iCb     
iRead8_unchecked * * l iCb    

iRead8_checkCouple 8 r r iRead8_checked      
iRead8_checkCouple * * r iRead8_checkCouple

iRead8_checkCouple { * r iRead8_unchecked

iRead8_checked * * r iRead8_checked
iRead8_checked 8 * r iRead8_checked
iRead8_checked _ 8 r iWritten


; iRead9 function
iRead9 * * r iRead9     
iRead9 9 r r iRead9     

iRead9 [ * r iRead9_checkCouple
iRead9 { * r iRead9_unchecked  

iRead9_unchecked _ * l iCb     
iRead9_unchecked * * l iCb    

iRead9_checkCouple 9 r r iRead9_checked      
iRead9_checkCouple * * r iRead9_checkCouple

iRead9_checkCouple { * r iRead9_unchecked

iRead9_checked * * r iRead9_checked
iRead9_checked 9 * r iRead9_checked
iRead9_checked _ 9 r iWritten


; (written function) una volta scritto il valore aggiungo la virgola dopo
; di esso e tornando allo stato iniziale usando iCb
iWritten _ , l iCb    

* Fine codice

*/ 