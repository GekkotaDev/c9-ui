export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator("story", {
    description: "Preview of your UI component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component story name?",
      },
      {
        type: "input",
        name: "subdirectory",
        message: "Subdirectory? (optional)",
        default: "/",
      },
    ],
    actions: [
      {
        type: "add",
        path: "./src/components/ui/{{subdirectory}}/{{pascalCase name}}.story.vue",
        templateFile: "./templates/story/Name.story.vue.hbs",
      },
    ],
  });
}
