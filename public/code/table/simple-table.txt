interface Column {
  name: string;
  slug?: string;
  sort: boolean;
  classNames: string;
}

interface Person {
  name: string;
  title: string;
  email: string;
  role: string;
}

const SimpleTable: React.FC = () => {
  const columns: Column[] = [
    {
      name: "Name",
      slug: "name",
      sort: true,
      classNames: "",
    },
    {
      name: "Title",
      slug: "title",
      sort: true,
      classNames: "",
    },
    {
      name: "Email",
      slug: "email",
      sort: true,
      classNames: "",
    },
    {
      name: "Role",
      slug: "role",
      sort: false,
      classNames: "",
    },
    {
      name: "Action",
      sort: false,
      classNames: "",
    },
  ];

  const data: Person[] = [
    {
      name: "Lindsay Walton",
      title: "Front-end Developer",
      email: "lindsay.walton@example.com",
      role: "Member",
    },
    {
      name: "Alex Johnson",
      title: "Back-end Developer",
      email: "alex.johnson@example.com",
      role: "Member",
    },
    {
      name: "Maria Garcia",
      title: "UI/UX Designer",
      email: "maria.garcia@example.com",
      role: "Member",
    },
    {
      name: "Michael Brown",
      title: "Full-stack Developer",
      email: "michael.brown@example.com",
      role: "Admin",
    },
    {
      name: "Emma Martinez",
      title: "Product Manager",
      email: "emma.martinez@example.com",
      role: "Member",
    },
    {
      name: "James Wilson",
      title: "DevOps Engineer",
      email: "james.wilson@example.com",
      role: "Member",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    {columns?.map((column) => (
                      <th
                        key={column?.slug}
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        {column?.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data.map((person) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.role}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleTable;
