import Section from "./Section";
import { motion } from "framer-motion";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiPlotly,
} from "react-icons/si";

const skills = [
  { icon: <SiPython className="text-yellow-400" />, name: "Python" },
  { icon: <SiPytorch className="text-red-500" />, name: "PyTorch" },
  { icon: <SiTensorflow className="text-orange-500" />, name: "TensorFlow" },
  { icon: <SiScikitlearn className="text-blue-500" />, name: "Scikit-learn" },
  { icon: <SiPandas className="text-indigo-400" />, name: "Pandas" },
  { icon: <SiNumpy className="text-blue-400" />, name: "NumPy" },
  { icon: <SiJupyter className="text-orange-400" />, name: "Jupyter Notebook" },
  { icon: <SiPlotly className="text-pink-400" />, name: "Matplotlib / Plotly" },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills" className="py-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="flex items-center gap-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-xl px-4 py-3 shadow hover:shadow-lg"
          >
            <span className="text-2xl">{s.icon}</span>
            <span className="font-medium">{s.name}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
