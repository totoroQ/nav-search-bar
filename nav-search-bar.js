(function( $, window, document,undefined ){
    $.fn.extend({
		addSearchComponent : function(options_temp) {
			var Options = $.extend({},{
                headerData: [
                    ["goole","www.google.com"],
                    ["baidu","www.baidu.com"]
                ]  
			}, options_temp);
            var headerData = Options.headerData;
            
            $(this).empty();
            
            var search_component =
                `<ul class="header" style="margin-top:6px;margin-bottom:-5px;margin-right:15px;">
                    <input type="search" id = "headerSearch" type="text" placeholder="Search Page" data-provide="typeahead" style="width:180px;height:25px;background:#C0C0C0;border-radius:5px;border:none;padding-left:5px;padding-right:30px;"/>
                    <button id="headerBtnSearch" class="btn btn-primary" style="margin-left:-40px;background:transparent;color:#606060;border:none;">Go</button>
                </ul>`;
            $(this).append(search_component);

            var headerDataArr1 = new Array();
            var headerDataArr2 = new Array();

            $.each(headerData,function (i,obj) {
                headerDataArr1.push(obj[1]);
                headerDataArr2.push(obj[2]);
            })

            $("#headerSearch").typeahead({source:headerDataArr2,
                items: 10,
            });

            $("#headerBtnSearch").click(function () {
                var seachValue = $("#headerSearch").val();
                var searchFlag = false;
                for(var i=0;i<headerDataArr2.length&&searchFlag==false;i++){
                    if(headerDataArr2[i]==seachValue){
                        window.location.href=headerDataArr1[i];
                        searchFlag=true;
                    }
                }
            });

            $("#headerSearch").keydown(function (e) {
                    var e = e || event,
                    keycode = e.which || e.keyCode;
                    if(keycode==13){
                        $("#headerBtnSearch").click();
                    }
            })

			return this;		
		}
	}); 
})( jQuery, window, document );