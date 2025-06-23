<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Handle nav items
    document.querySelectorAll('[data-aue-prop^="nav"]').forEach((el) => {
      const link = el.nextElementSibling?.querySelector('a');
      if (link) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
          window.open(link.href, '_blank'); // or '_self' for same tab
        });
      }
    });

    // Handle top link items
    const topLinks = {
      topLink1Text: "https://michigan.aaa.com/Common/Login/Login.aspx?nextPage=/MyAccount/default.aspx",
      topLink2Text: "https://michigan.aaa.com/Common/Login/PayBillChoice.aspx",
      topLink3Text: "https://michigan.aaa.com/common/Login/authchoice.aspx?targetPage=RSO",
      joinText: "https://michigan.aaa.com/Join/V2/JoinEntry.aspx"
    };

    Object.entries(topLinks).forEach(([prop, url]) => {
      const el = document.querySelector(`[data-aue-prop="${prop}"]`);
      if (el) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
          window.open(url, '_blank'); // or '_self' for same tab
        });
      }
    });
  });
</script>
