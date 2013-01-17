
Toucher.Swipe=Toucher.Listener.extend({

	minDistance : 50,
	maxTime : 1500,

	filterWrappers : function(wrappers,event,controller){
       return controller.useMouse || wrappers.length==1;
	},

	start : function(wrappers,event,controller){
		this.enabled=wrappers.length==1;
	},

	move : function(wrappers,event,controller){

	},

	end : function(wrappers,event,controller){
		if (this.enabled){
			var t0=wrappers[0];
			var time= (t0.endTime - t0.startTime);
			if (time>this.maxTime){
				return;
			}
			var disX= (t0.endPageX - t0.startPageX);
			var disY= (t0.endPageY - t0.startPageY);
			var dis=Math.sqrt(disX*disX+disY*disY);
			if (dis<this.minDistance){
				return;
			}
			var k=disY/disX;
			this.trigger(dis,time,k,wrappers,event,controller);
		}
		this.enabled = false;
	},

	/* Implement by user */
	trigger : function(dis,time,k,wrappers,event,controller){

	}

});
