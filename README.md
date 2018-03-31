# nav-search-bar

## how to use
### in your html file:
`<script type="text/javascript" src="../nav-search-bar.js"></script>`      
`<script type="text/javascript" src="../typeahead.jquery.js"></script>`      
`<div id="search_container"></div>`
        
get typeahead.js form: https://github.com/twitter/typeahead.js


### In your js file:
		$(function (){
                        var Options_temp = {	
                              headerData:[
                                  ["goole","www.google.com"],
                                  ["baidu","www.baidu.com"]
                              ]  
                        };
                        $("#search_container").addSearchComponent(Options_temp);
          })
