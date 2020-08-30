$(function(){

  function threeDigit(id) {
    $(document).on('blur', id, function(){
      var inputVal = $(this).val().replace( /,/g , "");
      $(this).val(Number(inputVal).toLocaleString());
    })
  }

  threeDigit('#number');

})
