interface Page {
  title: string;
  slug: string;
  has_child: boolean;
  sub_pages?: Page[];
}

const pages: Page[] = [
  {
    title: "Getting Started",
    slug: "#",
    has_child: true,
    sub_pages: [
      {
        title: "advanced topic",
        slug: "/docs/advanced-topics",
        has_child: false
      },
      {
        title: "getting  started",
        slug: "/docs/getting-started",
        has_child: false
      },
      {
        title: "Installation",
        slug: "/docs/getting-started/installation",
        has_child: true,
        sub_pages: [
          {
            title: "npm",
            slug: "/docs/getting-started/installation/npm",
            has_child: false
          },
          {
            title: "yarn",
            slug: "/docs/getting-started/installation/yarn",
            has_child: false
          }
        ]
      }
    ]
  },
  {
    title: "Core Concepts",
    slug: "/docs/core-concepts",
    has_child: true,
    sub_pages: [
      {
        title: "Architecture",
        slug: "/docs/core-concepts/architecture",
        has_child: false
      },
      {
        title: "Data Flow",
        slug: "/docs/core-concepts/data-flow",
        has_child: true,
        sub_pages: [
          {
            title: "State Management",
            slug: "/docs/core-concepts/data-flow/state",
            has_child: false
          },
          {
            title: "Props Drilling",
            slug: "/docs/core-concepts/data-flow/props",
            has_child: false
          }
        ]
      }
    ]
  },
  {
    title: "API Reference",
    slug: "/docs/api",
    has_child: true,
    sub_pages: [
      {
        title: "REST API",
        slug: "/docs/api/rest",
        has_child: true,
        sub_pages: [
          {
            title: "Authentication",
            slug: "/docs/api/rest/auth",
            has_child: false
          },
          {
            title: "Endpoints",
            slug: "/docs/api/rest/endpoints",
            has_child: false
          }
        ]
      },
      {
        title: "GraphQL",
        slug: "/docs/api/graphql",
        has_child: true,
        sub_pages: [
          {
            title: "Queries",
            slug: "/docs/api/graphql/queries",
            has_child: false
          },
          {
            title: "Mutations",
            slug: "/docs/api/graphql/mutations",
            has_child: false
          }
        ]
      }
    ]
  }
];

export default pages

