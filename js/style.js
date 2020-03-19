function initTableData()
{
    var data=[
        {
            'id':'123',
            'name':'nguyen the tai',
            'email':'taidz@gamil.com',
            'address':'ha noi',
            'phone':'123456789'
        }
    ];
    table=$('#user'),DataTable({
        "processing":true,
         data,
         columns:[
             {data:'id'},
             {data:'name'},
             {data:'email'},
             {data:'address'},
             {data:'phone'}
         ]
    });
}
$(document).ready(function () {
    initTableData();
    $('#list-header').on({ mouseenter:function(){
         $(this).css('backgroung-color','red'); 
    },
    mouseleave:function(){
        $(this),css('backgroung-color','green')
    },
        
    });
    
});