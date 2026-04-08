/**
 * Decorative hanging vines around the viewport edges and inside the content area.
 * Each vine is fixed-positioned with a data-speed attribute consumed by ScrollScene
 * for individual parallax velocities.
 *
 * Layers (back to front):
 *   - vine-outer  : background, slowest, slightly faded
 *   - vine-wide   : main edges, medium speed
 *   - vine-thin   : inside the viewport, faster
 *   - vine-pendant: hanging from top, fastest, only in the hero area
 */
export function Vines() {
  return (
    <>
      {/* ===== Pendant vines (top inner) ===== */}
      <div className="vine vine-pendant" style={{ left: "18%", width: 52 }} data-speed="0.32" aria-hidden="true">
        <svg viewBox="0 0 52 500" preserveAspectRatio="xMinYMin slice">
          <path d="M 30 -10 Q 10 80 28 150 T 14 280 T 30 400 T 22 520" stroke="#0a1f13" strokeWidth={3} fill="none" strokeLinecap="round" />
          <g fill="#1e4a2d" stroke="#08190e" strokeWidth={0.7}>
            <ellipse cx={12} cy={70}  rx={14} ry={5.5} transform="rotate(-25 12 70)" />
            <ellipse cx={32} cy={150} rx={16} ry={6.5} transform="rotate(30 32 150)" />
            <ellipse cx={10} cy={230} rx={14} ry={5.5} transform="rotate(-28 10 230)" />
            <ellipse cx={34} cy={310} rx={17} ry={7}   transform="rotate(32 34 310)" />
            <ellipse cx={14} cy={400} rx={15} ry={6}   transform="rotate(-30 14 400)" />
            <ellipse cx={30} cy={480} rx={14} ry={5.5} transform="rotate(28 30 480)" />
          </g>
        </svg>
      </div>

      <div className="vine vine-pendant" style={{ left: "30%", width: 40, opacity: 0.8 }} data-speed="0.26" aria-hidden="true">
        <svg viewBox="0 0 40 500" preserveAspectRatio="xMinYMin slice">
          <path d="M 22 -15 Q 6 70 20 140 T 8 260 T 24 380 T 14 500" stroke="#0a1f13" strokeWidth={2.5} fill="none" strokeLinecap="round" />
          <g fill="#1c4128" stroke="#08190e" strokeWidth={0.6}>
            <ellipse cx={8}  cy={55}  rx={11} ry={4.5} transform="rotate(-28 8 55)" />
            <ellipse cx={24} cy={130} rx={12} ry={5}   transform="rotate(30 24 130)" />
            <ellipse cx={6}  cy={210} rx={11} ry={4.5} transform="rotate(-25 6 210)" />
            <ellipse cx={26} cy={290} rx={13} ry={5}   transform="rotate(32 26 290)" />
            <ellipse cx={10} cy={370} rx={11} ry={4.5} transform="rotate(-30 10 370)" />
            <ellipse cx={22} cy={450} rx={12} ry={5}   transform="rotate(28 22 450)" />
          </g>
        </svg>
      </div>

      <div className="vine vine-pendant" style={{ left: "68%", width: 40, opacity: 0.82 }} data-speed="0.30" aria-hidden="true">
        <svg viewBox="0 0 40 500" preserveAspectRatio="xMinYMin slice">
          <path d="M 20 -15 Q 34 80 18 150 T 30 280 T 14 400 T 26 520" stroke="#0a1f13" strokeWidth={2.5} fill="none" strokeLinecap="round" />
          <g fill="#1c4128" stroke="#08190e" strokeWidth={0.6}>
            <ellipse cx={32} cy={60}  rx={11} ry={4.5} transform="rotate(28 32 60)" />
            <ellipse cx={14} cy={140} rx={12} ry={5}   transform="rotate(-30 14 140)" />
            <ellipse cx={30} cy={220} rx={11} ry={4.5} transform="rotate(25 30 220)" />
            <ellipse cx={12} cy={300} rx={13} ry={5}   transform="rotate(-32 12 300)" />
            <ellipse cx={28} cy={380} rx={11} ry={4.5} transform="rotate(28 28 380)" />
            <ellipse cx={16} cy={460} rx={12} ry={5}   transform="rotate(-30 16 460)" />
          </g>
        </svg>
      </div>

      <div className="vine vine-pendant" style={{ left: "80%", width: 52 }} data-speed="0.34" aria-hidden="true">
        <svg viewBox="0 0 52 500" preserveAspectRatio="xMinYMin slice">
          <path d="M 22 -10 Q 42 80 24 150 T 38 280 T 20 400 T 32 520" stroke="#0a1f13" strokeWidth={3} fill="none" strokeLinecap="round" />
          <g fill="#1e4a2d" stroke="#08190e" strokeWidth={0.7}>
            <ellipse cx={40} cy={70}  rx={14} ry={5.5} transform="rotate(28 40 70)" />
            <ellipse cx={18} cy={150} rx={16} ry={6.5} transform="rotate(-30 18 150)" />
            <ellipse cx={38} cy={230} rx={14} ry={5.5} transform="rotate(25 38 230)" />
            <ellipse cx={16} cy={310} rx={17} ry={7}   transform="rotate(-32 16 310)" />
            <ellipse cx={36} cy={400} rx={15} ry={6}   transform="rotate(30 36 400)" />
            <ellipse cx={18} cy={480} rx={14} ry={5.5} transform="rotate(-28 18 480)" />
          </g>
        </svg>
      </div>

      {/* ===== Edge vines (left/right) ===== */}
      <div className="vine vine-left" data-speed="0.28" aria-hidden="true">
        <svg viewBox="0 0 110 1400" preserveAspectRatio="xMinYMin slice">
          <path
            d="M 18 -30 C 55 70, 10 170, 35 280 C 60 380, 5 490, 30 600 C 55 700, 8 810, 32 920 C 58 1020, 12 1140, 40 1260"
            stroke="#1c4128"
            strokeWidth={5}
            fill="none"
            strokeLinecap="round"
          />
          <g fill="#1e4a2d" stroke="#08190e" strokeWidth={0.7}>
            <ellipse cx={35} cy={60}   rx={22} ry={9}  transform="rotate(25 35 60)" />
            <ellipse cx={18} cy={150}  rx={18} ry={7}  transform="rotate(-30 18 150)" />
            <ellipse cx={42} cy={250}  rx={24} ry={10} transform="rotate(32 42 250)" />
            <ellipse cx={20} cy={360}  rx={20} ry={8}  transform="rotate(-28 20 360)" />
            <ellipse cx={45} cy={460}  rx={23} ry={9}  transform="rotate(28 45 460)" />
            <ellipse cx={22} cy={570}  rx={19} ry={7.5} transform="rotate(-32 22 570)" />
            <ellipse cx={48} cy={680}  rx={22} ry={9}  transform="rotate(25 48 680)" />
            <ellipse cx={20} cy={790}  rx={20} ry={8}  transform="rotate(-30 20 790)" />
            <ellipse cx={46} cy={900}  rx={24} ry={10} transform="rotate(30 46 900)" />
            <ellipse cx={25} cy={1010} rx={19} ry={7.5} transform="rotate(-28 25 1010)" />
          </g>
        </svg>
      </div>

      <div className="vine vine-right vine-mirror" data-speed="0.22" aria-hidden="true">
        <svg viewBox="0 0 110 1400" preserveAspectRatio="xMinYMin slice">
          <path
            d="M 22 -40 C 50 90, 8 200, 36 310 C 62 420, 12 520, 38 630 C 60 730, 15 840, 40 950 C 62 1050, 18 1170, 44 1290"
            stroke="#1c4128"
            strokeWidth={5}
            fill="none"
            strokeLinecap="round"
          />
          <g fill="#1e4a2d" stroke="#08190e" strokeWidth={0.7}>
            <ellipse cx={38} cy={80}   rx={22} ry={9}  transform="rotate(-28 38 80)" />
            <ellipse cx={20} cy={180}  rx={20} ry={8}  transform="rotate(32 20 180)" />
            <ellipse cx={46} cy={290}  rx={23} ry={9.5} transform="rotate(-30 46 290)" />
            <ellipse cx={24} cy={400}  rx={19} ry={7.5} transform="rotate(28 24 400)" />
            <ellipse cx={48} cy={510}  rx={24} ry={10} transform="rotate(-32 48 510)" />
            <ellipse cx={26} cy={620}  rx={20} ry={8}  transform="rotate(30 26 620)" />
            <ellipse cx={50} cy={730}  rx={22} ry={9}  transform="rotate(-28 50 730)" />
            <ellipse cx={28} cy={840}  rx={19} ry={7.5} transform="rotate(32 28 840)" />
            <ellipse cx={52} cy={950}  rx={24} ry={10} transform="rotate(-30 52 950)" />
            <ellipse cx={30} cy={1060} rx={20} ry={8}  transform="rotate(28 30 1060)" />
          </g>
        </svg>
      </div>
    </>
  );
}
