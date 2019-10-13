function toggleDropDown() {
    var x = document.getElementById(
        "navBarToggle");
    
    if (x.className === 'topNav') {
        x.className += ' responsive';
    }
    else {
        x.className = 'topNav';
    }

}