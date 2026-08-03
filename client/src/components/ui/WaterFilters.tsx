export function WaterFilters() {
  return (
    <svg style={{ display: 'none' }}>
      <filter id="water-turbulence">
        <feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="1" result="noise" seed="1" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
      </filter>
      
      <filter id="water-turbulence-sm">
        <feTurbulence type="fractalNoise" baseFrequency="0.02 0.04" numOctaves="1" result="noise" seed="2" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
      </filter>
    </svg>
  );
}