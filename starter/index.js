function starter(input) {
    var that = {};
    var my = {};
    my.start = input.start;
    my._loading = [];
    my._maxtime = 5000;
    my._timebetween = 100;
    my._totaltime = 0;

    that.init = function() {
        my.include = [
            '/interpreter/scanner.js',
            '/interpreter/programmize.js',
            '/interpreter/variablize.js',
            '/interpreter/stringify.js',
        ];
        my.include = my.include.concat(input.include);

        for (var l of my.include) {
            that.load(l);
        }
        that.loaded();
    };

    that.load = function(lib) {
        my._loading.push(lib);
        var s = document.createElement('script');
        s.setAttribute('src', lib);
        document.getElementsByTagName('body')[0].appendChild(s);
        var t = this;
        s.onload = function() {
            my._loading.splice(my._loading.indexOf(lib), 1);
        }
    }

    that.loaded = function() {
        check();
        function check() {
            if (my._totaltime > my._maxtime) {
                console.log("ERROR", "one or more library failed to load.", my._loading.join(", "));
                my.start();
                return;
            }
            if (my._loading.length > 0) {
                my._totaltime += my._timebetween;
                setTimeout(check, my._timebetween);
            }
            else {
                my.start();
                return;
            }
        }
    }

    return that;
};
