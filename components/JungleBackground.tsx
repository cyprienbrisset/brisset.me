/**
 * Multi-plane parallax jungle background.
 * Renders 3 fixed layers (far / mid / near) + a darkening overlay.
 * Parallax transforms are applied client-side by ScrollScene (single rAF loop).
 */
export function JungleBackground() {
  return (
    <>
      <div id="jungle-far" className="jungle-layer jungle-far" aria-hidden="true">
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMax slice"
          style={{ width: "100%", height: "100%" }}
        >
          <defs>
            <linearGradient id="farSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"  stopColor="#2f6645" />
              <stop offset="45%" stopColor="#1c4128" />
              <stop offset="100%" stopColor="#0a1f13" />
            </linearGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#farSky)" />
          <polygon
            points="0,540 180,430 360,510 530,410 690,490 860,400 1030,480 1200,390 1360,470 1440,420 1440,900 0,900"
            fill="#2a5738"
            opacity="0.55"
          />
          <polygon
            points="0,640 160,550 320,610 480,530 640,600 810,520 970,590 1140,510 1290,580 1440,540 1440,900 0,900"
            fill="#1e4229"
            opacity="0.75"
          />
        </svg>
      </div>

      <div id="jungle-mid" className="jungle-layer jungle-mid" aria-hidden="true" />

      <div id="jungle-near" className="jungle-layer jungle-near" aria-hidden="true">
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMax slice"
          style={{ width: "100%", height: "100%" }}
        >
          <g fill="#010603">
            <polygon points="0,900 0,200 45,190 80,210 110,240 90,330 105,440 85,560 100,680 75,820 55,900" />
            <polygon points="1440,900 1440,180 1395,170 1360,195 1335,240 1355,340 1340,460 1360,580 1345,700 1370,830 1390,900" />
          </g>
          <g fill="#020806">
            <polygon points="130,900 240,480 350,900" />
            <polygon points="390,900 500,510 610,900" />
            <polygon points="650,900 780,470 910,900" />
            <polygon points="950,900 1070,490 1190,900" />
            <polygon points="1210,900 1320,500 1410,900" />
          </g>
          <g fill="#000402">
            <polygon points="0,900 0,820 180,790 360,820 540,795 720,825 900,790 1080,820 1260,795 1440,820 1440,900" />
          </g>
        </svg>
      </div>

      <div className="jungle-overlay" aria-hidden="true" />
    </>
  );
}
