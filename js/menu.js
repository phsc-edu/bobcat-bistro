/* Important! */
/* Update menu.html js version everytime this file is updated. */

    // Add or edit specials by month (YYYY-MM), then by day of the month (1–31).
    // A day may contain one special object or an array of multiple specials.
    // Example: 5: [{ title: "Special one", description: "Details" }, { title: "Special two", description: "Details" }]
    const monthlySpecials = {
      "2026-10": {
        29: { title: "Meatloaf with Mashed Potatoes and Gravy", description: " " },
        30: { title: "Taco Bar", description: " " }
      },
      "2026-11": {
        2: [
          { title: "Taco Bar", description: "" },
          { title: "Thanksgiving Cuban Sandwich", description: "Available until Nov 20" }
        ],
        3: [
          { title: "Teriyaki Chicken and White Rice", description: "" },
          { title: "Thanksgiving Cuban Sandwich", description: "Available until Nov 20" }
        ],
        4: [
          { title: "Wing Wednesday", description: "" },
          { title: "Thanksgiving Cuban Sandwich", description: "Available until Nov 20" }
        ],
        5: [
          { title: "Turkey Bacon Ranch Wrap", description: "" },
          { title: "Thanksgiving Cuban Sandwich", description: "Available until Nov 20" }
        ],
        6: [
          { title: "Pasta Bar", description: "" },
          { title: "Thanksgiving Cuban Sandwich", description: "Available until Nov 20" }
        ],
        9: [
          { title: "Curry Chicken and White Rice", description: "" },
          { title: "Thanksgiving Cuban Sandwich", description: "Available until Nov 20" }
        ],
        10: [
          { title: "Baked Potato Bar", description: "" },
          { title: "Thanksgiving Cuban Sandwich", description: "Available until Nov 20" }
        ],
        11: [
          { title: "Wing Wednesday", description: "" },
          { title: "Thanksgiving Cuban Sandwich", description: "Available until Nov 20" }
        ],
        12: [
          { title: "BBQ Pork and Baked Beans", description: "" },
          { title: "Thanksgiving Cuban Sandwich", description: "Available until Nov 20" }
        ],
        13: [
          { title: "Chicken Fajitas", description: "" },
          { title: "Thanksgiving Cuban Sandwich", description: "Available until Nov 20" }
        ],
        16: [
          { title: "Chicken Quesadillas", description: "" },
          { title: "Thanksgiving Cuban Sandwich", description: "Available until Nov 20" }
        ],
        17: [
          { title: "Chicken Rice Bowl", description: "" },
          { title: "Thanksgiving Cuban Sandwich", description: "Available until Nov 20" }
        ],
        18: [
          { title: "Wing Wednesday", description: "" },
          { title: "Thanksgiving Cuban Sandwich", description: "Available until Nov 20" }
        ],
        19: [
          { title: "Broccoli Cheese Soup and Salad", description: "" },
          { title: "Thanksgiving Cuban Sandwich", description: "Available until Nov 20" }
        ],
        20: [
          { title: "Chicken and Waffles", description: "" },
          { title: "Thanksgiving Cuban Sandwich", description: "Available until Nov 20" }
        ],
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
    const menuCallouts = {
      drinks: "",
      breakfast: "",
      lunch: "Ask about our soup of the day!"
    };

    const menuData = {
      drinks: {
        title: "Drinks",
        items: [
          { name: "Fountain Soda", description: " ", sizes: [{ size: " ", price: "$3.25" }] },
          { name: "Iced Tea", description: "Strawberry, Peach, Mango", sizes: [{ size: "Sweet", price: "$3.00" }, { size: "Unsweetened", price: "$3.00" }, { size: "Add a flavor", price: "$0.75" }] },
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
          { name: "Build Your Own Breakfast Sandwich", description: "", choices: [{ label: "Bread", options: "Cuban Bread, Croissant, Bagel, Wrap" }, { label: "Cheese", options: "American, Swiss, Provolone" }, { label: "Meat", options: "Bacon, Sausage, Ham" }], sizes: [{ size: " ", price: "$6.25" }, ] },
          { name: "Cuban Toast", description: "Fresh La Segunda Cuban Bread, spread with butter, pressed to perfection", sizes: [{ size: " ", price: "$3.00" }, { size: "Add cheese", price: "$0.75" }] },
          { name: "Churro Toast", description: "Our classic pressed cuban toast with cinnamon sugar", sizes: [{ size: "", price: "$3.50" }] },
          { name: "Grit Bowl", description: "Cheddar grits topped with scrambled eggs and a choice of bacon or sausage on top", sizes: [{ size: " ", price: "$5.75" }] },
          { name: "French Toast Sticks with Syrup", description: "Cinnamon french toast sticks fried to a golden brown served with maple syrup", sizes: [{ size: " ", price: "$3.50" }] },
          { name: "Tater Tots", description: " ", sizes: [{ size: " ", price: "$3.00" }] },
          { name: "Bagel with Cream Cheese", description: "Plain, Blueberry, Everything Bagel", sizes: [{ size: " ", price: "$3.25" }] },
          { name: "Two Toast with Butter or Jelly", description: " ", sizes: [{ size: " ", price: "$3.00" }] },
          { name: "Whole Fruit", description: " ", sizes: [{ size: " ", price: "$1.00" }] },
          { name: "Fresh Fruit Cup", description: " ", sizes: [{ size: "Small", price: "$2.75" }, { size: "Large", price: "$3.75" }] },
        ]
      },
      lunch: {
        title: "Lunch",
        items: [
          { name: "Roast Pork Meal", description: "Our family's slow roasted mojo pork with black beans, yellow rice, and a side of cuban toast", sizes: [{ size: "", price: "$10.50" }] },
          { name: "Tampa Cuban", description: "Slow roasted mojo pork, ham, cheese, salami, pickles, and our Cuban sauce pressed perfectly inside fresh baked La Segunda bread", sizes: [{ size: " ", price: "$8.50" }] },
          { name: "Cuban Godfather", description: "Italian cured meats, provolone cheese, tomato,onion, mayo, and sub sauce on La Segunda bread, pressed with garlic butter", sizes: [{ size: " ", price: "$8.50" }] },
          { name: "Half Cuban with Fries", description: "Half of one of our favorite Cubans and dipper fries", sizes: [{ size: " ", price: "$8.95" }] },
          { name: "Cuban Grilled Cheese", description: "3 cheeses on La Segunda cuban bread pressed with garlic butter", sizes: [{ size: " ", price: "$7.00" }] },
          { name: "Chicken Tenders with Fries", description: "Served with BBQ sauce or ranch dressing and a side of our dipper fries ", sizes: [{ size: "", price: "$8.95" }] },
          { name: "Chicken Caesar Wrap", description: "All the bold, zesty flavors of a classic Caesar salad, tucked into a soft, fresh tortilla for the perfect handheld bite", choices: [{ label: "Options", options: "Cold or Grilled" }],sizes: [{ size: "", price: "$7.75" }] },
          { name: "Chicken Salad Sandwich", description: "Chicken salad made with pecans, crasins, onions, and a hint of hickory honey mustard finished with fresh lettuce and tomato", choices: [{ label: "Options", options: "Wrap or Croissant" }], sizes: [{ size: "", price: "$7.75" }] },
          { name: "Chicken Bacon Ranch Sandwich", description: "Grilled chicken breast, our housemade ranch, and crispy bacon topped with lettuce and tomato", sizes: [{ size: "", price: "$8.50" }] },
          { name: "Veggie Sandwich", description: "Assorted vegetables and hummus between bakery multigrain bread", sizes: [{ size: "", price: "$7.75" }] },
          { name: "Turkey Sandwich", description: "Sliced turkey breast, cheese, lettuce, and tomato", choices: [{ label: "Options", options: "Wrap or Croissant" }], sizes: [{ size: "", price: "$7.50" }] },
          { name: "Turkey Burger", description: " ", sizes: [{ size: " ", price: "$8.00" }, { size: "Add Cheese ", price: "$0.50" }] },
          { name: "Hamburger", description: " ", sizes: [{ size: " ", price: "$7.00" }, { size: "Add Cheese ", price: "$0.50" }, { size: "With Fries ", price: "$10.00" }] },
          { name: "Hot Dog", description: " ", sizes: [{ size: " ", price: "$3.50" }, { size: "With Fries ", price: "$6.50" }] },
        ],
        salads: [
          { name: "Chicken Caesar Salad", description: "Classic combination of fresh ingredients including Romain lettuce, grilled chicken, and a creamy, tangy Caesar dressing, topped with Parmesan cheese", sizes: [{ size: "", price: "$9.95" }] },
          { name: "3104 Salad", description: "Lettuce, Julienne sliced ham, Swiss cheese, green olives, Parmesan cheese, and tomato, with homemade vinaigrette dressing", sizes: [{ size: "", price: "$9.95" }] },
        ],
        sides: [
          { name: "Assorted Empanadas", description: "", sizes: [{ size: "", price: "$3.75" }] },
          { name: "Black Beans and Yellow Rice", description: "Our classic cuban black beans and yellow rice", sizes: [{ size: "", price: "$4.00" }] },
          { name: "Dipper Fries", description: "Served with BBQ sauce or ranch dressing and a side of our dipper fries", sizes: [{ size: "", price: "$3.95" }] },
          { name: "Mozzarella Sticks", description: "Fried golden brown with a side of Marinara", sizes: [{ size: "", price: "$8.75" }] },
          { name: "Jalapeno Poppers", description: " ", sizes: [{ size: "", price: "$8.75" }] },
          { name: "Onion Rings", description: " ", sizes: [{ size: "", price: "$4.50" }] },
          { name: "Side of Sauce", description: "Honey Mustard, Ranch, BBQ, or Bleu Cheese ", sizes: [{ size: "", price: "$0.75" }] }
        ]
      }
    };

    const today = localDate(new Date());
    let weekStart = mondayOfWeek(today);
    let selectedDate = (today.getDay() === 6) ? addDays(today, 2) : (today.getDay() === 0) ? addDays(today, 1) : localDate(today);
    const isWeekend = today.getDay() === 0 || today.getDay() === 6;
    if (isWeekend) document.documentElement.classList.add("weekend-specials");
    let menuItemId = 0;
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
    function specialsFor(date) {
      const entry = monthlySpecials[dateKey(date)]?.[date.getDate()];
      if (!entry) return [];
      return (Array.isArray(entry) ? entry : [entry]).filter(item => item && item.title);
    }
    function renderCalendar(focusDay = -1) {
      const grid = document.getElementById("calendar-grid");
      const weekEnd = addDays(weekStart, 4);
      document.getElementById("week-label").textContent =
        `${formatDate(weekStart, { month: "short", day: "numeric" })} – ${formatDate(weekEnd, { month: "short", day: "numeric", year: "numeric" })}`;
      grid.replaceChildren();
      const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
      for (let i = 0; i < 5; i++) {
        const date = addDays(weekStart, i);
        const specials = specialsFor(date);
        const isToday = date.getTime() === today.getTime();
        const isSelected = date.getTime() === selectedDate.getTime();
        const button = document.createElement("button");
        button.type = "button";
        button.className = "day-card" + (isToday ? " today" : "") + (isSelected ? " selected" : "");
        button.setAttribute("aria-pressed", String(isSelected));
        button.setAttribute("aria-controls", "specials-list");
        button.setAttribute("aria-label", `${dayNames[i]}, ${formatDate(date, { month: "long", day: "numeric" })}: ${specials.length ? specials.map(item => item.title).join(", ") : "No specials listed"}${isToday ? ", today" : ""}`);
        const dayName = document.createElement("span");
        dayName.className = "day-name";
        dayName.textContent = dayNames[i].slice(0, 3);
        const dayNumber = document.createElement("span");
        dayNumber.className = "day-number";
        dayNumber.textContent = date.getDate();
        const daySpecials = document.createElement("span");
        daySpecials.className = "day-special";
        if (specials.length) {
          specials.forEach(item => {
            const title = document.createElement("span");
            title.className = "day-special-item";
            title.textContent = item.title;
            daySpecials.appendChild(title);
          });
        } else {
          daySpecials.textContent = "No special listed";
        }
        button.append(dayName, dayNumber, daySpecials);
        button.addEventListener("click", () => {
          selectedDate = localDate(date);
          renderCalendar(i);
          renderSpecial();
        });
        grid.appendChild(button);
      }
      if (focusDay >= 0) grid.children[focusDay]?.focus();
    }
    // Feature the next two business days on weekends, in both desktop and mobile layouts.
    // On weekdays, mobile continues to show today and the next business day.
    function renderMobileSpecials() {
      const container = document.getElementById("mobile-specials");
      container.replaceChildren();
      const currentDate = localDate(new Date());
      let firstDate = localDate(currentDate);
      while (firstDate.getDay() === 0 || firstDate.getDay() === 6) {
        firstDate = addDays(firstDate, 1);
      }
      let secondDate = addDays(firstDate, 1);
      while (secondDate.getDay() === 0 || secondDate.getDay() === 6) {
        secondDate = addDays(secondDate, 1);
      }
      container.setAttribute("aria-label", isWeekend ? "Upcoming Monday and Tuesday specials" : "Today and next business day specials");
      [firstDate, secondDate].forEach((date, offset) => {
        const section = document.createElement("section");
        section.className = "mobile-special-day" + (offset === 0 && !isWeekend ? " mobile-today" : "");
        const heading = document.createElement("h3");
        heading.textContent = offset === 0 && !isWeekend ? "Today's Specials" : `${formatDate(date, { weekday: "long" })}’s Specials`;
        section.appendChild(heading);
        const dateLine = document.createElement("p");
        dateLine.className = "mobile-special-date";
        dateLine.textContent = formatDate(date, { weekday: "long", month: "long", day: "numeric", year: "numeric" });
        section.appendChild(dateLine);
        const specials = specialsFor(date);
        if (!specials.length) {
          const message = document.createElement("p");
          message.textContent = "No specials listed.";
          section.appendChild(message);
        } else {
          specials.forEach(item => {
            const article = document.createElement("article");
            article.className = "special-item";
            const title = document.createElement("h4");
            title.textContent = item.title;
            article.appendChild(title);
            if (item.description && item.description.trim()) {
              const description = document.createElement("p");
              description.textContent = item.description;
              article.appendChild(description);
            }
            section.appendChild(article);
          });
        }
        container.appendChild(section);
      });
    }
    function renderSpecial() {
      const specials = specialsFor(selectedDate);
      const isToday = selectedDate.getTime() === today.getTime();
      document.getElementById("special-date").textContent =
        `${formatDate(selectedDate, { weekday: "long", month: "long", day: "numeric", year: "numeric" })}${isToday ? " · Today" : ""}`;
      const status = document.getElementById("special-status");
      if (status) status.textContent = `Showing specials for ${formatDate(selectedDate, {weekday: "long", month: "long", day: "numeric"})}.`;
      const list = document.getElementById("specials-list");
      list.replaceChildren();
      if (!specials.length) {
        const empty = document.createElement("p");
        empty.textContent = "No special listed yet. Check back soon, or ask our team what is featured today.";
        list.appendChild(empty);
        return;
      }
      specials.forEach(item => {
        const article = document.createElement("article");
        article.className = "special-item";
        const heading = document.createElement("h3");
        heading.textContent = item.title;
        article.appendChild(heading);
        if (item.description && item.description.trim()) {
          const description = document.createElement("p");
          description.textContent = item.description;
          article.appendChild(description);
        }
        list.appendChild(article);
      });
    }
    function changeWeek(amount) {
      weekStart = addDays(weekStart, amount * 7);
      selectedDate = localDate(weekStart);
      renderCalendar();
      renderSpecial();
    }
    const browseButton = document.getElementById("browse-specials");
    const specialsBrowser = document.getElementById("specials-browser");
    browseButton.addEventListener("click", () => {
      const opening = !specialsBrowser.classList.contains("is-open");
      specialsBrowser.classList.toggle("is-open", opening);
      browseButton.setAttribute("aria-expanded", String(opening));
      browseButton.textContent = opening ? "Hide full calendar" : "Browse all specials";
      if (opening) {
        // Open on the current week, with today's specials selected.
        weekStart = mondayOfWeek(today);
        selectedDate = (today.getDay() === 6) ? addDays(today, 2) : (today.getDay() === 0) ? addDays(today, 1) : localDate(today);
        weekStart = mondayOfWeek(selectedDate);
        renderCalendar();
        renderSpecial();
      }
    });
    document.getElementById("previous-week").addEventListener("click", () => changeWeek(-1));
    document.getElementById("next-week").addEventListener("click", () => changeWeek(1));
    document.getElementById("today-week").addEventListener("click", () => {
      weekStart = mondayOfWeek(today);
      // If today is Saturday or Sunday, select Monday, since the calendar shows weekdays only.
      selectedDate = (today.getDay() === 6) ? addDays(today, 2) : (today.getDay() === 0) ? addDays(today, 1) : localDate(today);
      weekStart = mondayOfWeek(selectedDate);
      renderCalendar();
      renderSpecial();
    });

    function renderMenu(category) {
      activeCategory = category;
      const data = menuData[category];
      const status = document.getElementById("menu-status");
      if (status) status.textContent = `${category[0].toUpperCase() + category.slice(1)} menu selected.`;
      document.getElementById("menu-category-title").textContent = data.title;
      const panel = document.getElementById("menu-panel");
      panel.setAttribute("aria-labelledby", `tab-${category}`);
      const list = document.getElementById("menu-items");
      list.replaceChildren();
      function appendMenuItems(items, container) {
      items.forEach(item => {
        const row = document.createElement("article");
        row.className = "menu-item";
        const itemId = `menu-item-${++menuItemId}`;
        row.setAttribute("aria-labelledby", `${itemId}-name`);
        if (category === "lunch" && item.name === "Hot Dog") row.classList.add("hot-dog-item");
        const detail = document.createElement("div");
        const name = document.createElement("div");
        name.className = "item-name";
        name.id = `${itemId}-name`;
        name.textContent = item.name;
        const description = document.createElement("p");
        description.className = "item-description";
        description.textContent = item.description;
        if (item.description && item.description.trim()) {
          description.id = `${itemId}-description`;
          row.setAttribute("aria-describedby", description.id);
        }
        detail.className = "item-detail";
        detail.appendChild(name);
        if (item.choices && item.choices.length) {
          const choices = document.createElement("div");
          choices.className = item.choices.every(choice => choice.label === "Options") ? "menu-options" : "sandwich-options";
          item.choices.forEach(choice => {
            const choiceRow = document.createElement("div");
            choiceRow.className = "option-row";
            const label = document.createElement("strong");
            label.textContent = choice.label + ": ";
            choiceRow.append(label, document.createTextNode(choice.options));
            choices.appendChild(choiceRow);
          });
          detail.appendChild(choices);
        }
        if (item.description && item.description.trim()) detail.appendChild(description);
        const prices = document.createElement("div");
        prices.className = "item-prices";
        prices.setAttribute("aria-label", `Prices for ${item.name}`);
        item.sizes.forEach(option => {
          const sizePrice = document.createElement("div");
          sizePrice.className = "item-price";
          const sizeLabel = document.createElement("span");
          sizeLabel.className = "item-size";
          sizeLabel.textContent = option.size.trim();
          const amount = document.createElement("span");
          amount.className = "item-amount";
          amount.textContent = option.price;
          sizePrice.append(sizeLabel, amount);
          prices.appendChild(sizePrice);
        });
        row.append(detail, prices);
        container.appendChild(row);
      });
      }
      appendMenuItems(data.items, list);
      if (category === "lunch") {
        [ { key: "salads", title: "Salads" }, { key: "sides", title: "Sides" } ].forEach(section => {
          if (!data[section.key] || !data[section.key].length) return;
          const heading = document.createElement("h4");
          heading.className = "menu-subsection-title";
          heading.textContent = section.title;
          list.appendChild(heading);
          const sectionList = document.createElement("div");
          sectionList.className = "menu-items menu-" + section.key;
          list.appendChild(sectionList);
          appendMenuItems(data[section.key], sectionList);
        });
      }
      const callout = document.getElementById("menu-callout");
      if (callout) {
        const message = (menuCallouts[category] || "").trim();
        callout.textContent = message;
        callout.hidden = !message;
      }
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

    weekStart = mondayOfWeek(selectedDate);
    renderCalendar();
    renderSpecial();
    renderMobileSpecials();
    renderMenu(activeCategory);