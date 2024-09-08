import tructor from "../../assets/icons/tructor.png";
import cultivator from "../../assets/icons/cultivator.png";
import hand from "../../assets/icons/hand.png";

const Features = () => {
  return (
    <section className="max-w-[1200px] w-full mx-auto px-4 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features?.map((feature) => (
          <div
            key={feature?.id}
            className="bg-white w-full py-8 px-3 rounded-2xl"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="bg-primary w-[60px] h-[60px] rounded-full flex items-center justify-center">
                <img src={feature?.icon} alt="icon" />
              </div>
              <h4 className="text-title text-2xl font-medium">
                {feature?.title}
              </h4>
            </div>
            <p className="text-body leading-6">{feature?.description}</p>
          </div>
        ))}
      </div>
      <div className="relative h-48 w-48">
  <div className="bg-primary w-16 h-full absolute top-0 left-0 rounded-br-lg"></div>
  
  <div className="bg-secondary w-full h-16 absolute bottom-0 left-0 rounded-tr-lg"></div>
</div>
    </section>
  );
};

export default Features;

const features = [
  {
    id: 1,
    title: "Professional Farmers",
    description:
      "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    icon: tructor,
  },
  {
    id: 2,
    title: "Agricultural products",
    description:
      "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    icon: cultivator,
  },
  {
    id: 3,
    title: "Fresh Vegetables",
    description:
      "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    icon: hand,
  },
];
