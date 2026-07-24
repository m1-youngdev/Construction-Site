function ServiceCard({ service }) {
  return (
    <div className="w-10/12 rounded-lg">
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 px-5 rounded-lg hover:scale-105 duration-200 ease-in-out"
        style={{
          backgroundImage: `url(${service.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

        <div className="relative">
          <h2 className="text-[#CBD5E1] font-space text-2xl font-bold">
            {service.title}
          </h2>

          <p className="text-[#CBD5E1] font-inter text-[17px]">
            {service.description}
          </p>

          <a
            href={service.link}
            className="text-[#CBD5E1] font-inter text-sm"
          >
            Learn More...
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;