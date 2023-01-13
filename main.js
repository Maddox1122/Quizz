(function(window) {
    function setupVideo()
    {
        let v = document.getElementById('videoElement');
        v.addEventListener('mouseover', function() { this.controls = true; }, false);
        v.addEventListener('mouseout', function() { this.controls = false; }, false);
    }

    window.addEventListener('load', setupVideo, false);
})(window);

(function(window) {
    function setupVideo()
    {
        let v = document.getElementById('videoElement2');
        v.addEventListener('mouseover', function() { this.controls = true; }, false);
        v.addEventListener('mouseout', function() { this.controls = false; }, false);
    }

    window.addEventListener('load', setupVideo, false);
})(window);

(function(window) {
    function setupVideo()
    {
        let v = document.getElementById('videoElement3');
        v.addEventListener('mouseover', function() { this.controls = true; }, false);
        v.addEventListener('mouseout', function() { this.controls = false; }, false);
    }

    window.addEventListener('load', setupVideo, false);
})(window);