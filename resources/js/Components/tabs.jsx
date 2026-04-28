export default function Tabs({ tabs, activeTab, onChange, className = '' }) {
	const currentTab = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

	return (
		<section className={className}>
			<div className="border-b border-gray-200">
				<nav className="-mb-px flex gap-6" aria-label="Tabs">
					{tabs.map((tab) => {
						const isActive = currentTab?.id === tab.id;

						return (
							<button
								key={tab.id}
								type="button"
								onClick={() => onChange(tab.id)}
								className={
									isActive
										? 'whitespace-nowrap border-b-2 border-indigo-500 px-1 py-4 text-sm font-medium text-indigo-600 transition duration-150 ease-in-out focus:outline-none'
										: 'whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 transition duration-150 ease-in-out hover:border-gray-300 hover:text-gray-700 focus:outline-none'
								}
								aria-current={isActive ? 'page' : undefined}
							>
								{tab.label}
							</button>
						);
					})}
				</nav>
			</div>

			{currentTab?.content && (
				<div className="pt-6 text-gray-900">{currentTab.content}</div>
			)}
		</section>
	);
}
