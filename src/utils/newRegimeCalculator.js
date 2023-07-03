export default class NewRegimeCalulator {
  constructor(salInfo) {
    this.basicsalary = parseInt(salInfo["basicSal"]) || 0;
    this.otherIncome = parseInt(salInfo["otherIncome"]) || 0;
    this.specialAllowance = parseInt(salInfo["specialAll"]) || 0;
    this.ltaReceived = parseInt(salInfo["ltaReceived"]) || 0;
    this.city = salInfo["city"] || "Non Metro"; // TODO:: make radio madatory
    this.hrareceived = parseInt(salInfo["hraRec"]) || 0;
    this.totaDeduction = 0;
    this.taxableSalary = 0;
    this.totalSalary =
      this.basicsalary +
      this.hrareceived +
      this.specialAllowance +
      this.otherIncome +
      this.ltaReceived;
  }

  allDeduction() {
    let standardDeduction = 50000;
    this.totaDeduction = standardDeduction;
  }

  calculateIncomeTax() {
    this.allDeduction();
    this.taxableSalary = this.totalSalary - this.totaDeduction;
    console.log(this.taxableSalary, "taxablesal");
    console.log(this.totaDeduction, "totalded");
    console.log(this.totalSalary, "totalsal");
    return this.incomeTaxCalculation();
  }

  incomeTaxCalculation() {
    let tax;
    let cess;
    let finalTax;
    if (this.taxableSalary < 300000) {
      tax = 0;
    }
    if (this.taxableSalary >= 300000 && this.taxableSalary <= 600000) {
      tax = 0.05 * (600000 - this.taxableSalary);
    }
    if (this.taxableSalary >= 600000 && this.taxableSalary <= 900000) {
      tax = 15000 + 0.1 * (900000 - this.taxableSalary);
    }
    if (this.taxableSalary >= 900000 && this.taxableSalary <= 1200000) {
      tax = 15000 + 30000 + 0.15 * (1200000 - this.taxableSalary);
    }
    if (this.taxableSalary >= 1200000 && this.taxableSalary <= 1500000) {
      tax = 15000 + 30000 + 45000 + 0.2 * (1500000 - this.taxableSalary);
    }
    if (this.taxableSalary >= 1500000) {
      tax =
        15000 + 30000 + 45000 + 60000 + 0.3 * (this.taxableSalary - 1500000);
    }
    cess = 0.04 * tax;
    finalTax = tax + cess;
    return finalTax;
  }
}
