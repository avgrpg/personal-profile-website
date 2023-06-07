import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TechStack = ({
  iconList,
  className,
}: {
  iconList: Array<{
    name: string;
    icon: JSX.Element;
    link?: string;
  }>;
  className?: string;
}) => {
  const [popedout, setPopedout] = useState(false);
  const [showTechDetail, setShowTechDetail] = useState<Number | null>(null);

  return (
    <div className={`${className}`}>
      {iconList.map(({ name, icon, link }, index) => {
        return (
          <motion.a
            href={link}
            target="_blank"
            onHoverStart={() => {
              setShowTechDetail(index);
              setPopedout(true);
            }}
            onHoverEnd={() => {
              setShowTechDetail(null);
              setPopedout(false);
            }}
            key={index}
            className="flex flex-row items-center gap-2"
            aria-label={name}
          >
            <AnimatePresence>
              <motion.div
                whileHover={{ y: -2 }}
                animate={popedout ? { x: 5 } : { x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {icon}
              </motion.div>
              {showTechDetail === index && (
                <motion.div
                  initial={{ x: 0, width: 0 }}
                  animate={{ x: 7, width: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {name}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.a>
        );
      })}
    </div>
  );
};

export default TechStack;
