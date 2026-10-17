type Currency = "USD" | "EUR" | "UAH";

interface Convert {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: Convert): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 20, currency: "USD" });
