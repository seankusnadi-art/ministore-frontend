export function scrollToElement(id, behavior = "smooth") {
  document.getElementById(id)?.scrollIntoView({ behavior });
}
