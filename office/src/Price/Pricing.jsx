import { FaCheck } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Questions from "./Questions";


const plans = [
  {
    name: "Monthly",
    price: "₹ 1,499",
    period: "per month",
    features: [
      "Access to all equipment",
      "Locker room facilities",
      "Free WiFi",
      "Group classes included",
      "Fitness assessment",
    ],
    popular: false,
  },
  {
    name: "Quarterly",
    price: "₹ 3,999",
    period: "3 months",
    features: [
      "Everything in Monthly",
      "1 personal training session",
      "Nutrition consultation",
      "Priority class booking",
      "Guest pass (2/month)",
    ],
    popular: true,
  },
  {
    name: "Yearly",
    price: "₹ 7,999",
    period: "12 months",
    features: [
      "Everything in Quarterly",
      "4 personal training sessions",
      "Custom meal plan",
      "Unlimited guest passes",
      "VIP locker access",
      "Exclusive member events",
    ],
    popular: false,
  },
];

const Pricing = () => {
  const whatsappNumber = "1234567890";

  const handleEnquireClick = (planName) => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hi! I'm interested in the ${planName} membership plan`,
      "_blank"
    );
  };

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            MEMBERSHIP <span className="text-green-500">PLANS</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8" />
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Choose the plan that fits your fitness journey
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid gap-8 md:grid-cols-3 relative">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-8 border-1 transition-all duration-300 bg-white transform hover:-translate-y-2 shadow-md hover:shadow-2xl hover:shadow-green-500 ${
                plan.popular ? "border-green-500 group" : "border-gray-200"
              }`}
            >
              {/* SOFT GLOW ON HOVER ONLY FOR POPULAR CARD */}
              {plan.popular && (
                <div className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-green-400/40 via-green-300/30 to-green-400/40 blur-3xl"></div>
              )}

              {/* POPULAR BADGE */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  MOST POPULAR
                </div>
              )}

              {/* PLAN DETAILS */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-5xl font-extrabold">{plan.price}</span>
                </div>
                <p className="text-gray-500">{plan.period}</p>
              </div>

              {/* FEATURES */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <FaCheck className="text-green-500 mt-1" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* ENQUIRE BUTTON */}
              <button
                onClick={() => handleEnquireClick(plan.name)}
                className={`flex items-center justify-center w-full py-3 rounded-lg font-semibold transition-all duration-300 border border-green-500 ${
                  plan.popular
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "text-green-600 hover:bg-green-500 hover:text-white"
                }`}
              >
                <IoLogoWhatsapp className="w-5 h-5 mr-2" />
                Enquire Now
              </button>
            </div>
          ))}
        </div>
        <Questions />
      </div>
    </section>
  );
};

export default Pricing;
