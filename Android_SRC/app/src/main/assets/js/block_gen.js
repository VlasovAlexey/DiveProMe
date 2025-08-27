function Slider(selector, currentId) {
			var self = this;
			this.duration = 200;
			this.obj = $(selector);

			this.ctrl =
					this.obj.find('.header').each(function(i){
						$(this).attr({'data-slider-id': i});
					});

			this.body =
					this.obj.find('.content').each(function(i){
						$(this).attr({'data-slider-id': i});
					})
					.css({display: 'none'});

			this.current = -1;

			this.ctrl.click(function(e) {
				e.preventDefault();
				self.open($(this).attr('data-slider-id'), e );

			});

		}

		/*Slider.prototype.open = function(i,e){
			if (this.current === i) return false;
			if (this.current>-1) {
				//this.body.eq(this.current).slideUp(this.duration);
			}

			this.current = i;

			//this.body.eq(this.current).slideDown(this.duration,function(){(e.currentTarget.scrollIntoView(true)) + 30});
            this.body.eq(this.current).slideDown(this.duration);

		};
		*/
Slider.prototype.open = function (i, e) {
	this.body.eq(i).slideToggle(this.duration);
};

$(function() {
	new Slider('#slider', 0);
});