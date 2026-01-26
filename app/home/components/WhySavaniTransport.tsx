export default function WhySavaniTransport() {
  const items = [
    {
      label: "70+ branches",
      icon: "whysavani.svg",
      highlight: true,
    },
    {
      label: "10+ industries\nserviced",
      icon: "whysavani1.svg",
      highlight: false,
    },
    {
      label: "110 workforce",
      icon: "whysavani2.svg",
      highlight: true,
    },
    {
      label: "6–8 days\ndelivery",
      icon: "whysavani3.svg",
      highlight: false,
    },
    {
      label: "30+ Million\nconsignments delivered",
      icon: "whysavani4.svg",
      highlight: true,
    },
    {
      label: "8 Decades of\nlegacy",
      icon: "whysavani5.svg",
      highlight: false,
    },
  ];

  return (
    <section className="bg-[#F6F8FF] w-screen py-20 px-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
        Why Savani Transport?
      </h2>

      <div className="max-w-4xl mx-auto">
        <div
          className="grid grid-cols-2 md:grid-cols-3"
          style={{ gap: "18px" }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl flex flex-col items-center justify-center text-center aspect-square p-6 transition-all ${
                item.highlight
                  ? "bg-[#6E91FB] text-white"
                  : "bg-[#E1E8FE] text-gray-800"
              }`}
            >
              <div className="text-3xl mb-4"><img src={`/assets/${item.icon}`} alt={item.label} className="w-10 h-10" /></div>
              <p className="text-sm md:text-base font-medium whitespace-pre-line">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
