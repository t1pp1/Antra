const state = {
  a: "apple",
  b: "banana",
  c: "city",
  d: "dom",
  e: "end",
  f: "forEach",
  g: "gold",
};

(() => {
  const container = document.getElementById("container");
  const select_key = document.createElement("select");
  const select_value = document.createElement("select");
  container.appendChild(select_key);
  container.appendChild(select_value);

  for (let key of Object.keys(state)) {
    const option_key = document.createElement("option");
    const option_value = document.createElement("option");
    option_key.text = key;
    option_key.value = key;
    option_value.text = state[key];
    option_value.value = state[key];
    select_key.appendChild(option_key);
    select_value.appendChild(option_value);
  }

  select_key.addEventListener("change", (event) => {
    select_value.value = state[event.target.value];
  });

  select_value.addEventListener("change", (event) => {
    select_key.value = event.target.value[0];
  });
})();
