$(function() {
	$( "#datepicker-from" ).datepicker({
      //defaultDate: "+1w",
      changeMonth: true,
      changeYear: true,
      dayNamesMin: [ "S", "M", "T", "W", "T", "F", "S" ],
      monthNamesShort: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      dateFormat: "dd.mm.yy",
      onClose: function( selectedDate ) {
        $( "#datepicker-to" ).datepicker( "option", "minDate", selectedDate );
      },
    });
    $( "#datepicker-to" ).datepicker({
      changeMonth: true,
      changeYear: true,
      dayNamesMin: [ "S", "M", "T", "W", "T", "F", "S" ],
      monthNamesShort: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      dateFormat: "dd.mm.yy",
      onClose: function( selectedDate ) {
        $( "#datepicker-from" ).datepicker( "option", "maxDate", selectedDate );
      }
    });

    $( ".icon-calendar" ).click(function (){
      $(this).prev().focus();
    });
});