window.console.log = function() {
    console.info('%c Hello!', 'background: #fff; color: #ff0000; font-size: 80px');
    console.info('%c What are you trying to do to my precious code >:(?', 'background: #fff; color: #000; font-size: 30px');
    window.console.log = function() {
        return false;
    }
}

console.log('test');
