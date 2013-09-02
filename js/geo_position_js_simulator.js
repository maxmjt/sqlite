/*!
 * geo-location-javascript v0.4.1  Simulator
 * http://code.google.com/p/geo-location-javascript/
 *
 * Copyright (c) 2009 Stan Wiechers
 * Licensed under the MIT licenses.
 *
 * Revision: $Rev: 62 $: 
 * Author: $Author: whoisstan $:
 * Date: $Date: 2009-12-17 15:46:49 -0500 (Thu, 17 Dec 2009) $:    
 */
var geo_position_js_simulator=function(){

	var pub = {};
	var current_pos=null;
	pub.init = function(array)
	{
		var next=0;
		for (i in array)
		{
				if(i==0)
				{
					current_pos=array[i];
					//alert('entro');
				}
				else
				{
				//alert('entro NO');				
				setTimeout((function(pos) { 
					      return function() { 
					        current_pos=pos; 									
					      } 
					    })(array[i]),next);
				}
				next+=array[i].duration;							
		}
	}

	pub.getCurrentPosition = function(locationCallback,errorCallback)
	{
	/*if(geo_position_js.init())
	{
		//document.getElementById('current').innerHTML="Receiving...";
		geo_position_js.getCurrentPosition(success_callback,error_callback,{enableHighAccuracy:true});
		//geo_position_js.getCurrentPosition(show_position,function(){document.getElementById('current').innerHTML="Couldn't get location"},{enableHighAccuracy:true});
	}
	else
	{
		//document.getElementById('current').innerHTML="Functionality not available";
	}*/
	//alert('lat='+p.coords.latitude.toFixed(2)+';lon='+p.coords.longitude.toFixed(2));			
	locationCallback(current_pos);
	}	
	return pub;
}();