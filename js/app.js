
//var tete = document.createElement("div")
//var datt = new Date()
//var month = datt.getMonth()+1;
//
//var day = datt.getDay();
//var hours = datt.getHours();
//var min  = datt.getMinutes();
//var sx = function(hours){
//	if(hours<12){
//		return "上午";
//	}else{
//		return "下午";
//	}
//};
//if(month<9){
//	month="0"+month;
//}else{
//	month=""+month;
//};
//if(day<9){
//	day="0"+day;
//}else{
//	day=""+day;
//};
//if(hours<9){
//	hours="0"+hours;
//}else if(hours>12){
//	hours=hours-12;
//};
//var shijian = month+"."+day+sx()+hours+":"+min;
// console.log(shijian)
//var shan = $('<button/>',{text:"删除",class:'btn',})
//
//$(document).ready(function(){
//	$("#div-a>button").click(function(){
//		var tex = $('<div/>',{
//			class:'tex',
//		}).appendTo('.div-b')
//		var te1=$('<p/>',{
//			text:$("textarea").val(),class:'link',
//			
//		}).appendTo('.tex');
//		
//		$('.tex').append("<div>",te1,shijian,shan,"</div>");
//		$('.div-b').prepend('.tex');
//	});
//	
//});
//$(document).ready(function(){
//	$(".btn").click(function(){
//		$(this.li).remove();
//	})	
//})

//=============================
Date.toDBNum = function (num) {
    return num>=10?num+"":"0"+num;
};
//07.20 下午3:00
/*
* getTimeString 转换日期格式的方法
* return 07.20 下午3:00
* */
Date.prototype.getTimeString = function () {
    var MM = Date.toDBNum(this.getMonth()+1);
    var dd = Date.toDBNum(this.getDate());
    var h = this.getHours();
    var hh = h>12?"下午"+(h-12):"上午"+h;
    var mm = Date.toDBNum(this.getMinutes());
    return MM+"."+dd+" "+hh+":"+mm;
};

var addNoteView = $(".addNote")
$(".tool>button").click(function () {
    addNoteView.css("display","block");
});

var titleView = $(".addNote>input");
var contenView = $(".addNote>textarea");
var saveButton = $(".addNote>button");
var noteListView = $(".noteList");
saveButton.click(function () {
    addNoteView.css("display","none");
    var date = new Date();
    var item = "<div class='listItem'><h3>"+titleView.val()+"</h3><p>"+date.getTimeString()+"</p><p>"+contenView.val()+"</p><button class='deleteButton'>删除</button></div>";
    noteListView.append(item);

    var button = $(".deleteButton");
    button.click(function () {

        $(this).parent().remove();
    });

    titleView.val("");
    contenView.val("");
});

//============================================




































