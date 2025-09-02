
import Lottie from "lottie-react";
import manWorking from "../assets/laptop.json";
export default function AnimatedCharacter() {
  return (
    <div className="flex justify-center items-center h-full bg-gray-900">
      <Lottie
        animationData={manWorking}
        loop
        autoplay
        style={{ width: 300, height: 300}}
      />
    </div>
  );
}