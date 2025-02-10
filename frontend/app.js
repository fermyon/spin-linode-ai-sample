document.addEventListener("DOMContentLoaded", function (event) {
    const runButton = document.getElementById("run");
    const aiResponse = document.getElementById("aiResponse");
    const aiReasoning = document.getElementById("aiReasoning");

    const resetResponse = () => {
        aiResponse.value = "";
        aiReasoning.value = "";
    };
    runButton.addEventListener("click", async (e) => {
        resetResponse();
        const firstName = document.getElementById("customerFirstName").value;
        const lastName = document.getElementById("customerLastName").value;
        const gender = document.getElementById("customerGender").value;
        const age = +document.getElementById("customerAge").value;
        const nationality = document.getElementById("customerNationality").value;
        const product = document.getElementById("productDescription").value;
        const recentPurchases = document.getElementById("recentPurchases").value;
        const payload = {
            productDescription: product,
            customer: {
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                nationality: nationality,
                age: age,
                recentPurchases: recentPurchases
            }
        };

        const response = await fetch("/api/personalize", {
            body: JSON.stringify(payload),
            method: "POST",
            headers: {
                "content-type": "application/json"
            }
        });
        const json_response = await response.json();
        aiResponse.value = json_response.response;
        aiReasoning.value = json_response.reasoning;

        e.preventDefault();
        return false;
    });
});