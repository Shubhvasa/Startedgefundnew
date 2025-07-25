
import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", experience: "", plan: "", id: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://sheetdb.io/api/v1/w8s2bvfoz699x", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: form })
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", experience: "", plan: "", id: "", message: "" });
      }
    } catch (err) {
      console.error("Error submitting form", err);
    }
  };

  return (
    <div className="bg-white min-h-screen text-blue-900">
      <header className="bg-blue-700 text-white p-4 text-center text-2xl font-bold">
        🚀 StartEdgeFund
      </header>

      <section className="p-4 max-w-xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Apply for Funded Account</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input className="border w-full p-2" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input className="border w-full p-2" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <input className="border w-full p-2" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
            <input className="border w-full p-2" name="experience" placeholder="Experience" value={form.experience} onChange={handleChange} />
            <input className="border w-full p-2" name="plan" placeholder="Plan Interested" value={form.plan} onChange={handleChange} />
            <input className="border w-full p-2" name="id" placeholder="TradingView ID / Telegram ID" value={form.id} onChange={handleChange} />
            <textarea className="border w-full p-2" name="message" placeholder="Message" value={form.message} onChange={handleChange}></textarea>
            <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">Submit</button>
          </form>
        ) : (
          <p className="text-green-600 font-semibold">Thank you! We'll get back to you soon.</p>
        )}
      </section>

      <section className="p-4 bg-blue-50 text-sm max-w-xl mx-auto mt-8">
        <h2 className="text-lg font-bold mb-2">📘 Frequently Asked Questions</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>What is StartEdgeFund?</strong> — It's a prop trading platform providing capital to skilled traders.</li>
          <li><strong>How does it work?</strong> — You apply, pass the evaluation, and trade with our capital.</li>
          <li><strong>Profit Split?</strong> — You get up to 80% of profits depending on your plan.</li>
          <li><strong>Drawdown Rules?</strong> — Each plan has max daily and overall drawdown limits.</li>
          <li><strong>Who can apply?</strong> — Anyone above 18 with some trading experience.</li>
        </ul>
      </section>

      <footer className="p-4 text-center text-sm text-gray-600 mt-10">
        &copy; 2025 StartEdgeFund. Built by Shubham Vasa.
      </footer>

      <a href="https://wa.me/918980776205"
         className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg"
         target="_blank" rel="noopener noreferrer">
        💬
      </a>
    </div>
  );
}

export default App;
