
// Tab open states: 12 booleans (true = open). Default: only tab 4 open.
var _tab_default_states = [false,false,false,false,true,false,false,false,false,false,false,false];
var _tab_open_states = _tab_default_states.slice();

function _tab_states_save() {
	try { localStorage.setItem('dp_tab_states', JSON.stringify(_tab_open_states)); } catch(e) {}
}

function _tab_states_load() {
	try {
		var s = localStorage.getItem('dp_tab_states');
		if (s) {
			var a = JSON.parse(s);
			if (Array.isArray(a) && a.length === 12) {
				_tab_open_states = a;
				return true;
			}
		}
	} catch(e) {}
	return false;
}

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
			window._slider_instance = this;

			this.ctrl.click(function(e) {
				e.preventDefault();
				self.open($(this).attr('data-slider-id'), e );

			});

		}

Slider.prototype.open = function (i, e) {
	var idx = parseInt(i, 10);
	this.body.eq(i).slideToggle(this.duration);
	if (!isNaN(idx) && idx >= 0 && idx < _tab_open_states.length) {
		_tab_open_states[idx] = !_tab_open_states[idx];
		_tab_states_save();
	}
};

function _tab_states_restore_dom(slider) {
	for (var i = 0; i < _tab_open_states.length; i++) {
		if (_tab_open_states[i]) {
			slider.body.eq(i).show();
		}
	}
}

$(function() {
	var s = new Slider('#slider', 0);
	_tab_states_load();
	_tab_states_restore_dom(s);
});
