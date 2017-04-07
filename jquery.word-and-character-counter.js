(function($) {
    $.fn.extend({
        counter: function(options) {

            var asdfasf = function() {};


            var defaults = {
                count: "down",
                goal: 140

            };


            var $countObj;
            var countIndex = 0;
            var noLimit = false;

            var methods = {
                init: function($obj) {
                    console.log("init");

                    $countObj = $('<span id="count_span" />');

                    if (options.count === defaults.count) {
                        $countObj.text(options.goal);

                    } else {
                        $countObj.text(0);
                    }

                    var counterDiv = $('<div id="count_div" />').append($countObj).append(" charaters left");
                    counterDiv.insertAfter($obj);


                    methods.bind($obj);
                },

                bind: function($obj) {
                    console.log("bind");
                    $obj.on('keyup keydown', methods.updateCounter);
                    $obj.on('keyup keydown', methods.doStopTyping);

                },

                updateCounter: function(e) {
                    // console.log("updateCounter");

                    console.log(e.which);

                    var target = e.target;

                    var content = target.value;
                    var len = content.length;

                    if (options.count === defaults.count) {
                        //down

                        countIndex = options.goal;

                        var v = countIndex - len;
                        if (v <= 0) {
                            v = 0;
                            // e.preventDefault();
                            if (e.which === 8) {

                            } else {
                                e.preventDefault();

                            }

                        }

                        $countObj.text(v);

                    } else {
                        //up
                        if (len >= options.goal) {
                            len = options.goal;
                            // e.preventDefault();

                            if (e.which === 8) {

                            } else {
                                e.preventDefault();

                            }

                        }

                        console.log(len);

                        $countObj.text(len);
                    }

                    // var value = $obj.val();
                    // console.log(value);

                },
                
                doStopTyping: function(e) {

                }
            };
            return this.each(function() {
                console.log("each");
                methods.init($(this));
            });
        }
    });

})(jQuery);
