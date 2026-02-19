function calculateDebts(members, expenses) {
  if (!members.length || !expenses.length) return [];

  const balance = {};

  members.forEach(m => {
    balance[m.name] = 0;
  });

  expenses.forEach(exp => {
    const split = exp.amount / members.length;

    members.forEach(m => {
      if (m.name === exp.paidBy) {
        balance[m.name] += exp.amount - split;
      } else {
        balance[m.name] -= split;
      }
    });
  });

  const creditors = [];
  const debtors = [];

  Object.keys(balance).forEach(person => {
    const amt = parseFloat(balance[person].toFixed(2));
    if (amt > 0) creditors.push({ name: person, amount: amt });
    if (amt < 0) debtors.push({ name: person, amount: -amt });
  });

  const settlements = [];
  let i = 0, j = 0;

  while (i < debtors.length && j < creditors.length) {
    const settle = Math.min(debtors[i].amount, creditors[j].amount);

    settlements.push({
      from: debtors[i].name,
      to: creditors[j].name,
      amount: settle
    });

    debtors[i].amount -= settle;
    creditors[j].amount -= settle;

    if (debtors[i].amount === 0) i++;
    if (creditors[j].amount === 0) j++;
  }

  return settlements;
}

module.exports = calculateDebts;
