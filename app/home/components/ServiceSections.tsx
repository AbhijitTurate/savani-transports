export default function ServiceSections() {
  const services = [
    {
      title: "Part Truck Load (PTL / LTL) - Best when your shipment does not fill an entire truck",
      description: "For shipments that do not require a full truck, Savani offers efficient Part Truck Load (PTL) solutions backed by a deep pan-India network and strong operational expertise. We consolidate smaller consignments, optimise routes, and ensure safe and timely delivery making PTL a cost-effective and reliable choice for businesses of all sizes.",
      idealFor: [
        "A business sending a few cartons or pallets to another city",
        "MSMEs shipping regular but smaller loads",
        "Manufacturers dispatching partial orders to multiple locations",
        "A single sender moving small parcels from Point A to Point B"
      ],
      whyChoose: [
        "Cost-efficient for smaller shipments",
        "Shared truck space without compromising delivery reliability"
      ],
      image: "/assets/service1.png", // Placeholder - user will replace
      imagePosition: "right" as const
    },
    {
      title: "Full Truck Load (FTL) - Best when your shipment requires an entire vehicle",
      description: "When cargo requires an entire vehicle, our Full Truck Load (FTL) services provide faster transit, higher safety, and dedicated movement from origin to destination. Each shipment is assigned a suitable vehicle and handled by trained, reliable drivers to ensure secure and timely delivery.",
      idealFor: [
        "Large consignments filling a full truck",
        "High-value or sensitive cargo requiring dedicated movement",
        "Time-critical shipments needing faster transit",
        "Factory-to-warehouse or warehouse-to-distribution centre movement"
      ],
      whyChoose: [
        "Direct, non-stop delivery",
        "Higher safety and faster turnaround"
      ],
      image: "/assets/service2.png", // Placeholder - user will replace
      imagePosition: "left" as const
    },
    {
      title: "Value Added Logistics Services -Best when you need more than just transport",
      description: "Every business has unique logistics requirements. Savani offers flexible value-added services designed to complement PTL and FTL movement and provide end-to-end solutions. Our value-added services are designed to offer flexibility, convenience, and complete control over your logistics requirements.",
      serviceOptions: [
        "Payment terms: Paid, To Pay, Billing",
        "Delivery models: Door-to-Door, Godown-to-Door, Godown-to-Godown",
        "Delivery Against Consignee Copy (DACC)",
        "Cash on Delivery (COD)",
        "Surface transport and express cargo movement"
      ],
      image: "/assets/service3.jpg", // Placeholder - user will replace
      imagePosition: "right" as const
    }
  ];

  return (
    <div className="w-full flex flex-col gap-16 md:gap-[6.5rem]">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col-reverse sm:flex-col items-center ${
            service.imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"
          } items-start gap-8 md:gap-[124px]`}
        >
          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-6 md:gap-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-figtree text-primary-text-color">
              {service.title}
            </h2>
            <p className="text-base md:text-lg font-figtree text-primary-text-color-70">
              {service.description}
            </p>
            
            {/* Ideal For Section */}
            {service.idealFor && (
              <div className="bg-[#E7F0FD] rounded-[14px] px-8 py-10 md:px-8 md:py-10">
              <div className="flex flex-col gap-8">
                {/* Ideal for */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold text-black">Ideal for:</h3>
                  <ul className="list-disc pl-6 text-base text-black space-y-1">
                    
                  {service.idealFor.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>


                {/* Divider */}
                <div className="h-px w-full bg-black/10" />


                {/* Why choose PTL */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold text-black">
                    Why choose PTL?
                  </h3>
                  <ul className="list-disc pl-6 text-base text-black space-y-1">
                  {service.whyChoose.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            )}
            
            
            {/* Service Options Section */}
            {service.serviceOptions && (
              <div className="bg-[#E7F0FD] rounded-[14px] px-8 py-10 md:px-8 md:py-10">
              <div className="flex flex-col gap-8">
                {/* Ideal for */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold text-black">Ideal for:</h3>
                  <ul className="list-disc pl-6 text-base text-black space-y-1">
                    
                  {service.serviceOptions.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            )}
          </div>
          
          {/* Image */}
          <div className="flex-1 w-full flex items-center justify-center">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
