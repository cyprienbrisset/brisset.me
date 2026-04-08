/**
 * Mini static scroll-snake sidebar.
 * Body and head are static SVG; only its vertical position is animated by ScrollScene
 * based on scroll progress through the page.
 */
export function ScrollSnake() {
  return (
    <div className="scroll-snake" aria-hidden="true">
      <div className="scroll-snake__track" />
      <div className="scroll-snake__body" id="scroll-snake-body">
        <svg
          viewBox="0 0 20 56"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 10 4 C 3 12, 17 20, 10 28 C 3 36, 17 44, 10 50" />
          <circle cx={10}   cy={50}   r={2.8} fill="currentColor" stroke="none" />
          <circle cx={10.9} cy={49.4} r={0.55} fill="#0C110E" stroke="none" />
          <g stroke="#ef4444" strokeWidth={0.9} strokeLinecap="round">
            <path d="M 10 53 L 10 55.4" />
            <path d="M 10 55.4 L 8.8 57" />
            <path d="M 10 55.4 L 11.2 57" />
          </g>
        </svg>
      </div>
    </div>
  );
}
