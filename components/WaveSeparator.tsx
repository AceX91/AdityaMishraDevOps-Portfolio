import React from 'react';

interface WaveSeparatorProps {
  flip?: boolean;
  small?: boolean;
  className?: string;
}

const WaveSeparator: React.FC<WaveSeparatorProps> = ({ flip = false, small = false, className = '' }) => {
  const height = small ? 48 : 96;
  const transform = flip ? 'scaleY(-1)' : undefined;
  const overlap = Math.max(12, Math.round(height * 0.6));

  const containerStyle: React.CSSProperties = {
    height,
    marginTop: flip ? `-${overlap}px` : undefined,
    marginBottom: !flip ? `-${overlap}px` : undefined,
  };

  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`} style={containerStyle} aria-hidden>
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        style={{ display: 'block', transform }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Layered grey waves for section separation (subtle opacities) */}
        <path d="M0,128L48,160C96,192,192,256,288,282.7C384,309,480,299,576,266.7C672,235,768,181,864,170.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#cbd5e1" opacity="0.08" />
        <path d="M0,192L48,181.3C96,171,192,149,288,138.7C384,128,480,128,576,154.7C672,181,768,235,864,250.7C960,267,1056,245,1152,218.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#94a3b8" opacity="0.06" />
        <path d="M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,160C672,128,768,96,864,101.3C960,107,1056,149,1152,186.7C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#64748b" opacity="0.04" />
      </svg>
    </div>
  );
};

export default WaveSeparator;
