export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        Welcome back! Here is your overview.
      </p>

      {/* Stats cards */}
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="p-6 rounded-xl border border-slate-200 dark:border-slate-800"
          >
            <p className="text-sm text-slate-500">{s.label}</p>
            <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{s.value}</p>
            <p className={`mt-1 text-xs ${s.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {s.change}
            </p>
          </div>
        ))}
      </div>

      {/* Recent activity */}
      <div className="mt-8 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Activity</h2>
        <div className="mt-4 space-y-3">
          {activities.map((a, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <span className="text-slate-400">{a.time}</span>
              <span className="text-slate-600 dark:text-slate-400">{a.event}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const stats = [
  { label: 'Total Revenue', value: '$2,450', change: '+12.5%' },
  { label: 'Active Users', value: '1,204', change: '+8.2%' },
  { label: 'Conversion Rate', value: '3.2%', change: '-0.4%' },
  { label: 'MRR', value: '$890', change: '+5.1%' },
];

const activities = [
  { time: '10 min ago', event: 'New user registered: alice@example.com' },
  { time: '1 hour ago', event: 'Payment received: $29.00 (Pro plan)' },
  { time: '3 hours ago', event: 'User upgraded from Starter to Pro' },
  { time: '5 hours ago', event: 'New project created: MySaaS' },
  { time: 'Yesterday', event: 'Weekly report generated' },
];
