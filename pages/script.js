const form = document.querySelector("#create-settlement");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const [
    caseNum,
    courtDateTime,
    plaintiffName,
    plaintiffPhone,
    defendantName,
    defendantPhone,
  ] = e.target;

  const [courtDate, courtTime] = courtDateTime.value.split("T");

  const results = await fetch('/api',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        caseNum: caseNum.value,
        plantiffName: plaintiffName.value,
        plaintiffPhone: plaintiffPhone.value,
        defendantName: defendantName.value,
        defendantPhone: defendantPhone.value,
      }),
    }
  );
  
  e.target.reset();
  alert("Your settlement has been successfully created!")
});
