document.addEventListener('DOMContentLoaded', () => {
    const thumbnailData = [
        'P4_37_outdoor_run_circle',
        'P9_80_outdoor_walk_big_circle',
        'P9_79_outdoor_walk_rectangle', 
        'P8_64_outdoor_skateboard', 
    ];

    const thumbnailsHtml = thumbnailData.map(name => `
        <img src="static/thumbs/${name}.jpg" 
             data-video="static/videos/vs_gt/${name}.mp4"
             class="thumbnail vsgt-thumbnail" 
             alt="${name}" 
             style="cursor: pointer; width: 100px;">
    `).join('');

    const content = `
        <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-full panel-style">
                    <div class="video-container">
                        <p style="max-width: 100%; margin: 0 auto; margin-bottom: 0px; text-align: center;">
                            <span style="color: #5DBBD5; font-size: 1.0em; ">●</span> <span style="color: #5DBBD5; font-size: 1.1em; font-weight: bold;">Prediction</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span style="color: #6F6F76; font-size: 1.0em;">●</span> <span style="color: #6F6F76; font-size: 1.1em; font-weight: bold;">Ground-truth</span>
                        </p>
                        <br>
                        <div class="video-player-container" style="display: flex; justify-content: center; width: 100%; margin-bottom: 20px;">
                            <div id="main-vsgt-container" style="max-width: 1600px; width: 100%; position: relative;">
                                <video id="main-vsgt" controls autoplay muted loop playsinline disablePictureInPicture style="width: 100%; height: auto;">
                                    <source id="main-vsgt-source" type="video/mp4">
                                </video>
                            </div>
                        </div>
                    </div>
                    <div class="thumbnail-container">
                        ${thumbnailsHtml}
                    </div>
                </div>
            </div>
        </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
        .thumbnail {
            border-radius: 6px;
            border: 2px solid #fff;
            box-shadow: 0 0 4px #888;
            width: 100px;
            height: 70px;
            object-fit: cover;
            transition: transform 0.3s ease;
        }
        .thumbnail:hover { transform: scale(1.1); }
        .video-label {
            font-size: 1.3rem;
            font-weight: bold;
            margin: 0 20px;
        }
        #main-vsgt {
            transition: opacity 0.3s ease;
            width: 100% !important;
            height: auto !important;
            aspect-ratio: 16/9;
            background-color: #fff;
        }
        #main-vsgt-container {
            position: relative;
            width: 100%;
            aspect-ratio: 16/9;
            background-color: #fff;
        }
    `;
    document.head.appendChild(style);

    const section = document.getElementById('vs-gt');
    section.innerHTML = content;
    section.style.display = 'block';

    const mainVideoElement = document.getElementById('main-vsgt');
    const mainVideoSource = document.getElementById('main-vsgt-source');
    const thumbnails = document.querySelectorAll('.vsgt-thumbnail');

    mainVideoElement.loop = true;

    thumbnails[0].style.border = '3px solid #92A8D1';
    mainVideoSource.src = thumbnails[0].dataset.video;
    mainVideoElement.load();


    const customSpeedMap = {
        'P8_64_outdoor_skateboard': 3, 
        // 'P9_79_outdoor_walk_rectangle': 4, 
        'P4_37_outdoor_run_circle': 4, 
        // 'P9_80_outdoor_walk_big_circle': 4, 
    };
    
    const targetDuration = 10;
    
    
    function setVsGtVideoPlaybackRate(videoElement, videoName, callback) {
        if (customSpeedMap[videoName]) {
            const customSpeed = customSpeedMap[videoName];
            videoElement.playbackRate = customSpeed;
            
            console.log(`${videoName} Using custom playback speed: ${customSpeed}x`);
            
            if (callback) callback();
            return;
        }
        
        const checkMetadata = () => {
            if (videoElement.readyState >= 1) {
                const duration = videoElement.duration;
                
                if (duration && duration > 0) {
                    const adaptiveSpeed = Math.max(0.5, Math.min(10, duration / targetDuration));
                    
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

    const firstVideoName = thumbnailData[0];
    setVsGtVideoPlaybackRate(mainVideoElement, firstVideoName);

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            
            thumbnails.forEach(t => t.style.border = '2px solid #fff');
            thumbnail.style.border = '3px solid #92A8D1';
            
            mainVideoElement.style.opacity = '0';
            
            mainVideoSource.src = thumbnail.dataset.video;
            mainVideoElement.load();
            
            new Promise(resolve => mainVideoElement.addEventListener('loadedmetadata', resolve, { once: true }))
            .then(() => {
                mainVideoElement.style.opacity = '1';
                mainVideoElement.loop = true;
                
                const videoName = thumbnail.alt;
                setVsGtVideoPlaybackRate(mainVideoElement, videoName, () => {
                    mainVideoElement.play().catch(() => {});
                });
            });
        });
    });

});