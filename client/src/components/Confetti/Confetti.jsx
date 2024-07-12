import ConfettiExplosion from "react-confetti-explosion";

export default function DisplayConfetti() {
  return <ConfettiExplosion force={0.8} duration={3000} particleCount={250} />;
}
