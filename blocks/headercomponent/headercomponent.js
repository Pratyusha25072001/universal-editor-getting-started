<script>
  document.addEventListener("DOMContentLoaded", function () {
    const navLabels = document.querySelectorAll('[data-aue-prop$="_label"]');

    navLabels.forEach(label => {
      label.addEventListener("click", () => {
        const labelProp = label.getAttribute("data-aue-prop");

        // Toggle the label itself
        label.classList.toggle("active");

        if (labelProp === "nav1_label") {
          toggle("nav1_item1_label", "nav1_item1_icon");
          toggle("nav1_item2_label", "nav1_item2_icon");
          toggle("nav1_item3_label", "nav1_item3_icon");
        } else if (labelProp === "nav2_label") {
          toggle("nav2_item1_label", "nav2_item1_icon");
          toggle("nav2_item2_label", "nav2_item2_icon");
          toggle("nav2_item3_label", "nav2_item3_icon");
        } else if (labelProp === "nav3_label") {
          toggle("nav3_item1_label", "nav3_item1_icon");
          toggle("nav3_item2_label", "nav3_item2_icon");
          toggle("nav3_item3_label", "nav3_item3_icon");
        } else if (labelProp === "nav4_label") {
          toggle("nav4_item1_label", "nav4_item1_icon");
          toggle("nav4_item2_label", "nav4_item2_icon");
          toggle("nav4_item3_label", "nav4_item3_icon");
        } else if (labelProp === "nav5_label") {
          toggle("nav5_item1_label", "nav5_item1_icon");
          toggle("nav5_item2_label", "nav5_item2_icon");
          toggle("nav5_item3_label", "nav5_item3_icon");
        } else if (labelProp === "nav6_label") {
          toggle("nav6_item1_label", "nav6_item1_icon");
          toggle("nav6_item2_label", "nav6_item2_icon");
          toggle("nav6_item3_label", "nav6_item3_icon");
        } else if (labelProp === "nav7_label") {
          toggle("nav7_item1_label", "nav7_item1_icon");
          toggle("nav7_item2_label", "nav7_item2_icon");
          toggle("nav7_item3_label", "nav7_item3_icon");
        }
      });
    });

    function toggle(labelProp, iconProp) {
      const labelButton = document.querySelector(`[data-aue-prop="${labelProp}"] a.button`);
      if (labelButton) {
        labelButton.classList.toggle("active");
      }

      const icon = document.querySelector(`[data-aue-prop="${iconProp}"]`);
      if (icon) {
        icon.classList.toggle("active");
      }
    }
  });
</script>
