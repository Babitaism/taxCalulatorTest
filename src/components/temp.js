function hra_exemption(basicsalary, hrareceived, actualrentpaid, condition) {
    let exemption = actualrentpaid - 0.1 * basicsalary;
    let exemption1 = 0.5 * basicsalary;
    let exemption2 = 0.4 * basicsalary;
    let array = [];
    let minimum;
    let taxablehra;
    if (condition == "metro") {
      array = [hrareceived, exemption, exemption1];
      minimum = smallest(array);
    } else if (condition != "metro") {
      array = [hrareceived, exemption, exemption2];
      minimum = smallest(array);
    }
    console.log(minimum, "minimumhra");
    return (taxablehra = hrareceived - minimum);
  }
  
  function smallest(arr) {
    let smallest = arr[0];
    for (let i in arr) {
      if (smallest > arr[i]) {
        smallest = arr[i];
      }
    }
    return smallest;
  }
  
  // let final = hra_exemption(600000, 180000, 192000, "metro");
  // console.log(final)
  
  function gross_taxable_income_oldRegime(basicsalary, taxablehra, specialallowance,lta,othersource, standardDeduction){
    let grossTaxableIncomeOld = basicsalary +taxablehra + specialallowance + lta + othersource - standardDeduction;
    return grossTaxableIncomeOld;
  }
  
  // let aa = 1200000;
  // let bb = hra_exemption(1200000, 600000, 192000, "metro");
  // console.log(bb, "taxablehra");
  // let cc = 240000;
  // let dd = 20000;
  // let ee = 100000;
  // let ff = 50000;
  // let oldRegimeGrossTaxableIncome = gross_taxable_income_oldRegime(aa,bb,cc,dd,ee,ff);
  // console.log(oldRegimeGrossTaxableIncome , "grosstaxableincomeold");
  
  function gross_taxable_income_newRegime(basicsalary, hrareceived, specialallowance,lta,othersource, standardDeduction){
      let grossTaxableIncomeNew = basicsalary +hrareceived + specialallowance + lta + othersource - standardDeduction;
      return grossTaxableIncomeNew;
    }
    
  //   let a = 1200000;
  //   b = 600000;
  //   c = 240000;
  //   d = 20000;
  //   e = 100000;
  //   f = 50000;
  //   let newRegimeGrossTaxableIncome  = gross_taxable_income_newRegime(a,b,c,d,e,f);
  //   console.log(newRegimeGrossTaxableIncome, "grosstaxableincomenew");
  
    function incomeTaxDeduction(eightyC,eightyCC,eightyD,eightyTTA){
     return total_tax = eightyC+eightyCC+eightyD+eightyTTA
    }
  
  //   let totalTaxDeduction = incomeTaxDeduction(150000,50000,25000,5000)
  //   console.log(totalTaxDeduction,"totaltaxdeducted")
  
  
  function totalTaxableIncomeOldRegime(oldRegimeGrossTaxableIncome,totalTaxDeduction){
      return totalTaxableIncomeOldRegime = oldRegimeGrossTaxableIncome-totalTaxDeduction
    }
  
  
  
  function totalTaxableIncomeNewRegime(newRegimeGrossTaxableIncome){
      let totalTaxableIncomNew = newRegimeGrossTaxableIncome
      return totalTaxableIncomNew
    }
    
  
  
  function incomeTaxCalculationOldRegime(x){
      let tax
      let cess
      let finalTax
      if(x<250000){
         tax = 0
      }
  if(x>=250000 && x<=500000){
  tax = ((0.05)*(500000-x))
  }
  if(x>=500000 && x<=1000000){
      tax = 12500 +  ((0.2)*(1000000-x))
      }
  if(x>=1000000){
      tax = 12500  + 100000 + ((0.3)*(x-1000000))
  }
  cess = 0.04*tax
  finalTax = tax+cess
  return finalTax
  }
  let aa = 1200000;
  let bb = hra_exemption(1200000, 600000, 192000, "metro");
  console.log(bb, "taxablehra");
  let cc = 240000;
  let dd = 20000;
  let ee = 100000;
  let ff = 50000;
  let oldRegimeGrossTaxableIncome = gross_taxable_income_oldRegime(aa,bb,cc,dd,ee,ff);
  console.log(oldRegimeGrossTaxableIncome,"grosstaxableincomeold")
  let totalTaxDeduction = incomeTaxDeduction(150000,50000,25000,5000)
  let totalTaxableIncomeOld= totalTaxableIncomeOldRegime(oldRegimeGrossTaxableIncome,totalTaxDeduction)
  console.log(totalTaxableIncomeOld,"totalTaxableIncomeOld")
  
  let incomeTaxOld = incomeTaxCalculationOldRegime( totalTaxableIncomeOld)
  console.log(incomeTaxOld,"incometaxold") 
  
  
  function incomeTaxCalculationNewRegime(x){
      let tax
      let cess
      let finalTax
      if(x<300000){
         tax = 0
      }
  if(x>=300000 && x<=600000){
  tax = ((0.05)*(600000-x))
  }
  if(x>=600000 && x<=900000){
      tax = 15000 +  ((0.1)*(900000-x))
      }
  if(x>=900000 && x<=1200000){
          tax = 15000 + 30000 + ((0.15)*(1200000-x))
          }
  if(x>=1200000 && x<=1500000){
      tax = 15000 + 30000 + 45000 + ((0.2)*(1500000-x))
  }
  if(x>=1500000){
      tax = 15000 + 30000 + 45000+ 60000 + ((0.3)*(x-1500000))
  }
  cess = 0.04*tax
  finalTax = tax+cess
  return finalTax
  }
  
  let a = 1200000;
    b = 600000;
    c = 240000;
    d = 20000;
    e = 100000;
    f = 50000;
  let newRegimeGrossTaxableIncome  = gross_taxable_income_newRegime(a,b,c,d,e,f);
  console.log(newRegimeGrossTaxableIncome, "grosstaxableincomenew");
  let totalTaxableIncomeNew = totalTaxableIncomeNewRegime(newRegimeGrossTaxableIncome)
  console.log(totalTaxableIncomeNew,"totaltaxableincomenew")
  let incomeTaxNew = incomeTaxCalculationNewRegime(totalTaxableIncomeNew)
  console.log(incomeTaxNew,"newincometax")