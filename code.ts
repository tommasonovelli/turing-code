/*

8. Operazioni su insiemi cifre decimali, Unione Differenza
Intersezione
Input: {1,2}U{2,3}
Output: {1,2,3}

* Inizio codice

; ---------------------------- 
;     Funzione di inizio       
; ---------------------------- 

; andiamo ad aggiungere alla fine una parentesi graffa dove
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
opType D * r d0     ; stato iniziale differenza d0



; ---------------------------- 
;      Funzione di fine       
; ---------------------------- 

; andiamo a definire la funzione di terminazione direttamente
; qua come globale in quanto condivisa da tutti e tre gli algoritmi
; di unione, intersezione e differenza

; andiamo a chiudere l'insieme di output

end * * r end
end _ _ l end_a
end_a , } r end_smile
end_a { * r end_b
end_b _ } r end_smile

end_smile _ ツ r halt



; ---------------------------- 
;            Unione      
; ---------------------------- 

; N.B. tutti gli stati dell'unione avranno prefisso u, almeno uno 
; dei due insiemi deve contenere un valore.
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

uCheck 0 * l uCb
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

; uRead5 function
uRead5 * * r uRead5
uRead5 5 r r uRead5
uRead5 _ 5 r uWritten

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
; dei due insiemi deve contenere un valore.
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

iCheck 0 * l iCb
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



; ---------------------------- 
;         Differenza      
; ---------------------------- 

; N.B. tutti gli stati dell'unione avranno prefisso d, almeno uno 
; dei due insiemi deve contenere un valore.
; andiamo a definire uno stato iniziale per l'unione dove poi
; andremo ad eseguire i relativi stati in base al numero letto

d0 * * r d0
d0 0 * r dRead0
d0 1 * r dRead1
d0 2 * r dRead2
d0 3 * r dRead3
d0 4 * r dRead4
d0 5 * r dRead5
d0 6 * r dRead6
d0 7 * r dRead7
d0 8 * r dRead8
d0 9 * r dRead9
d0 { * r end


; andiamo a definire tutte le operazioni necessarie qualora 
; incontrassimo un numero decimale (0-9) nel primo insieme o nel
; secondo

; la funzione una volta letto e identificato il numero lo sostituisce
; (es. dRead0 --> 0 numero/valore identificativo della funzione)
; con una r (read: letto), scorre fino a raggiungere la prima 
; posizione libera nell'insieme di output e lo aggiunge seguito da
; una virgola per separare i valori


; dRead0 function
dRead0 * * r dRead0                         ; scorro il nastro
dRead0 { * l dRead0_del                     ; se incontro il { torno a capo cancellando tutti i valori identificativi
dRead0 [ * r dRead0_checkCouple             ; verifico che il numero sia presente nel secondo insieme

dRead0_checkCouple * * r dRead0_checkCouple    ; verifico che il valore sia nel secondo insieme
dRead0_checkCouple { * r dRead0_writeResult    ; quando raggiungo la { posso andare a concludere l'operazione scrivendo il risultato nell'output
dRead0_checkCouple 0 r r dRead0_checked        ; ci sono utleriori altri valori li vado a sostituire con r

dRead0_checked * * r dRead0_checked         ; in queste tre righe controllo dove finisce il secondo insieme
dRead0_checked 0 r r dRead0_checked         ; poichè abbiamo trovato il valore identificativo nel secondo insieme 
dRead0_checked ] * r dRead0_del             ; cancello il valore anche nel primo insieme

dRead0_del 0 r l dRead0_del     ; cancello tutti i valori identificativi della funzione spostandomi
dRead0_del * * l dRead0_del     ; a sinistra per evitare di ripetere l'operazione con lo stesso numero
dRead0_del _ * r d0             ; una volta finita questa operazione di sostituzione torno allo stato iniziale d0 per continuare la differenza

dRead0_writeResult * * r dRead0_writeResult         ; qualora non trovassi il valore identificativo nel secondo insieme
dRead0_writeResult _ 0 r dRead0_writeResult_a       ; a questo punto posso andare a riportare il valore nell'insieme output
dRead0_writeResult_a _ , l dRead0_writeResult_b     ; mi sposto a sinistra fino a trovare il primo spazio disponibile
dRead0_writeResult_b * * l dRead0_writeResult_b
dRead0_writeResult_b { * l dRead0_del               ; una volta scritto il valore, torno indietro per far partire l'operazione di eliminazione dei valori ripetenti
                                                    ; per evitare di ripetere inutilmente questo blocco di istruzioni


; dRead1 function
dRead1 * * r dRead1
dRead1 { * l dRead1_del
dRead1 [ * r dRead1_checkCouple

dRead1_checkCouple * * r dRead1_checkCouple    
dRead1_checkCouple { * r dRead1_writeResult    
dRead1_checkCouple 1 r r dRead1_checked   

dRead1_checked * * r dRead1_checked
dRead1_checked 1 r r dRead1_checked
dRead1_checked ] * r dRead1_del

dRead1_del 1 r l dRead1_del
dRead1_del * * l dRead1_del
dRead1_del _ * r d0 

dRead1_writeResult * * r dRead1_writeResult
dRead1_writeResult _ 1 r dRead1_writeResult_a
dRead1_writeResult_a _ , l dRead1_writeResult_b
dRead1_writeResult_b * * l dRead1_writeResult_b
dRead1_writeResult_b { * l dRead1_del


; dRead2 function
dRead2 * * r dRead2
dRead2 { * l dRead2_del
dRead2 [ * r dRead2_checkCouple

dRead2_checkCouple * * r dRead2_checkCouple    
dRead2_checkCouple { * r dRead2_writeResult    
dRead2_checkCouple 2 r r dRead2_checked   

dRead2_checked * * r dRead2_checked
dRead2_checked 2 r r dRead2_checked
dRead2_checked ] * r dRead2_del

dRead2_del 2 r l dRead2_del
dRead2_del * * l dRead2_del
dRead2_del _ * r d0 

dRead2_writeResult * * r dRead2_writeResult
dRead2_writeResult _ 2 r dRead2_writeResult_a
dRead2_writeResult_a _ , l dRead2_writeResult_b
dRead2_writeResult_b * * l dRead2_writeResult_b
dRead2_writeResult_b { * l dRead2_del


; dRead3 function
dRead3 * * r dRead3
dRead3 { * l dRead3_del
dRead3 [ * r dRead3_checkCouple

dRead3_checkCouple * * r dRead3_checkCouple    
dRead3_checkCouple { * r dRead3_writeResult    
dRead3_checkCouple 3 r r dRead3_checked   

dRead3_checked * * r dRead3_checked
dRead3_checked 3 r r dRead3_checked
dRead3_checked ] * r dRead3_del

dRead3_del 3 r l dRead3_del
dRead3_del * * l dRead3_del
dRead3_del _ * r d0 

dRead3_writeResult * * r dRead3_writeResult
dRead3_writeResult _ 3 r dRead3_writeResult_a
dRead3_writeResult_a _ , l dRead3_writeResult_b
dRead3_writeResult_b * * l dRead3_writeResult_b
dRead3_writeResult_b { * l dRead3_del


; dRead4 function
dRead4 * * r dRead4
dRead4 { * l dRead4_del
dRead4 [ * r dRead4_checkCouple

dRead4_checkCouple * * r dRead4_checkCouple    
dRead4_checkCouple { * r dRead4_writeResult    
dRead4_checkCouple 4 r r dRead4_checked   

dRead4_checked * * r dRead4_checked
dRead4_checked 4 r r dRead4_checked
dRead4_checked ] * r dRead4_del

dRead4_del 4 r l dRead4_del
dRead4_del * * l dRead4_del
dRead4_del _ * r d0

dRead4_writeResult * * r dRead4_writeResult
dRead4_writeResult _ 4 r dRead4_writeResult_a
dRead4_writeResult_a _ , l dRead4_writeResult_b
dRead4_writeResult_b * * l dRead4_writeResult_b
dRead4_writeResult_b { * l dRead4_del


; dRead5 function
dRead5 * * r dRead5
dRead5 { * l dRead5_del
dRead5 [ * r dRead5_checkCouple

dRead5_checkCouple * * r dRead5_checkCouple    
dRead5_checkCouple { * r dRead5_writeResult    
dRead5_checkCouple 5 r r dRead5_checked   

dRead5_checked * * r dRead5_checked
dRead5_checked 5 r r dRead5_checked
dRead5_checked ] * r dRead5_del

dRead5_del 5 r l dRead5_del
dRead5_del * * l dRead5_del
dRead5_del _ * r d0 

dRead5_writeResult * * r dRead5_writeResult
dRead5_writeResult _ 5 r dRead5_writeResult_a
dRead5_writeResult_a _ , l dRead5_writeResult_b
dRead5_writeResult_b * * l dRead5_writeResult_b
dRead5_writeResult_b { * l dRead5_del


; dRead6 function
dRead6 * * r dRead6
dRead6 { * l dRead6_del
dRead6 [ * r dRead6_checkCouple

dRead6_checkCouple * * r dRead6_checkCouple    
dRead6_checkCouple { * r dRead6_writeResult    
dRead6_checkCouple 6 r r dRead6_checked   

dRead6_checked * * r dRead6_checked
dRead6_checked 6 r r dRead6_checked
dRead6_checked ] * r dRead6_del

dRead6_del 6 r l dRead6_del
dRead6_del * * l dRead6_del
dRead6_del _ * r d0 

dRead6_writeResult * * r dRead6_writeResult
dRead6_writeResult _ 6 r dRead6_writeResult_a
dRead6_writeResult_a _ , l dRead6_writeResult_b
dRead6_writeResult_b * * l dRead6_writeResult_b
dRead6_writeResult_b { * l dRead6_del


; dRead7 function
dRead7 * * r dRead7
dRead7 { * l dRead7_del
dRead7 [ * r dRead7_checkCouple

dRead7_checkCouple * * r dRead7_checkCouple    
dRead7_checkCouple { * r dRead7_writeResult    
dRead7_checkCouple 7 r r dRead7_checked   

dRead7_checked * * r dRead7_checked
dRead7_checked 7 r r dRead7_checked
dRead7_checked ] * r dRead7_del

dRead7_del 7 r l dRead7_del
dRead7_del * * l dRead7_del
dRead7_del _ * r d0 

dRead7_writeResult * * r dRead7_writeResult
dRead7_writeResult _ 7 r dRead7_writeResult_a
dRead7_writeResult_a _ , l dRead7_writeResult_b
dRead7_writeResult_b * * l dRead7_writeResult_b
dRead7_writeResult_b { * l dRead7_del


; dRead8 function
dRead8 * * r dRead8
dRead8 { * l dRead8_del
dRead8 [ * r dRead8_checkCouple

dRead8_checkCouple * * r dRead8_checkCouple    
dRead8_checkCouple { * r dRead8_writeResult    
dRead8_checkCouple 8 r r dRead8_checked   

dRead8_checked * * r dRead8_checked
dRead8_checked 8 r r dRead8_checked
dRead8_checked ] * r dRead8_del

dRead8_del 8 r l dRead8_del
dRead8_del * * l dRead8_del
dRead8_del _ * r d0 

dRead8_writeResult * * r dRead8_writeResult
dRead8_writeResult _ 8 r dRead8_writeResult_a
dRead8_writeResult_a _ , l dRead8_writeResult_b
dRead8_writeResult_b * * l dRead8_writeResult_b
dRead8_writeResult_b { * l dRead8_del


; dRead9 function
dRead9 * * r dRead9
dRead9 { * l dRead9_del
dRead9 [ * r dRead9_checkCouple

dRead9_checkCouple * * r dRead9_checkCouple    
dRead9_checkCouple { * r dRead9_writeResult    
dRead9_checkCouple 9 r r dRead9_checked   

dRead9_checked * * r dRead9_checked
dRead9_checked 9 r r dRead9_checked
dRead9_checked ] * r dRead9_del

dRead9_del 9 r l dRead9_del
dRead9_del * * l dRead9_del
dRead9_del _ * r d0 

dRead9_writeResult * * r dRead9_writeResult
dRead9_writeResult _ 9 r dRead9_writeResult_a
dRead9_writeResult_a _ , l dRead9_writeResult_b
dRead9_writeResult_b * * l dRead9_writeResult_b
dRead9_writeResult_b { * l dRead9_del


* Fine codice

*/ 