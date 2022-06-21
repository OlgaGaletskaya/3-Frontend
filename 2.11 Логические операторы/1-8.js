alert( null || 2 || undefined );    //2

alert( alert(1) || 2 || alert(3) ); // перове сообщение 1, второе сообщение 2

alert( 1 && null && 2 );            //null

alert( alert(1) && alert(2) );      // перове сообщение 1, второе сообщение undefined

alert( null || 2 && 3 || 4 );       //3

if (age >= 14 && age <= 90);

if (!(age >= 14 && age <= 90));     //вариант 1
if (age < 14 || age > 90);          //вариант 2

if (-1 || 0) alert( 'first' );      // true  -1(true)||0(false) = true
if (-1 && 0) alert( 'second' );     //false  -1(true)&&0(false) = false
if (null || -1 && 1) alert( 'third' );//true null(false)||-1(true)&&1(true) = null(false)||1(true) = true

