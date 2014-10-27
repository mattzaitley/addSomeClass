// Store a reference to the original jQuery .addClass()
var originalAddClass = jQuery.fn.addClass;
//set images array to hold base 64 pngs

//make it classy
$.fn.addSomeClass = function(originalAddClass, options){
	var images = [];
	//insert base64 tophat into images array as images [0]
	images.push('url(data:image/png;base64,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)');
	//add bowler hat as images[1]
	images.push('url(data:image/png;base64,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)');
	//add monocle as images[2]
	images.push('url(data:image/png;base64,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)');
	//add bowtie as images[3]
	images.push('url(data:image/png;base64,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)')
	//add mustache as images[4]
	images.push('url(data:image/png;base64,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)')
	
	//check to see if .addClass() passed in an argument
	if (typeof originalAddClass === "object"){
		options = originalAddClass
	}
	//define default settings
	var settings = $.extend({
		hat: 'tophat',
		xPos: 50,
		fanciest: false,
		monocle: false,
		bowtie: false,
		mustache: false,
		hatSize: 100,
		imageReplace: true,
		image: 'http://i.giphy.com/pNpONEEg3pLIQ.gif'
	}, options);
	//create a base hat
	var hat = $('<i class="accessories"></i>').css({
		backgroundSize:'contain',
		backgroundPosition: 'bottom',
		backgroundRepeat: 'no-repeat',
		pointerEvents:'none',
		position: 'absolute',
		top: 0,
		zIndex: 99999999999999,
		left: settings.xPos+'%'
	});

	//determine what kind of hat
	if (settings.hat === 'tophat'){
		hat.css({
			'background-image': images[0],
			transform: 'translateY(-90%) translateX(-50%)',
			width: settings.hatSize*1.33,
			height: settings.hatSize
		});
	} else if (settings.hat === 'bowler'){
		//define unique bowler parameters
		hat.css({
			'background-image': images[1],
			transform: 'translateY(-90%) translateX(-50%)',
			width: settings.hatSize*1.3,
			height: settings.hatSize*.65
		});
	};
	//make a monocle
	var monocle = $('<i class="accessories"></i>');
	if (settings.monocle === true || settings.fanciest === true){
		monocle.css({
			backgroundSize:'contain',
			backgroundPosition: 'bottom',
			backgroundRepeat: 'no-repeat',
			pointerEvents:'none',
			position: 'absolute',
			top: '20%',
			transform: 'translateX(-'+settings.hatSize*.65+'px)',
			left: settings.xPos+'%',
			width: settings.hatSize/2,
			height: settings.hatSize*0.91,
			zIndex: 1000000,
			'background-image': images[2]
		});
	};
	//make a mustache
	var mustache = $('<i class="accessories"></i>');
	if (settings.mustache === true || settings.fanciest === true){
		mustache.css({
			backgroundSize:'contain',
			backgroundPosition: 'bottom',
			backgroundRepeat: 'no-repeat',
			pointerEvents:'none',
			position: 'absolute',
			top: '60%',
			transform: 'translateX(-50%) translateY(-50%)',
			left: settings.xPos+'%',
			width: settings.hatSize,
			height: settings.hatSize/2,
			zIndex: 1000001,
			'background-image': images[4]
		});
	};
	//make a bowtie
	var bowtie = $('<i class="accessories"></i>');
	if (settings.bowtie === true || settings.fanciest === true){
		bowtie.css({
			backgroundSize:'contain',
			backgroundPosition: 'bottom',
			backgroundRepeat: 'no-repeat',
			pointerEvents:'none',
			position: 'absolute',
			bottom: 0,
			transform: 'translateX(-50%) translateY(50%)',
			left: settings.xPos+'%',
			width: settings.hatSize,
			height: settings.hatSize/2,
			zIndex: 1000002,
			'background-image': images[3]
		});
	};
	//check each element to see if it's already been made classy
	this.each(function(i, element){
		if($(element).is('[data-has-class]') !== true) {
			$(element).css({position: 'relative'}).attr('data-has-class', true).append(hat.clone(true), monocle.clone(true), bowtie.clone(true), mustache.clone(true));
		}
	});

	//option to turn off image source changing
	if (this.is('img') && settings.imageReplace == true){
		this.attr('src', settings.image);
	};

	//preload & cache gif the first time this is called
	$.preloadImages = function() {
	    $("<img />").attr("src", settings.image);
	  }
	}
	$.preloadImages();

	return this
}

//add back the original functionality of .addClass()
jQuery.fn.addClass = function(){
    jQuery.fn.addSomeClass.apply(this, arguments);
    originalAddClass.apply(this, arguments);
}