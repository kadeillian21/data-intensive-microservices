import { PencilSquareIcon, EyeIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const projects
 = [
  {
    name: 'Command Query Responsibility Segregation',
    codeLink: 'https://github.com/kadeillian21/data-intensive-microservices/tree/production/src/microservices/cqrs',
    implementationLink: '/cqrs',
    description: 'Command Query Responsibility Segregation is a design pattern that separates the read and write operations of a data store.  This allows for the use of different data stores for each operation, which can be useful for scaling and performance.',
    technologies: 'Postgresql, Prisma',
    imageUrl:
      '/cqrs.png',
  },
]

export default function Code() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {projects
      .map((project) => (
        <li
          key={project.name}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <Image
              className="mx-auto h-32 w-32 flex-shrink-0"
              src={project.imageUrl}
              alt=""
              width={200}
              height={200}
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900">{project.name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Description</dt>
              <dd className="text-sm text-gray-500">{project.description}</dd>
              <dt className="sr-only">Technologies</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {project.technologies}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={project.implementationLink}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <PencilSquareIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Go to Implementation
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={project.codeLink}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <EyeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}