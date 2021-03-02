const create = async (employee, credentials) => {
  try {
    let response = await fetch("/api/employees/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
      body: JSON.stringify(employee),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const list = async (params, credentials, signal) => {
  try {
    let response = await fetch("/api/employees/" + params.userId, {
      method: "GET",
      signal: signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { create, list };
