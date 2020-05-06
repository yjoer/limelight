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
      player.play().then(null, (err) => {});
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
    bindKeyboardEvent(player);
  }
};

enhanceVideoPlayer();