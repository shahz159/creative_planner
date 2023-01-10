var _selectedId = $('#hdnSelectedId').val();
var _SecondSelectedId = $('#hdnSecondSelectedId').val();
var _total = $('#hdntotal').val();
 //tbl_times
$('#tbl_times tr td').on("mouseenter", function () {
    
    if (_selectedId != 0 && _SecondSelectedId == 0) {
        for (var i = 1; i <= _total; i++) {

            if (i > _selectedId) {
                //$("#div_"+i).css("background-color", "yellow");  
                $('#div_' + i).children('.time-slt-card').addClass('time');
            }

            if ((this.id == i) && (i > _selectedId)) {
                // $("#div_"+i).css("background-color", "yellow");
                $('#div_' + i).children('.time-slt-card').addClass('time');
                return false;
            }
        }
    }
}).on("mouseleave", function () {
    if (_selectedId != 0) {
        for (var i = 1; i <= _total; i++) {

            if (i > _selectedId) {
                //$("div.wp-100").css("background-color", "yellow");  
                $('#div_' + i).children('.time-slt-card').removeClass('time');
            }
            // if(this.id == i+1) {
            //  // $("#div_"+(i+1)).css("background-color", "yellow");
            //   $('#div_'+i).children('.time-slt-card').removeClass('active');
            //  return false; 
            // } 
        }
    }
});