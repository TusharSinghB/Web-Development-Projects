/**
 * @type HTMLInputElement
 */
const item_text = document.getElementById("text_input");
const add_button = document.getElementById("add_button");
const item_list = document.getElementById("item_list");

add_button.addEventListener("click", () => {
  const text = item_text.value;
  if (text != "") {
    const new_item = document.createElement("li");
    new_item.textContent = text;
    item_list.append(new_item);

    const delete_button = document.createElement("button");
    const image = document.createElement("img");
    image.src = "delete.png";
    image.className = "button_image";
    delete_button.append(image);
    delete_button.className = "del";
    delete_button.addEventListener("click", () => {
      item_list.removeChild(new_item);
    });
    new_item.append(delete_button);

    const done_button = document.createElement("button");
    const image2 = document.createElement("img");
    image2.src = "check.png";
    image2.className = "button_image";
    done_button.append(image2);
    done_button.className = "del";
    done_button.addEventListener("click", () => {
      new_item.style.textDecoration = "line-through";
    });
    new_item.append(done_button);
    item_text.value = "";
  }
});
console.log("working");
item_text.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    add_button.click();
  }
  console.log("Code", event.key);
});
