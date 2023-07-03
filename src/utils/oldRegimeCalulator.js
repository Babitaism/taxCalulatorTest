export default class OldRegimeCalulator {
    constructor(salInfo) {
      this.eightyC = parseInt(salInfo["80C"]) || 0;
      this.eightyD = parseInt(salInfo["80D"]) || 0;
      this.eightyCC = parseInt(salInfo["80CCD"]) || 0;
      this.eightyTTA = parseInt(salInfo["80TTA"]) || 0;
      this.basicsalary = parseInt(salInfo["basicSal"]) || 0;
      this.otherIncome = parseInt(salInfo["otherIncome"]) || 0;
      this.specialAllowance = parseInt(salInfo["specialAll"]) || 0;
      this.ltaBilled = parseInt(salInfo["ltaBilled"]) || 0;
      this.ltaReceived = parseInt(salInfo["ltaReceived"]) || 0;
      this.city = salInfo["city"] || "Non Metro"; // TODO:: make radio madatory
      this.hrareceived = parseInt(salInfo["hraRec"]) || 0;
      this.rentPaid = parseInt(salInfo["rentPaid"]) || 0;
      this.totaDeduction = 0;
      this.taxableSalary = 0;
      this.totalSalary =
        this.basicsalary +
        this.hrareceived +
        this.specialAllowance +
        this.otherIncome +
        this.ltaReceived;
    }
  
    hraExemption() {
      let exemption = this.rentPaid - 0.1 * this.basicsalary;
      let exemption1 = 0.5 * this.basicsalary;
      let exemption2 = 0.4 * this.basicsalary;
      let array = [];
      let minimum = 0;
      if (this.city === "Metro") {
        array = [this.hrareceived, exemption, exemption1];
        minimum = Math.min(...array);
      } else if (this.city !== "Metro") {
        array = [this.hrareceived, exemption, exemption2];
        minimum = Math.min(...array);
      }
      return minimum;
    }
  
    allDeduction() {
      let hraDeductable = this.hraExemption();
      let standardDeduction = 50000;
      this.totaDeduction =
        this.eightyC +
        this.eightyD +
        this.eightyCC +
        this.eightyTTA +
        standardDeduction +
        this.ltaBilled +
        hraDeductable;
    }
    
    calculateTax() {
      this.allDeduction();
      this.taxableSalary = this.totalSalary - this.totaDeduction;
      return this.incomeTaxCalculation();
    }
  
  
  incomeTaxCalculation() {
    let tax;
    let cess;
    let finalTax;
    if (this.taxableSalary < 250000) {
      tax = 0;
    }
    if (this.taxableSalary >= 250000 && this.taxableSalary <= 500000) {
      tax = 0.05 * (500000 - this.taxableSalary);
    }
    if (this.taxableSalary >= 500000 && this.taxableSalary <= 1000000) {
      tax = 12500 + 0.2 * (1000000 - this.taxableSalary);
    }
    if (this.taxableSalary >= 1000000) {
      tax = 12500 + 100000 + 0.3 * (this.taxableSalary - 1000000);
    }
    cess = 0.04 * tax;
    finalTax = tax + cess;
    return finalTax;
  }
  
}