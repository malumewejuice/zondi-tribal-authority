type NodeSpec = {
  id: string;
  lines: string[];
  cx: number;
  cy: number;
};

const R = 58;

/** Partial circular arc (bracket) behind a node's text. */
function arcPath(cx: number, cy: number, startDeg: number, endDeg: number) {
  const p = (deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return `${(cx + R * Math.cos(rad)).toFixed(2)} ${(cy + R * Math.sin(rad)).toFixed(2)}`;
  };
  const large = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
  const sweep = endDeg > startDeg ? 1 : 0;
  return `M ${p(startDeg)} A ${R} ${R} 0 ${large} ${sweep} ${p(endDeg)}`;
}

function ChartNode({ node }: { node: NodeSpec }) {
  const { cx, cy, lines } = node;
  const startY = cy - ((lines.length - 1) * 15) / 2;
  return (
    <g
      className="[transform-box:fill-box] origin-center transition-transform duration-300 hover:scale-[1.06] focus-visible:scale-[1.06] outline-none"
      tabIndex={0}
      role="listitem"
      aria-label={lines.join(" ")}
    >
      {/* invisible hit area */}
      <circle cx={cx} cy={cy} r={R} fill="transparent" />
      <path
        d={arcPath(cx, cy, 105, 255)}
        fill="none"
        stroke="var(--teal)"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      <path
        d={arcPath(cx, cy, -75, 75)}
        fill="none"
        stroke="var(--teal)"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      <text
        x={cx}
        y={startY}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="var(--teal)"
        style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15 }}
      >
        {lines.map((l, i) => (
          <tspan key={l} x={cx} dy={i === 0 ? 0 : 18}>
            {l}
          </tspan>
        ))}
      </text>
    </g>
  );
}

const nodes: NodeSpec[] = [
  { id: "chief", lines: ["Chief", "Zondi"], cx: 460, cy: 70 },
  { id: "senior", lines: ["Senior", "Headman"], cx: 200, cy: 230 },
  { id: "advisory", lines: ["Advisory", "Board"], cx: 150, cy: 430 },
  { id: "headmen", lines: ["Headmen"], cx: 460, cy: 430 },
  { id: "sub", lines: ["Other", "Subcommittees"], cx: 780, cy: 430 },
];

export function HierarchyChart() {
  const stroke = { stroke: "var(--teal)", strokeWidth: 2.5, strokeLinecap: "round" as const };
  return (
    <figure className="mt-6">
      <svg
        viewBox="0 0 920 520"
        className="w-full h-auto"
        role="list"
        aria-label="Leadership hierarchy: Chief Zondi leads the structure. The Senior Headman reports directly to Chief Zondi. Below the Senior Headman, three bodies operate in parallel: the Advisory Board, the Headmen, and other subcommittees."
      >
        {/* trunk from Chief down to the bottom branch bar */}
        <line x1={460} y1={128} x2={460} y2={372} {...stroke} />
        {/* horizontal branch to Senior Headman */}
        <line x1={460} y1={230} x2={258} y2={230} {...stroke} />
        {/* bottom distribution bar */}
        <line x1={150} y1={340} x2={780} y2={340} {...stroke} />
        <line x1={150} y1={340} x2={150} y2={372} {...stroke} />
        <line x1={780} y1={340} x2={780} y2={372} {...stroke} />

        {nodes.map((n) => (
          <ChartNode key={n.id} node={n} />
        ))}
      </svg>
      <figcaption className="mt-4 text-xs text-muted-foreground">
        Leadership structure of the Zondi Tribal Authority.
      </figcaption>
    </figure>
  );
}
