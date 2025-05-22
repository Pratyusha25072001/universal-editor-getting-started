function renderDropdown(label, items, icons) {
    const dropdown = document.createElement("div");
    dropdown.className = "dropdown";
  
    const button = document.createElement("button");
    button.className = "dropbtn";
    button.textContent = label;
  
    const content = document.createElement("div");
    content.className = "dropdown-content";
  
    items.forEach((item, index) => {
      const link = document.createElement("a");
      link.href = "#";
  
      const icon = document.createElement("img");
      icon.src = icons[index];
      icon.alt = "icon";
  
      link.appendChild(icon);
      link.appendChild(document.createTextNode(item));
      content.appendChild(link);
    });
  
    dropdown.appendChild(button);
    dropdown.appendChild(content);
    document.querySelector(".nav").appendChild(dropdown);
  }
  
  // Example usage:
  renderDropdown("Services", ["Consulting", "Support"], ["icon1.png", "icon2.png"]);
  