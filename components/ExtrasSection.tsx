import Image from "next/image";

const ExtrasSection = () => {
  return (
    <div className="mt-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Calm Down</h2>
      <Image
        src="/pbd.png"
        alt="Pale Blue Dot"
        width={500}
        height={500}
        className="mx-auto mb-4 border-2 border-cyan-400 rounded-lg"
      />
      <div className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Consider again that dot. That&apos;s here. That&apos;s home. That&apos;s us. Every person who ever lived, loved, and struggled did so on this tiny speck. It holds the entirety of human experience — our joys and sorrows, our conflicts and triumphs. This pale blue dot, suspended in a sunbeam, is a poignant reminder of our shared humanity and the fragility of our existence in the vastness of space. It calls upon us to transcend divisions, cherish our common heritage, and strive for a future where humanity works together to protect our fragile home in the cosmos.
      </div>
      <div className="italic text-right pt-2">- Carl Sagan</div>
    </div>
  );
};

export default ExtrasSection;
