/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	'use strict';

	(function($) {
		//제이쿼리가 함수일 때
		if(typeof $ === 'function') {
			var _$isArray = $.isArray;

			/**
			 * @name download
			 * @since 2017-12-06
			 * @param {array} attributes
			 * @return {jQuery}
			 */
			$.fn.download = function(attributes) {
				var result = this;
				
				//배열일 때
				if(_$isArray(attributes)) {
					var attributesLength = attributes.length;

					this.each(function(index, element) {
						var $element = $(element);
						
						for(var i = 0; i < attributesLength; i++) {
							var attribute = $element.attr(attributes[i]);
							
							//속성이 있을 때
							if(attribute) {
								open(attribute, '_blank');
							}
						}
					});
				}

				return result;
			};
		}else{
			throw '제이쿼리가 없습니다.';
		}
	})(window.jQuery);
}catch(e) {
	console.error(e);
}