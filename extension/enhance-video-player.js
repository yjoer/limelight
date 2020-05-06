const showPlaybackRateControl = (player) => {
  let menuButton = player.controlBar.playbackRateMenuButton;
  let opts = menuButton.options_.playerOptions;

  opts.playbackRates = [0.5, 1, 1.1, 1.25, 1.5, 2];
  menuButton.updateVisibility();
};

const bindKeyboardEvent = (player) => {
  player.on("keydown", (event) => {
    let seekTime;

    if (event.which == 37 || event.which == 39) {
      if (event.which == 37) {
        seekTime = player.currentTime() - 5;
      }

      if (event.which == 39) {
        seekTime = player.currentTime() + 5;
      }

      player.pause();
      player.currentTime(seekTime);

      let played = player.play();
      if (played != null && typeof played.then === "function") {
        played.then(null, (err) => {});
      }
    }
  });
};

const enhanceVideoPlayer = () => {
  const moduleName = "media_videojs/video-lazy";
  const vjs = require.s.contexts._.defined[moduleName];

  if (typeof vjs === "undefined") {
    return;
  }

  for (let [, player] of Object.entries(vjs.players)) {
    showPlaybackRateControl(player);

    bindKeyboardEvent(player);
  }
};

enhanceVideoPlayer();
