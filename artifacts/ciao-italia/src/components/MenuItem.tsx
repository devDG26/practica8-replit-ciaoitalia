import { MenuItem as MenuItemType } from "../data/menuData";

interface MenuItemProps {
  item: MenuItemType;
}

export function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="flex flex-col border-b border-border/50 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0 hover:bg-black/5 dark:hover:bg-white/5 p-4 -mx-4 rounded-sm transition-colors">
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="font-serif text-xl font-bold text-foreground">{item.name}</h3>
        {item.price && (
          <span className="text-primary font-bold ml-4 font-sans tracking-wide">
            ${item.price}
          </span>
        )}
      </div>
      
      {item.description && (
        <p className="text-muted-foreground text-sm font-light mb-3">
          {item.description}
        </p>
      )}
      
      {item.options && item.options.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-2">
          {item.options.map((opt, i) => (
            <div key={i} className="flex items-center text-sm">
              <span className="capitalize text-foreground font-medium">{opt.type}</span>
              <span className="ml-2 text-primary font-semibold">${opt.price}</span>
            </div>
          ))}
        </div>
      )}

      {item.custom && item.ingredients && (
        <div className="mt-3">
          <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Ingredientes a elegir:</h4>
          <div className="flex flex-wrap gap-2">
            {item.ingredients.map((ing, i) => (
              <span key={i} className="text-xs bg-secondary/10 text-secondary-foreground border border-secondary/20 px-2 py-1 rounded-sm">
                {ing}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
