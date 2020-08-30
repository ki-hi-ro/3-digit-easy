$(function(){

  function threeDigit(id) {
    $(document).on('blur', id, function(){
      var inputVal = $(this).val();
      $(this).val(Number(inputVal).toLocaleString());
    })
  }

  threeDigit('#number');

})