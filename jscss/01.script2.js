/***********************************
	written by goto 2013.04.13
	for "row Prev/Next"
***********************************/
function rowIframePrevNext(num, max, divID, iframeName, HTMLfileName, row, all){
   var dID=null, str="", str2="";  
   var fontSize1 = 4;
   var fontSize2 = 1;
   var smartphoneFlg = false;

   //for Smartphones
   //if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
   if(isSmartphone()){
	  fontSize1 += 1;
	  fontSize2 += 1;
	  smartphoneFlg = true;
   }
  
   for(j=1; j<3; j++){
	  dID = document.getElementById(divID+j);
	  str = "";
	  str2 = "";

	  //dID.innerHTML = "";
	  for(i=1; i<=max; i++){
	  
	  	 if(i==1 && num!=1){
			//< button (for PCs)
			if(!smartphoneFlg){
	  	  		str += "<div style=\"text-align:left; float:left;\">\n\
	  	  				<input type=\"button\" data-role=\"none\" value=\"&nbsp;<&nbsp;\" \
	  	  				onclick=\""+iframeName+".location.href='"+HTMLfileName+(num-1)+".html'; \
			  	  		rowIframePrevNext("+(num-1)+","+max+",'"+divID+"','"+iframeName+"','"+HTMLfileName+"','"+row+"','"+all+"'); \
			  	  		return false;\">\n</div>\n";

	  	  	//< button (for Smartphones)
	  	  	}else{
	  	  		str2 += "<input type=\"button\" data-role=\"none\" value=\"< Prev\" style=\"WIDTH:49%; HEIGHT:50px;\" \
	  	  				onclick=\""+iframeName+".location.href='"+HTMLfileName+(num-1)+".html'; \
			  	  		rowIframePrevNext("+(num-1)+","+max+",'"+divID+"','"+iframeName+"','"+HTMLfileName+"','"+row+"','"+all+"'); \
			  	  		return false;\">\n";
	  	  	}
	  	  	
	  	  	//<<
	  	  	str += "<a href=\"javascript:void(0)\" onclick=\""+iframeName+".location.href='"+HTMLfileName+i+".html'; \
	  	  			rowIframePrevNext("+i+","+max+",'"+divID+"','"+iframeName+"','"+HTMLfileName+"','"+row+"','"+all+"'); return false;\">\
	  	  			<font size=\""+fontSize1+"\"><<</font></a>\n";
		  	str += "&nbsp;\n";

			//<
			//if(!smartphoneFlg || j!=2){
			str += "<a href=\"javascript:void(0)\" onclick=\""+iframeName+".location.href='"+HTMLfileName+(num-1)+".html'; \
					rowIframePrevNext("+(num-1)+","+max+",'"+divID+"','"+iframeName+"','"+HTMLfileName+"','"+row+"','"+all+"'); return false;\">\
					<font size=\""+fontSize1+"\"><</font></a>\n";
			str += "&nbsp;&nbsp;\n";
			//}
	  	  }
	  	  
	  	  //1 to max
	  	  if(i==num){
	  	  	str += "<strong><font size=\""+fontSize1+"\">"+i+"</font></strong>\n";
		  }else{
  			str += "<a href=\"javascript:void(0)\" onclick=\""+iframeName+".location.href='"+HTMLfileName+i+".html'; \
					rowIframePrevNext("+i+","+max+",'"+divID+"','"+iframeName+"','"+HTMLfileName+"','"+row+"','"+all+"'); return false;\">\
					<font size=\""+fontSize1+"\">"+i+"</font></a>\n";
		  }
	
	  	  if(i==max && num!=max){
	  	  	//>
	  	  	//if(!smartphoneFlg || j!=2){
			str += "&nbsp;&nbsp;";
			str += "<a href=\"javascript:void(0)\" onclick=\""+iframeName+".location.href='"+HTMLfileName+(num+1)+".html'; \
			 		rowIframePrevNext("+(num+1)+","+max+",'"+divID+"','"+iframeName+"','"+HTMLfileName+"','"+row+"','"+all+"'); \
			 		return false;\"><font size=\""+fontSize1+"\">></font></a>\n";
			//}
			
			//>>
			str += "&nbsp;";
			str += "<a href=\"javascript:void(0)\" onclick=\""+iframeName+".location.href='"+HTMLfileName+i+".html'; \
			  	  	rowIframePrevNext("+i+","+max+",'"+divID+"','"+iframeName+"','"+HTMLfileName+"','"+row+"','"+all+"'); return false;\">\
			  	  	<font size=\""+fontSize1+"\">>></font></a>\n";
			
			//> button (for PCs)
			if(!smartphoneFlg){
				str += "<div style=\"text-align:right; float:right;\">\n\
			  	  		<input type=\"button\" data-role=\"none\" value=\"&nbsp;>&nbsp;\" \
			  	  		onclick=\""+iframeName+".location.href='"+HTMLfileName+(num+1)+".html'; \
			  	  		rowIframePrevNext("+(num+1)+","+max+",'"+divID+"','"+iframeName+"','"+HTMLfileName+"','"+row+"','"+all+"'); \
			  	  		return false;\">\n</div>\n";

			//> button (for Smartphones)
			}else{
				str2 += "<input type=\"button\" data-role=\"none\" value=\"Next >\" style=\"WIDTH:49%; HEIGHT:50px;\" \
			  	  		onclick=\""+iframeName+".location.href='"+HTMLfileName+(num+1)+".html'; \
			  	  		rowIframePrevNext("+(num+1)+","+max+",'"+divID+"','"+iframeName+"','"+HTMLfileName+"','"+row+"','"+all+"'); \
			  	  		return false;\">\n";
			}
	 	 }
	 	 
	 	 //< > buttons (for Smartphones)
	 	 if(i==max && smartphoneFlg && (str2!="")){
	 	 	 str += ("<br>\n" + str2);
	 	 }
	  }
	  
	  if(j!=1){
	  	 str += "<br>\n";
	  	 var x = ((num*row)-(row-1));
	  	 var y = (num*row>all)? (all):(num*row);
	  	 if(x!=y)	str += "<font size=\""+fontSize2+"\">["+x+" - "+y+" / "+all+"]</font>\n";
	  	 else		str += "<font size=\""+fontSize2+"\">["+x+" / "+all+"]</font>\n";
	  	 //dID.innerHTML += "<font size=\"1\">["+((num*row)-(row-1))+" - "+( (num*row>all)? (all):(num*row) )+" / "+all+"]</font>";
	  }
	  str += "<br>\n";

	  dID.innerHTML = str;
   }
}

function isSmartphone(){
	if((navigator.userAgent.indexOf('Android') > 0
	 || navigator.userAgent.indexOf('iPhone') > 0
	 || navigator.userAgent.indexOf('iPad') > 0
	 || navigator.userAgent.indexOf('iPod') > 0))
	// && ($(window).width() < 350) )
	//		if( $(window).width() < $(window).height() )
		return true;
	return false;
}