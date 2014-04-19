hoge.addEventListener ("keydown", function(k) {handle_key(k,this)});
huga.addEventListener ("keydown", function (k) {handle_key (k, this)});

function handle_key (key, control) {
    var step = 0;
    key.shiftKey ? step = 10 : step = 1;

    if (key.keyName == 'Up' === true) {
        control.text = Number(control.text)+step/2;
    } else if (key.keyName == 'Down' === true) {
        control.text = Number(control.text)-step/2;
    }
} // handle_key
