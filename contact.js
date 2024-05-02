function submitForm() {
  const name = document.getElementById("form_name").value;
  const email = document.getElementById("form_email").value;
  const subject = document.getElementById("form_contact").value;
  const message = document.getElementById("form_companyName").value;

  const requestData = {
    leadFirstName: name,
    leadEmail: email,
    leadGender: contact,
    leadLastName: companyName,
    source: "dmcentral",
  };

  // API endpoint
  const apiUrl =
    "http://65.0.90.148:5377/content-manager/collection-types/application::lead.lead";

  // Bearer token
  const bearerToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzM3YTRlYTZlNmFiYzAzYmRkNTJjYyIsImlhdCI6MTcxNDY0OTY4MCwiZXhwIjoxNzE3MjQxNjgwfQ.O8WdyoBP9EBHH_n9ZQFcvKr27DRMU5XnHOaJPjM0-xw";

  // Fetch options
  const fetchOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  };

  // Making the fetch request
  fetch(apiUrl, fetchOptions)
    .then((response) => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse the JSON from the response
    })
    .then((data) => {
      console.log("Response:", data); // Do something with the response data
      // Optionally, you can reset the form after successful submission
      document.getElementById("myForm").reset();
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
