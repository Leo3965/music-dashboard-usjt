import Tale from "./Tale";

export default function Music() {
    return (
      <Tale title="" className="tales-no-back">
        <div>
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameBorder="0"
            height="450"
            style={{
              width: "100%",
              overflow: "hidden",
              background: "transparent",
              borderRadius: "15px",
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            src={`https://embed.music.apple.com/us/playlist/todays-hits/pl.f4d106fed2bd41149aaacabb233eb5eb?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto`}
          ></iframe>
        </div>
      </Tale>
    );
}