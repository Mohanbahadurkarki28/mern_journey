document.getElementById("convertButton").addEventListener("click", function () {
  const inputText = document.getElementById("inputText").value.trim();

  document.getElementById("upperCase").textContent = inputText.toUpperCase();

  document.getElementById("camelCase").textContent = toCamelCase(inputText);

  document.getElementById("pascalCase").textContent = toPascalCase(inputText);

  document.getElementById("snakeCase").textContent = toSnakeCase(inputText);

  document.getElementById("kebabCase").textContent = toKebabCase(inputText);

  document.getElementById("trimmed").textContent = inputText.replace(
    /\s+/g,
    ""
  );
});

function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
      index === 0 ? match.toLowerCase() : match.toUpperCase()
    )
    .replace(/\s+/g, "");
}
function toPascalCase(str) {
  return str
    .replace(/\w+/g, function (word) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .replace(/\s+/g, "");
}

function toSnakeCase(str) {
  return str.toLowerCase().replace(/\s+/g, "_");
}
function toKebabCase(str) {
  return str.toLowerCase().replace(/\s+/g, "-");
}
