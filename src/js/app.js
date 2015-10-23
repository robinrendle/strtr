// =======================================================================
// APP
// =======================================================================

(function(){

    var App = {
        init: function(){
            console.log("application ready");

            $("form").validate(function(){});

            $("input").focus(function(){
                $("form").addClass("visible");
            });
        }
    };

    if(window.addEventListener && document.querySelector) {
        var body = document.documentElement;
        body.classList.remove("no-js");
        body.classList.add("js");
        App.init();
    }
})();