export const getHipotecaRepayment = (amount, years, interest) => {
  const monthlyInterest = interest / 100 / 12;
  const totalPayments = years * 12;
  const monthlyPayment =
    (amount * monthlyInterest * Math.pow(1 + monthlyInterest, totalPayments)) /
    (Math.pow(1 + monthlyInterest, totalPayments) - 1);
  const totalRepayment = monthlyPayment * totalPayments;
  return {
    month: monthlyPayment.toFixed(2),
    total: totalRepayment.toFixed(2),
  };
};

export const getHipotecaOnly = (amount, years, interest) => {
  const monthlyInterest = interest / (100 / 12);
  const totalPayments = years * 12;
  const monthlyPayment = amount * monthlyInterest;
  const totalRepayment = monthlyPayment * totalPayments;
  return {
    month: monthlyPayment.toFixed(2),
    total: totalRepayment.toFixed(2),
  };
};
