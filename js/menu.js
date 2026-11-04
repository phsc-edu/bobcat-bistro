    // Add or edit specials by month (YYYY-MM), then by day of the month (1–31).
    // Each special has a short title and a description.
    const monthlySpecials = {
      "2026-10": {
        29: { title: "Meatloaf with Mashed Potatoes and Gravy", description: " " },
        30: { title: "Taco Bar", description: " " }
      },
      "2026-11": {
        2: { title: "Taco Bar", description: "Thanksgiving Cuban Sandwich available until Nov 20" },
        3: { title: "Teriyaki Chicken and White Rice", description: "Thanksgiving Cuban Sandwich available until Nov 20" },
        4: { title: "Wing Wednesday", description: "Thanksgiving Cuban Sandwich available until Nov 20" },
        5: { title: "Turkey Bacon Ranch Wrap", description: "Thanksgiving Cuban Sandwich available until Nov 20" },
        6: { title: "Pasta Bar", description: "Thanksgiving Cuban Sandwich available until Nov 20" },
        9: { title: "Curry Chicken and White Rice", description: "Thanksgiving Cuban Sandwich available until Nov 20" },
        10: { title: "Baked Potato Bar", description: "Thanksgiving Cuban Sandwich available until Nov 20" },
        11: { title: "Wing Wednesday", description: "Thanksgiving Cuban Sandwich available until Nov 20" },
        12: { title: "BBQ Pork and Baked Beans", description: "Thanksgiving Cuban Sandwich available until Nov 20" },
        13: { title: "Chicken Fajitas", description: "Thanksgiving Cuban Sandwich available until Nov 20" },
        16: { title: "Chicken Quesadillas", description: "Thanksgiving Cuban Sandwich available until Nov 20" },
        17: { title: "Chicken Rice Bowl", description: "Thanksgiving Cuban Sandwich available until Nov 20" },
        18: { title: "Wing Wednesday", description: "Thanksgiving Cuban Sandwich available until Nov 20" },
        19: { title: "Broccoli Cheese Soup and Salad", description: "Thanksgiving Cuban Sandwich available until Nov 20" },
        20: { title: "Chicken and Waffles", description: "Thanksgiving Cuban Sandwich available until Nov 20" },
        23: { title: "Closed for Thanksgiving", description: " " },
        24: { title: "Closed for Thanksgiving", description: " " },
        25: { title: "Closed for Thanksgiving", description: " " },
        26: { title: "Closed for Thanksgiving", description: " " },
        27: { title: "Closed for Thanksgiving", description: " " },
        30: { title: "Meatball Sub and French Fries", description: " " }
      }
    };

    // Menu content. Each item has Small, Medium, and Large size options.
    // Replace the $1.00 placeholder prices with your actual prices.
    const menuData = {
      drinks: {
        title: "Drinks",
        items: [
          { name: "Fountain Soda", description: " ", sizes: [{ size: " ", price: "$3.25" }] },
          { name: "Iced Tea", description: "Strawberry, Peach, Mango", sizes: [{ size: "Sweet or Unsweetened", price: "$3.00" }, { size: "Add a flavor", price: "$0.75" }] },
          { name: "Frozen Frappe", description: "Mocha, Vanilla, Caramel", sizes: [{ size: "16 oz", price: "$5.75" }, { size: "24 oz", price: "$6.75" }] },
          { name: "Fruit Smoothie", description: "Strawberry Banana, Peach, Mango, Strawberry, Pina Colada", sizes: [{ size: "16 oz", price: "$5.75" }, { size: "24 oz", price: "$6.75" }] },
          { name: "Hot Coffee", description: " ", sizes: [{ size: "12 oz", price: "$3.00" }, { size: "16 oz", price: "$3.50" }] },
          { name: "Cold Brew", description: " ", sizes: [{ size: "16 oz", price: "$4.25" }, { size: "24 oz", price: "$5.25" }] },
          { name: "Cafe Con Leche", description: " ", sizes: [{ size: "Hot 12 oz", price: "$4.50" }, { size: "Hot 16 oz", price: "$5.25" }, { size: "Iced 16 oz", price: "$5.50" }, { size: "Iced 24 oz", price: "$6.00" }] },
          { name: "Latte", description: " ", sizes: [{ size: "Hot 12 oz", price: "$4.00" }, { size: "Hot 16 oz", price: "$4.75" }, { size: "Iced 16 oz", price: "$5.00" }, { size: "Iced 24 oz", price: "$5.50" }] },
          { name: "Flavor Shots", description: "Caramel, Vanilla, Hazelnut, White Chocolate", sizes: [{ size: " ", price: "$0.75" }] },
          { name: "Extras", description: " ", sizes: [{ size: "Cream", price: "$0.00" }, { size: "Almond Milk", price: "$0.75" }, { size: "Oat Milk", price: "$1.00" }] }
        ]
      },
      breakfast: {
        title: "Breakfast",
        items: [
          { name: "Build Your Own Breakfast Sandwich", description: "Your choice of Bread: Cuban Bread, Croissant, Bagel or Wrap Cheese: American, Swiss or Provolone Meat: Bacon, Sausage, or Ham", sizes: [{ size: " ", price: "$6.25" }, ] },
          { name: "Cuban Toast", description: "Fresh La Segunda Cuban Bread, spread with butter, pressed to perfection", sizes: [{ size: " ", price: "$3.00" }, { size: "Add cheese", price: "$0.75" }] },
          { name: "Churro Toast", description: "Our classic pressed cuban toast with cinnamon sugar", sizes: [{ size: "", price: "$3.50" }] },
          { name: "Grit Bowl", description: "Cheddar grits topped with scrambled eggs and a choice of bacon or sausage on top", sizes: [{ size: " ", price: "$5.75" }] },
          { name: "French Toast Sticks with Syrup", description: "Cinnamon french toast sticks fried to a golden brown served with maple syrup", sizes: [{ size: " ", price: "$3.50" }] },
          { name: "Tater Tots", description: " ", sizes: [{ size: " ", price: "$3.00" }] },
          { name: "Bagel with Cream Cheese", description: " ", sizes: [{ size: " ", price: "$3.25" }] },
          { name: "Two Toast with Butter or Jelly", description: " ", sizes: [{ size: " ", price: "$3.00" }] },
          { name: "Whole Fruit", description: " ", sizes: [{ size: " ", price: "$1.00" }] },
          { name: "Fresh Fruit Cup", description: " ", sizes: [{ size: "Small", price: "$2.75" }, { size: "Large", price: "$3.75" }] },
        ]
      },
      lunch: {
        title: "Lunch",
        items: [
          { name: "Tampa Cuban", description: "Slow roasted mojo pork, ham, cheese, salami, pickles, and our Cuban sauce pressed perfectly inside fresh baked La Segunda bread", sizes: [{ size: " ", price: "$8.50" }] },
          { name: "Cuban Godfather", description: "Italian cured meats, provolone cheese, tomato,onion, mayo, and sub sauce on La Segunda bread, pressed with garlic butter", sizes: [{ size: " ", price: "$8.50" }] },
          { name: "Half Cuban with Fries", description: "Half of one of our favorite Cubans and dipper fries", sizes: [{ size: " ", price: "$8.95" }] },
          { name: "Soup of the Day", description: "Ask us what is simmering today.", sizes: [{ size: "Small", price: "$1.00" }, { size: "Medium", price: "$1.00" }, { size: "Large", price: "$1.00" }] },
          { name: "Lunch Sandwich", description: "A café-style sandwich served fresh.", sizes: [{ size: "Small", price: "$1.00" }, { size: "Medium", price: "$1.00" }, { size: "Large", price: "$1.00" }] }
        ]
      }
    };

    const today = localDate(new Date());
    let weekStart = mondayOfWeek(today);
    let selectedDate = localDate(today);
    let activeCategory = "drinks";

    function localDate(date) {
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }
    function mondayOfWeek(date) {
      const result = localDate(date);
      const day = result.getDay();
      result.setDate(result.getDate() + (day === 0 ? -6 : 1 - day));
      return result;
    }
    function addDays(date, count) {
      const result = localDate(date);
      result.setDate(result.getDate() + count);
      return result;
    }
    function dateKey(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      return `${year}-${month}`;
    }
    function formatDate(date, options = { month: "short", day: "numeric" }) {
      return date.toLocaleDateString("en-US", options);
    }
    function specialFor(date) {
      return monthlySpecials[dateKey(date)]?.[date.getDate()] || {
        title: "No special listed yet",
        description: "Check back soon, or ask our team what is featured today."
      };
    }
    function renderCalendar() {
      const grid = document.getElementById("calendar-grid");
      const weekEnd = addDays(weekStart, 4);
      const sameMonth = weekStart.getMonth() === weekEnd.getMonth() && weekStart.getFullYear() === weekEnd.getFullYear();
      document.getElementById("week-label").textContent = sameMonth
        ? `${formatDate(weekStart, { month: "short", day: "numeric" })} – ${formatDate(weekEnd, { month: "short", day: "numeric", year: "numeric" })}`
        : `${formatDate(weekStart, { month: "short", day: "numeric" })} – ${formatDate(weekEnd, { month: "short", day: "numeric", year: "numeric" })}`;
      grid.replaceChildren();
      const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
      for (let i = 0; i < 5; i++) {
        const date = addDays(weekStart, i);
        const special = specialFor(date);
        const isToday = date.getTime() === today.getTime();
        const isSelected = date.getTime() === selectedDate.getTime();
        const button = document.createElement("button");
        button.type = "button";
        button.className = "day-card" + (isToday ? " today" : "") + (isSelected ? " selected" : "");
        button.setAttribute("aria-pressed", String(isSelected));
        button.setAttribute("aria-label", `${dayNames[i]}, ${formatDate(date, { month: "long", day: "numeric" })}: ${special.title}${isToday ? ", today" : ""}`);
        button.innerHTML = `<span class="day-name">${dayNames[i].slice(0, 3)}</span><span class="day-number">${date.getDate()}</span><span class="day-special"></span>`;
        button.querySelector(".day-special").textContent = special.title;
        button.addEventListener("click", () => {
          selectedDate = localDate(date);
          renderCalendar();
          renderSpecial();
        });
        grid.appendChild(button);
      }
    }
    function renderSpecial() {
      const special = specialFor(selectedDate);
      const isToday = selectedDate.getTime() === today.getTime();
      document.getElementById("special-date").textContent = `${formatDate(selectedDate, { weekday: "long", month: "long", day: "numeric", year: "numeric" })}${isToday ? " · Today" : ""}`;
      document.getElementById("special-title").textContent = special.title;
      document.getElementById("special-description").textContent = special.description;
    }
    function changeWeek(amount) {
      weekStart = addDays(weekStart, amount * 7);
      selectedDate = localDate(weekStart);
      renderCalendar();
      renderSpecial();
    }
    document.getElementById("previous-week").addEventListener("click", () => changeWeek(-1));
    document.getElementById("next-week").addEventListener("click", () => changeWeek(1));
    document.getElementById("today-week").addEventListener("click", () => {
      weekStart = mondayOfWeek(today);
      // If today is Saturday or Sunday, select Monday, since the calendar shows weekdays only.
      selectedDate = (today.getDay() === 0 || today.getDay() === 6) ? localDate(weekStart) : localDate(today);
      renderCalendar();
      renderSpecial();
    });

    function renderMenu(category) {
      activeCategory = category;
      const data = menuData[category];
      document.getElementById("menu-category-title").textContent = data.title;
      const panel = document.getElementById("menu-panel");
      panel.setAttribute("aria-labelledby", `tab-${category}`);
      const list = document.getElementById("menu-items");
      list.replaceChildren();
      data.items.forEach(item => {
        const row = document.createElement("div");
        row.className = "menu-item";
        const detail = document.createElement("div");
        const name = document.createElement("div");
        name.className = "item-name";
        name.textContent = item.name;
        const description = document.createElement("p");
        description.className = "item-description";
        description.textContent = item.description;
        detail.append(name, description);
        const prices = document.createElement("div");
        prices.className = "item-prices";
        item.sizes.forEach(option => {
          const sizePrice = document.createElement("div");
          sizePrice.className = "item-price";
          sizePrice.textContent = `${option.size} ㅤ  ${option.price}`;
          prices.appendChild(sizePrice);
        });
        row.append(detail, prices);
        list.appendChild(row);
      });
      document.querySelectorAll(".category-tab").forEach(tab => {
        const selected = tab.dataset.category === category;
        tab.setAttribute("aria-selected", String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });
    }
    document.querySelectorAll(".category-tab").forEach((tab, index, tabs) => {
      tab.addEventListener("click", () => renderMenu(tab.dataset.category));
      tab.addEventListener("keydown", event => {
        if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        let nextIndex = index;
        if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
        if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = tabs.length - 1;
        tabs[nextIndex].focus();
        renderMenu(tabs[nextIndex].dataset.category);
      });
    });

    renderCalendar();
    renderSpecial();
    renderMenu(activeCategory);