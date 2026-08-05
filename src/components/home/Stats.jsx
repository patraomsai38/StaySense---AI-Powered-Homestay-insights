import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  Home,
  Star,
  Users,
  Bot,
  Trees,
} from "lucide-react";

const stats = [
  {
    icon: Home,
    number: 500,
    suffix: "+",
    title: "Homestays Listed",
    color: "text-green-600",
  },
  {
    icon: Users,
    number: 10000,
    suffix: "+",
    title: "Happy Travelers",
    color: "text-blue-600",
  },
  {
    icon: Star,
    number: 95,
    suffix: "%",
    title: "Customer Satisfaction",
    color: "text-yellow-500",
  },
  {
    icon: Bot,
    number: 24,
    suffix: "/7",
    title: "AI Assistance",
    color: "text-purple-600",
  },
  {
    icon: Trees,
    number: 50,
    suffix: "+",
    title: "Eco Tourism Partners",
    color: "text-emerald-600",
  },
];

function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-white dark:from-gray-900 dark:to-gray-800">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-14"
        >
          Trusted by Travelers Across India
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                }}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center"
              >

                <Icon
                  className={`mx-auto mb-5 h-12 w-12 ${item.color}`}
                />

                <h3 className="text-4xl font-extrabold">

                  <CountUp
                    end={item.number}
                    duration={3}
                  />

                  {item.suffix}

                </h3>

                <p className="mt-3 text-gray-500 dark:text-gray-300">

                  {item.title}

                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Stats;