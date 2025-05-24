<script>
  document.addEventListener("DOMContentLoaded", function () {
    const navMap = {
      nav1_label: [
        { label: "nav1_item1_label", icon: "nav1_item1_icon" },
        { label: "nav1_item2_label", icon: "nav1_item2_icon" },
        { label: "nav1_item3_label", icon: "nav1_item3_icon" }
      ],
      nav2_label: [
        { label: "nav2_item1_label", icon: "nav2_item1_icon" },
        { label: "nav2_item2_label", icon: "nav2_item2_icon" },
        { label: "nav2_item3_label", icon: "nav2_item3_icon" }
      ],
      nav3_label: [
        { label: "nav3_item1_label", icon: "nav3_item1_icon" },
        { label: "nav3_item2_label", icon: "nav3_item2_icon" },
        { label: "nav3_item3_label", icon: "nav3_item3_icon" }
      ],
      nav4_label: [
        { label: "nav4_item1_label", icon: "nav4_item1_icon" },
        { label: "nav4_item2_label", icon: "nav4_item2_icon" },
        { label: "nav4_item3_label", icon: "nav4_item3_icon" }
      ],
      nav5_label: [
        { label: "nav5_item1_label", icon: "nav5_item1_icon" },
        { label: "nav5_item2_label", icon: "nav5_item2_icon" },
        { label: "nav5_item3_label", icon: "nav5_item3_icon" }
      ],
      nav6_label: [
        { label: "nav6_item1_label", icon: "nav6_item1_icon" },
        { label: "nav6_item2_label", icon: "nav6_item2_icon" },
        { label: "nav6_item3_label", icon: "nav6_item3_icon" }
      ],
      nav7_label: [
        { label: "nav7_item1_label", icon: "nav7_item1_icon" },
        { label: "nav7_item2_label", icon: "nav7_item2_icon" },
        { label: "nav7_item3_label", icon: "nav7_item3_icon" }
      ]
    };

    Object.keys(navMap).forEach(navLabelKey => {
      const navLabel = document.querySelector(`[data-aue-prop="${navLabelKey}"]`);
      if (!navLabel) return;

      navLabel.addEventListener("click", () => {
        navMap[navLabelKey].forEach(({ label, icon }) => {
          const button = document.querySelector(`[data-aue-prop="${label}"] a.button`);
          const iconEl = document.querySelector(`[data-aue-prop="${icon}"]`);

          if (button) button.classList.toggle("active");
          if (iconEl) iconEl.classList.toggle("active");
        });

        navLabel.classList.toggle("active");
      });
    });
  });
</script>
