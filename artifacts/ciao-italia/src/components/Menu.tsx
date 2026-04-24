import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuData, menuCategories, MenuCategoryKey } from "../data/menuData";
import { MenuItem } from "./MenuItem";

export function Menu() {
  const [activeTab, setActiveTab] = useState<MenuCategoryKey>("pastas");

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-primary tracking-widest uppercase text-sm font-semibold mb-2 block">Nuestro Menú</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Sabores Auténticos
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-border pb-4">
          {menuCategories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveTab(category.key)}
              className={`text-lg md:text-xl font-serif px-6 py-2 transition-all relative ${
                activeTab === category.key 
                  ? "text-primary font-bold" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category.label}
              {activeTab === category.key && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute bottom-[-17px] left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="bg-card border border-border p-6 md:p-10 rounded-sm shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2"
            >
              {menuData[activeTab].map((item, index) => (
                <MenuItem key={`${activeTab}-${index}`} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
