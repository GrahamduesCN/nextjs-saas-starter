export default function BillingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Billing</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        Manage your subscription and payment methods.
      </p>

      <div className="mt-8 p-8 rounded-xl border border-slate-200 dark:border-slate-800">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Current Plan</h2>
        <p className="mt-1 text-slate-600 dark:text-slate-400">
          You are on the <span className="font-medium text-brand-600">Free</span> plan.
        </p>
        <button className="mt-4 px-4 py-2 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors">
          Upgrade to Pro
        </button>
      </div>

      <div className="mt-4 p-8 rounded-xl border border-slate-200 dark:border-slate-800">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Payment Method</h2>
        <p className="mt-1 text-sm text-slate-500">No payment method on file.</p>
        <button className="mt-4 px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          Add payment method
        </button>
      </div>
    </div>
  );
}
