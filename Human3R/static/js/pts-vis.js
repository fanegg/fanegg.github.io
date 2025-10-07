document.addEventListener('DOMContentLoaded', () => {
    const thumbnailData = [
        'downtown_walking_00', 'SinginintheRain1', 'P5_40_indoor_walk_big_circle', 
        'downtown_walkBridge_01', 'go5', 'P7_58_outdoor_parcours', 'GoodMornin1', 
        'P3_32_outdoor_soccer_warmup_a', 'P5_44_indoor_rom', 
        'P4_37_outdoor_run_circle', 
        'RICH_LectureHall_009_021_reparingprojector1_cam_03', 
        'P3_33_outdoor_soccer_warmup_b', 'west', 
        'downtown_runForBus_00', 'outdoors_freestyle_01',
        'downtown_runForBus_01', 'downtown_enterShop_00', 
        // 'SinginintheRain2', 'P5_42_indoor_dancing', 
    ];

    const thumbnailsHtml = thumbnailData.map(name => `
        <img src="static/thumbs/${name}.jpg" 
             data-video="static/videos/vis_pts/${name}.mp4"
             class="thumbnail pts-thumbnail" 
             alt="${name}" 
             style="cursor: pointer; width: 100px;">
    `).join('');

    const content = `
        <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-full panel-style">
                    <div class="video-container">
                        <div class="video-player-container" style="display: flex; justify-content: center; width: 100%; margin-bottom: 20px;">
                            <div id="main-video-container" style="max-width: 1600px; width: 100%; position: relative;">
                                <video id="main-video" controls autoplay muted loop playsinline disablePictureInPicture style="width: 100%; height: auto;">
                                    <source id="main-video-source" type="video/mp4">
                                </video>
                            </div>
                        </div>
                    </div>
                    <div class="thumbnail-container">
                        ${thumbnailsHtml}
                    </div>
                    <button onclick="window.location.href='./interactive.html';" target="_blank"
                    style="font-size: 20px; font-family: 'Arial', sans-serif; background-color: #CEB2B9; color: white; margin: 20px auto; display: block; padding: 15px 15px; width: 98%; border: none; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); text-align: center; transition: all 0.3s ease; cursor: pointer;">
                    <span class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
                            style="fill: #ffffff">
                            <path
                                d="M256 0c-25.3 0-47.2 14.7-57.6 36c-7-2.6-14.5-4-22.4-4c-35.3 0-64 28.7-64 64V261.5l-2.7-2.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5L106.5 437c48 48 113.1 75 181 75H296h8c1.5 0 3-.1 4.5-.4c91.7-6.2 165-79.4 171.1-171.1c.3-1.5 .4-3 .4-4.5V160c0-35.3-28.7-64-64-64c-5.5 0-10.9 .7-16 2V96c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4C303.2 14.7 281.3 0 256 0zM240 96.1c0 0 0-.1 0-.1V64c0-8.8 7.2-16 16-16s16 7.2 16 16V95.9c0 0 0 .1 0 .1V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96c0 0 0 0 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16v55.9c0 0 0 .1 0 .1v80c0 13.3 10.7 24 24 24s24-10.7 24-24V160.1c0 0 0-.1 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16V332.9c-.1 .6-.1 1.3-.2 1.9c-3.4 69.7-59.3 125.6-129 129c-.6 0-1.3 .1-1.9 .2H296h-8.5c-55.2 0-108.1-21.9-147.1-60.9L52.7 315.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L119 336.4c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V96c0-8.8 7.2-16 16-16c8.8 0 16 7.1 16 15.9V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96.1z">
                            </path>
                        </svg>
                    </span>
                        Go to Play Interactive Demo
                    </button>
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
        #main-video {
            transition: opacity 0.3s ease;
            width: 100% !important;
            height: auto !important;
            aspect-ratio: 16/9;
            background-color: #fff;
        }
        #main-video-container {
            position: relative;
            width: 100%;
            aspect-ratio: 16/9;
            background-color: #fff;
        }
    `;
    document.head.appendChild(style);

    const section = document.getElementById('pts-vis');
    section.innerHTML = content;
    section.style.display = 'block';

    const mainVideoElement = document.getElementById('main-video');
    const mainVideoSource = document.getElementById('main-video-source');
    const thumbnails = document.querySelectorAll('.pts-thumbnail');

    mainVideoElement.loop = true;

    thumbnails[0].style.border = '3px solid #92A8D1';
    mainVideoSource.src = thumbnails[0].dataset.video;
    mainVideoElement.load();


    const customSpeedMap = {
        'downtown_walking_00': 2.5,
        'SinginintheRain1': 1.25,
        'go5': 1.0,
        'GoodMornin1':1.25,
        'P4_37_outdoor_run_circle': 3.0,
        '100mHurdles2': 1.25,
        'P3_32_outdoor_soccer_warmup_a': 1.5,
        'west': 1.5,
        'P5_42_indoor_dancing': 2.0, 
        'downtown_runForBus_00': 2.5,
        'SinginintheRain2': 1.25,
        'P5_44_indoor_rom': 2.0, 
        'downtown_runForBus_01': 1.25,
        'outdoors_freestyle_01': 1.25,
    };
    
    const targetDuration = 10;
    
    
    function setVideoPlaybackRate(videoElement, videoName, callback) {
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
    setVideoPlaybackRate(mainVideoElement, firstVideoName);

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
                setVideoPlaybackRate(mainVideoElement, videoName, () => {
                    mainVideoElement.play().catch(() => {});
                });
            });
        });
    });

});