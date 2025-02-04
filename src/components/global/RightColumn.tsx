export default function RightColumn() {
  return (
    <nav className="bg-paper col-span-1">
      <div className="bg-paper rounded p-4">
        <h2 className="text-xl font-bold text-primary">Forked Projects</h2>
        <p className="text-4xl font-semibold text-deep">1,278</p>
        <p className="text-sm text-gray-400">Last 10 min</p>
      </div>
      <div className="bg-paper rounded p-4">
        <h2 className="text-xl font-bold text-primary">Collaborations Today</h2>
        <p className="text-4xl font-semibold text-deep">375</p>
        <p className="text-sm text-gray-400">Last 10 min</p>
      </div>
      <div className="bg-paper rounded p-4">
        <h2 className="text-xl font-bold text-primary">Trending Developers</h2>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <span className="font-medium text-deep">subbesh1</span>
            <span className="text-gray-500">react-select</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-medium text-deep">comporned</span>
            <span className="text-gray-500">webpack-module-nom</span>
          </li>
        </ul>
      </div>
    </nav>
  )
}
