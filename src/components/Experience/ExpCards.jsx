export default function ExpCard({ startDate, endDate, role, company, task }) {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-emerald-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-emerald-400 dark:text-emerald-400">
        {startDate} to {endDate}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {role} at <span>{company}</span>
      </h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {task}
      </p>
    </li>
  );
}
