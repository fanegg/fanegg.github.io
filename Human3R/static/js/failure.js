document.addEventListener('DOMContentLoaded', () => {
    const failureVideoName = 'Failure_case';

    const content = `
        <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-full panel-style">
                    <div class="video-container">
                        <div class="video-player-container" style="display: flex; justify-content: center; width: 100%; margin-bottom: 20px;">
                            <div id="main-failure-container" style="max-width: 1600px; width: 100%; position: relative;">
                                <video id="main-failure" controls autoplay muted loop playsinline disablePictureInPicture style="width: 100%; height: auto;">
                                    <source id="main-failure-source" src="static/videos/vis_pts/${failureVideoName}.mp4" type="video/mp4">
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
        #main-failure {
            transition: opacity 0.3s ease;
            width: 100% !important;
            height: auto !important;
            aspect-ratio: 16/9;
            background-color: #fff;
        }
        #main-failure-container {
            position: relative;
            width: 100%;
            aspect-ratio: 16/9;
            background-color: #fff;
        }
    `;
    document.head.appendChild(style);

    const section = document.getElementById('failure');
    section.innerHTML = content;
    section.style.display = 'block';

    const failureVideoElement = document.getElementById('main-failure');
    const failureVideoSource = document.getElementById('main-failure-source');

    failureVideoElement.loop = true;
    failureVideoElement.load();

    const failureCustomSpeedMap = {
        'Failure_case': 1.5,
    };
    
    const failureTargetDuration = 10;
    
    
    function setFailureVideoPlaybackRate(videoElement, videoName, callback) {
        if (failureCustomSpeedMap[videoName]) {
            const customSpeed = failureCustomSpeedMap[videoName];
            videoElement.playbackRate = customSpeed;
            
            console.log(`${videoName} Using custom playback speed: ${customSpeed}x`);
            
            if (callback) callback();
            return;
        }
        
        const checkMetadata = () => {
            if (videoElement.readyState >= 1) {
                const duration = videoElement.duration;
                
                if (duration && duration > 0) {
                    const adaptiveSpeed = Math.max(0.5, Math.min(10, duration / failureTargetDuration));
                    
                    videoElement.playbackRate = adaptiveSpeed;
                    
                    setTimeout(() => {
                        if (Math.abs(videoElement.playbackRate - adaptiveSpeed) > 0.01) {
                            videoElement.playbackRate = adaptiveSpeed;
                        }
                    }, 50);
                    
                    console.log(`${videoName} Adaptive playback speed - video duration: ${duration.toFixed(2)}s, playback speed: ${adaptiveSpeed.toFixed(2)}x, estimated playback duration: ${(duration / adaptiveSpeed).toFixed(2)}s`);
                } else {
                    videoElement.playbackRate = 1.0;
                }
                
                if (callback) callback();
            } else {
                videoElement.addEventListener('loadedmetadata', () => {
                    checkMetadata();
                }, { once: true });
            }
        };
        
        checkMetadata();
    }

    setFailureVideoPlaybackRate(failureVideoElement, failureVideoName);

});