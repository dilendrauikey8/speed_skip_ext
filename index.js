function changeSpeed(videoList, delta){
    for(const video of videoList) video.playbackRate +=  delta;
}    

    document.addEventListener('keydown', function(event) {
        var vlist = document.querySelectorAll('video');
        if (event.code == 'KeyX') {
            changeSpeed(vlist,0.25);
        } else if (event.code == 'KeyZ') {
            changeSpeed(vlist,-0.25);
        } else if (event.code == 'KeyX' && (event.shiftKey || event.metaKey)) {
            changeSpeed(vlist,0.5);
        } else if (event.code == 'KeyZ' && (event.shiftKey || event.metaKey)) {
            changeSpeed(vlist,-0.5);
        } else if (event.code == 'KeyS') {
            for(const vobj of vlist)  vobj.currentTime = (vobj.duration);

	        for (const button of document.getElementsByClassName("ytp-ad-skip-button")) {
			    button.click(); // "Skip Ad" or "Skip Ads" buttons
			}
           
        }
    });