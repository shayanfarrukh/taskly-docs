import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/taskly-sample-api",
    },
    {
      type: "category",
      label: "Tasks",
      items: [
        {
          type: "doc",
          id: "api/list-tasks",
          label: "List tasks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-task",
          label: "Create a task",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-task",
          label: "Retrieve a task",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/complete-task",
          label: "Mark a task as completed",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Webhooks",
      items: [
        {
          type: "doc",
          id: "api/create-webhook-endpoint",
          label: "Register a webhook endpoint",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/on-task-completed",
          label: "Task completed event",
          className: "api-method event",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
