<div class="hero-50-50">
  <div class="hero-left">
    <label for="text1-color">Text 1 Color:</label>
    <select id="text1-color">
      <option value="Red">Red</option>
      <option value="Green">Green</option>
      <option value="Blue">Blue</option>
    </select>

    <div class="separator-red-bold">
      <label for="text2">Text 2:</label>
      <input type="text" id="text2" />
    </div>

    <div class="separator-red-bold">
      <label for="text3">Text 3:</label>
      <input type="text" id="text3" />
    </div>

    <div class="hero-buttons">
      <label for="btn1-color">Blue Button Color:</label>
      <select onchange="changeButtonColor('btn1', this.value)">
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
        <option value="Red">Red</option>
      </select>

      <label for="btn2-color">Red Button Color:</label>
      <select onchange="changeButtonColor('btn2', this.value)">
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
      </select>

      <div style="margin-top: 10px;">
        <button id="btn1" class="blue">Blue Button</button>
        <button id="btn2" class="red">Red Button</button>
      </div>
    </div>
  </div>

  <div class="hero-right">
    <img src="your-image-url.jpg" alt="Hero Image" style="max-width: 100%;" />
  </div>
</div>

<script>
  function changeButtonColor(buttonId, color) {
    const btn = document.getElementById(buttonId);
    btn.className = '';
    btn.classList.add(color.toLowerCase());
  }
</script>
