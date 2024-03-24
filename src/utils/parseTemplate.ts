export const parseTemplate = (template: string): DocumentFragment => {
  const parsedTemplate = new DOMParser()
    .parseFromString(template, "text/html")
    .querySelector("template");

  if (!parsedTemplate) {
    throw new Error("Template Error");
  }

  return parsedTemplate.content;
};
