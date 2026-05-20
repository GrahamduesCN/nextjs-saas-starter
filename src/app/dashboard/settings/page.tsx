export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Settings</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">Manage your account settings.</p>

      <div className="mt-8 max-w-md space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Display Name</label>
          <input
            type="text"
            defaultValue="John Doe"
            className="mt-1 w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
          <input
            type="email"
            defaultValue="john@example.com"
            className="mt-1 w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <button className="px-4 py-2 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors">
          Save changes
        </button>
      </div>
    </div>
  );
}
