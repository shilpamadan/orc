$(document).ready(function() {
  $("#visitor_visitor_type").change(function(){
    value = $(this).val();
    if(value == 'bk'){
    $.post("/visitors/add_fields_1",
      function(data){$("#add_fields").html(data)}
    );
    }else{
      $("#add_fields").html('');
    }
  });

  $("#add_info").live('click', function(){
    $.post("/visitors/additional_info",
      function(data){$("#additional_info").html(data)}
    );
  });

  $("#visitor_is_driver_along_true").live('change', function(){
    $.post("/visitors/add_fields_2",
      function(data){$("#add_fields2").html(data)}
    );
  });
  $("#visitor_is_driver_along_false").live('change', function(){
    $("#add_fields2").html('');
  });
  
//  $("#add_info").click(function(){
//    $.post("/visitors/additional_info",
//      function(data){$("#addintional_info").html(data)}
//    );
//  });

//  $("#visitor_is_driver_along_0").change(function(){
//    $("#add_fields2").html('');
//  });

//  $("#visitor_is_driver_along_1").change(function(){
////  $("input[name=visitor[is_driver_along]]").change(function(){
////  $("input[@name='visitor[is_driver_along]']").change(function(){
//    alert('dddddddddddddd');
//    $.post("/visitors/add_fields_2",
//      function(data){$("#add_fields2").html(data)}
//    );
//  });

});