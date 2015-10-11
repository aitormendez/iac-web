(function() {
	var triggerBttn1 = document.getElementById('trigger-overlay1');
	var triggerBttn2 = document.getElementById('trigger-overlay2');
	var triggerBttn3 = document.getElementById('trigger-overlay3');
	var triggerLnk5 = document.getElementById('trigger-link-overlay3');
	var triggerBttn4 = document.getElementById('trigger-overlay4');

	var overlay1 = document.querySelector('div.overlay1');
	var overlay2 = document.querySelector('div.overlay2');
	var overlay3 = document.querySelector('div.overlay3');
	var overlay4 = document.querySelector('div.overlay4');

	var closeBttn1 = overlay1.querySelector('button.overlay-close');
	var closeBttn2 = overlay2.querySelector('button.overlay-close');
	var closeBttn3 = overlay3.querySelector('button.overlay-close');
	var closeBttn4 = overlay4.querySelector('button.overlay-close');


	transEndEventNames = {
		'WebkitTransition': 'webkitTransitionEnd',
		'MozTransition': 'transitionend',
		'OTransition': 'oTransitionEnd',
		'msTransition': 'MSTransitionEnd',
		'transition': 'transitionend'
	},
	transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
	support = { transitions : Modernizr.csstransitions };

	function closeOpenOverlays(){
		if(classie.has(overlay1, 'abre')) closeOverlay(overlay1);
		if(classie.has(overlay2, 'abre')) closeOverlay(overlay2);
		if(classie.has(overlay3, 'abre')) closeOverlay(overlay3);
		if(classie.has(overlay4, 'abre')) closeOverlay(overlay4);
						
	}

	function closeOverlay(capa){
		classie.remove( capa, 'abre' );
		classie.add( capa, 'cierra' );
		var onEndTransitionFn = function( ev ) {
			this.removeEventListener( transEndEventName, onEndTransitionFn );
			classie.remove( capa, 'cierra' );
		};

		if( support.transitions ) {
			capa.addEventListener( transEndEventName, onEndTransitionFn );
		}
		else {
			onEndTransitionFn();
		}
	}

	function toggleOverlay(capa) {
		closeOpenOverlays();

		if( classie.has( capa, 'abre' ) ){
			closeOverlay(capa);
		}
		else if( !classie.has( capa, 'cierra' ) ) {
			classie.add( capa, 'abre' );
		}
	}

	triggerBttn1.addEventListener( "click", function(){ toggleOverlay(overlay1);} );
	triggerBttn2.addEventListener( 'click', function(){ toggleOverlay(overlay2);} );
	triggerBttn3.addEventListener( 'click', function(){ toggleOverlay(overlay3);} );
	triggerBttn4.addEventListener( 'click', function(){ toggleOverlay(overlay4);} );
	triggerLnk5.addEventListener( 'click', function(){ toggleOverlay(overlay3);} );

	closeBttn1.addEventListener( 'click', function(){toggleOverlay(overlay1);} );
	closeBttn2.addEventListener( 'click', function(){toggleOverlay(overlay2);} );
	closeBttn3.addEventListener( 'click', function(){toggleOverlay(overlay3);} );
	closeBttn4.addEventListener( 'click', function(){toggleOverlay(overlay4);} );

})();
