import React, { useState } from "react";

const AddTransactionForm = ({ onAddTransaction }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (amount && description) {
      onAddTransaction({ amount, description });
      setAmount("");
      setDescription("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-4 mb-4">
      <h3 className="text-lg font-medium mb-2">Add Transaction</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="amount">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
          rows="3"
          required
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default AddTransactionForm;
